import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/fetchPosts";

interface PostMetadata {
  id: number;
  title: string;
  cover: string;
  brief: string;
  updated_at: string;
  category: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<PostMetadata[]>([]);
  const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } 
      catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } 
      finally {
        setIsLoading(false)
      }
    };
    loadPosts()
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid gap-8 lg:w-1/2">
      <h2 className="xl:text-3xl sm:text-[3vw] text-2xl font-Lato font-semibold">
        Aviation & Aerospace News
      </h2>
      <h3 className="xl:text-3xl sm:text-[3vw] text-2xl font-Lato">News</h3>
      {posts.map(
        ({ title, updated_at, id, cover, brief }) => (
          <div key={id} className="flex flex-col lg:flex-row gap-2">
            <img
              src={cover}
              alt={title}
              className="lg:w-1/4 h-full aspect-[3/2] lg:aspect-square object-cover object-center"
            />
            <div className="grid">
              <div className="flex gap-2">
                <span className="">
                  {new Date(updated_at).toLocaleDateString()}
                </span>{" "}
                {/* | <span className="text-primary">{category}</span> */}
              </div>
              <a href={`/news/${id}`}>
                <h3 className="xl:text-3xl sm:text-[3vw] text-2xl">{title}</h3>
              </a>
              <p className="text-grayDark">{brief}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default PostList;
