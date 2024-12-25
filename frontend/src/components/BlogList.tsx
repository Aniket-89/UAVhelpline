import React, { useEffect, useState } from "react";
import { marked } from "marked";
import fm from "front-matter";

interface BlogMetadata {
  id: number;
  title: string;
  thumbnail: string;
  brief: string;
  published_date: string;
  category: string;
}

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogMetadata[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch the index.json file
        const indexResponse = await fetch("/blogs/index.json");
        if (!indexResponse.ok) throw new Error("Failed to fetch blog index.");

        const blogIndex = await indexResponse.json();
        const blogPromises = blogIndex.map((blog: { filename: string }) =>
          fetch(`/blogs/${blog.filename}`).then((res) => res.text())
        );

        // Fetch all Markdown files
        const blogTexts = await Promise.all(blogPromises);
        const parsedBlogs = blogTexts.map((text) => {
          const { attributes } = fm<BlogMetadata>(text);
          return attributes;
        });

        setBlogs(parsedBlogs);
      } catch {
        setError("Failed to load blogs.");
      }
    };

    fetchBlogs();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!blogs.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid gap-8 lg:w-1/2">
      <h2 className="xl:text-3xl sm:text-[3vw] text-2xl font-Lato font-semibold">
        Aviation & Aerospace News
      </h2>
      <h3 className="xl:text-3xl sm:text-[3vw] text-2xl font-Lato">News</h3>
      {blogs.map(({ title, published_date, id, thumbnail, brief, category }) => (
        <div key={id} className="flex flex-col lg:flex-row gap-2">
          <img
            src={thumbnail}
            alt={title}
            className="lg:w-1/4 h-full aspect-[3/2] lg:aspect-square object-cover object-center"
          />
          <div className="grid">
            <div className="flex gap-2">
              <span className="">{new Date(published_date).toLocaleDateString()}</span> |{" "}
              <span className="text-primary">{category}</span>
            </div>
            <a href={`/news/${id}`}>
              <h3 className="xl:text-3xl sm:text-[3vw] text-2xl">{title}</h3>
            </a>
            <p className="text-grayDark">{brief}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
