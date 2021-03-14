import { url } from "../config/next.config";
export default function About({ data }) {
  console.log(data);

  return (
    <div>
      <h1>About the author:</h1>
      {data.Body}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${url}/about-me`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 1,
  };
};
