import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { marked } from "marked";
import fm from "front-matter"; // For extracting front matter

interface BlogMetadata {
  id: number;
  title: string;
  thumbnail: string;
  brief: string;
  published_date: string;
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<BlogMetadata | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/blogs/${id}.md`);
        if (!response.ok) {
          throw new Error("Blog not found");
        }
        const text = await response.text();
        const { attributes, body } = fm<BlogMetadata>(text);
        if (attributes.id.toString() !== id) {
          throw new Error("Blog ID mismatch");
        }
        setMetadata(attributes);
        const parsedContent = await marked(body);
        setContent(parsedContent);
      } catch (err) {
        setError((err as Error).message);
        navigate("/404"); // Redirect to 404 page
      }
    };

    fetchBlog();
  }, [id, navigate]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="bg-white py-12">
      <div className="container lg:w-[60%]">
        {!metadata || !content ? (
          <div className="flex justify-center items-center h-[40vh] w-full">
            <p className="text-3xl">Loading...</p>
          </div>
        ) : (
          <div className="p-6">
            <img
              src={metadata.thumbnail}
              alt={metadata.title}
              className="w-full aspect-[16/9] object-cover rounded-md mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">{metadata.title}</h1>
            <p className="text-gray-500 mb-4">
              Published on{" "}
              {new Date(metadata.published_date).toLocaleDateString()}
            </p>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;