export default function UrlGenerator(props) {
  if (props === "article") {
    return "/news/";
  } else if (props === "servicePage") {
    return "/services/";
  } else return null;
}
