import React, { useEffect, useState } from "react";
import { marked } from "marked";
import fm from "front-matter";
import { IoIosArrowForward } from "react-icons/io";

interface NewsItemProps {
  id: string;
  published_date: string;
  title: string;
  brief?: string;
  thumbnail?: string;
}

const NewsItem: React.FC<NewsItemProps> = ({
  published_date,
  title,
  brief,
  thumbnail,
}) => (
  <div className="grid gap-1 flex-1">
    {thumbnail && (
      <img
        src={thumbnail}
        alt="News Image"
        className="aspect-[5/4] mb-2 object-cover object-center h-[280px]"
      />
    )}
    <p>{new Date(published_date).toLocaleDateString()}</p>
    <a href="#" className="font-semibold text-[17px] hover:underline">
      {title}
    </a>
    {brief && <p>{brief}</p>}
  </div>
);

const LatestNewsSection: React.FC = () => {
  const [newsItems, setNewsItems] = useState<NewsItemProps[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsItems = async () => {
      try {
        // Fetch the index of Markdown files
        const indexResponse = await fetch("/blogs/index.json");
        if (!indexResponse.ok) throw new Error("Failed to fetch blog index.");

        const blogIndex = await indexResponse.json();
        const newsPromises = blogIndex.map((blog: { filename: string }) =>
          fetch(`/blogs/${blog.filename}`).then((res) => res.text())
        );

        const blogTexts = await Promise.all(newsPromises);

        // Parse the Markdown files
        const parsedNews = blogTexts.map((text) => {
          const { attributes } = fm<NewsItemProps>(text);
          return attributes;
        });

        setNewsItems(parsedNews);
      } catch {
        setError("Failed to load news items.");
      }
    };

    fetchNewsItems();
  }, []);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!newsItems.length) {
    return (
      <div className="bg-white container min-h-[300px] text-black flex justify-center items-center max-w-full min-w-[60%] lg:w-fit gap-4 p-10 lg:-translate-y-[15%]">
        <p className="text-3xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white container text-black flex flex-col max-w-full min-w-[60%] lg:w-fit gap-4 p-10 lg:-translate-y-[15%]">
      <h3 className="container md:text-[3vw] text-2xl font-medium mb-4">
        Latest News
      </h3>
      <div className="container flex-col flex lg:flex-row gap-8 text-justify">
        <NewsItem {...newsItems[0]} />
        <div className="flex-1 flex flex-col gap-4 justify-between">
          {newsItems.slice(1).map((item, index) => (
            <React.Fragment key={index}>
              <div>
                <p>{new Date(item.published_date).toLocaleDateString()}</p>
                <a
                  href={`/news/${item.id}`}
                  className="font-semibold text-[17px] hover:underline"
                >
                  {item.title}
                </a>
              </div>
              {index < newsItems.length - 2 && (
                <span className="w-7 h-[2px] bg-accentGold"></span>
              )}
            </React.Fragment>
          ))}
          <a
            href="/news"
            className="font-semibold text-[17px] hover:underline flex items-center justify-end my-4"
          >
            Visit the Newsroom <IoIosArrowForward className="text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsSection;
