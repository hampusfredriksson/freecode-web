import { NextPage } from "next";
import Link from "next/link";

const Event: NextPage = ({ posts }) => {
  return (
    <div>
      <div className="flex justify-center mt-24">
        <h1 className="font-mono text-4xl">Events</h1>
      </div>

      {posts.data.map((post) => (
        <Link href={`/event/${post.attributes.slug}`} key={post.id}>
          <a>
            <h2>{post.attributes.Title}</h2>
          </a>
        </Link>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  // get posts from api

  const res = await fetch(`http://localhost:1337/api/posts`);

  const posts = await res.json();

  return {
    props: { posts },
  };
}

export default Event;
