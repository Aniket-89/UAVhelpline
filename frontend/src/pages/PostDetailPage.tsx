import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSinglePost } from "../services/fetchPosts";
import { PlaceholderImage } from "../assets/assets"

interface Postdata {
  id: number;
  title: string;
  cover?: string;
  brief: string;
  body: Node;
  updated_at: string;
}

const PostDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
    const [post, setPost] = useState<Postdata | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async() => {
        try {
            const data = await fetchSinglePost(id);
            setPost(data)

        } catch (err) {
            if (err instanceof Error) {
                setError(err.message)
            }
            else {
                setError("An unknown error occurred")
            }
        }

    }
    fetchPost();
  }, [id, navigate]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
 

  return (
    <div className="bg-white py-12">
      <div className="container lg:w-[60%]">
        {!post ? (
          <div className="flex justify-center items-center h-[40vh] w-full">
            <p className="text-3xl">Loading...</p>
          </div>
        ) : (
          <div className="p-6">
            <img
              src={post.cover ? post.cover : PlaceholderImage}
              alt={post.title}
              className="w-full aspect-[16/9] object-cover rounded-md mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-500 mb-4">
              Published on{" "}
              {new Date(post.updated_at).toLocaleDateString()}
            </p>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetailPage;