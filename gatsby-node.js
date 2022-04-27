// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        allDatoCmsParentPage {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
        allDatoCmsServicePage {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
        allDatoCmsArticle {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `
  );
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allDatoCmsParentPage.edges.forEach(({ node }) => {
    createPage({
      path: "/" + node.slug + "/",
      component: require.resolve(`./src/templates/ParentPage.js`),
      context: { slug: node.slug },
    });
  });
  result.data.allDatoCmsServicePage.edges.forEach(({ node }) => {
    createPage({
      path: "services/" + node.slug + "/",
      component: require.resolve(`./src/templates/ChildPageService.js`),
      context: { slug: node.slug },
    });
  });
  result.data.allDatoCmsArticle.edges.forEach(({ node }) => {
    createPage({
      path: "news/" + node.slug + "/",
      component: require.resolve(`./src/templates/SingleArticle.js`),
      context: { slug: node.slug },
    });
  });
};
