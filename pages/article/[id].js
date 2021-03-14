import { url } from "../../config/next.config";
import ReactMarkdown from "react-markdown";
export default function Article({ article }) {
  return (
    <div>
      <h1>{article.Title}</h1>
      <ReactMarkdown>{article.Body}</ReactMarkdown>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const data = await fetch(`${url}/articles/${context.params.id}`);
  const article = await data.json();

  return {
    props: { article },
    revalidate: 1,
  };
};
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(`${url}/articles`);
  const articles = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = articles.map((item) => ({
    params: { id: item.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}
