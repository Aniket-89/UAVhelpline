import { useState } from "react";
import { DaDrone } from "../assets/assets";
import Button from "../components/Button/Button";
import BlogCard from "../components/BlogCard/BlogCard";

const blogs = [
  {
    id: 1,
    date: "Dec. 21th 2024",
    author: "Author",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius deserunt labore quo architecto, possimus laborum.",
    image: DaDrone,
  },
  {
    id: 2,
    date: "Dec. 21th 2024",
    author: "Author",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius deserunt labore quo architecto, possimus laborum.",
    image: DaDrone,
  },
  {
    id: 3,
    date: "Dec. 21th 2024",
    author: "Author",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius deserunt labore quo architecto, possimus laborum.",
    image: DaDrone,
  },
  // Add more blog objects here
];

const BlogList = () => {
  const [visibleCount, setVisibleCount] = useState(10);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div>
      {/* <div className="bg-zinc"> */}
      <div className="md:bg-zinc-200 overflow-hidden py-4 md:py-0 md:pr-0 flex relative flex-col-reverse md:flex-row gap-4 h-[50vh] md:h-[435px] lg:h-[520px] w-full container">
        <div className="lg:p-6 md:p-3 flex-1 md:space-y-8 space-y-4 flex flex-col justify-end w-fit md:justify-start">
          <p>Dec. 21th 2024 | Author</p>
          <h4 className="leading-tight text-neutral md:bg-transparent backdrop-blur-sm shadow-lg md:shadow-none bg-primary/10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vero
            soluta sint!
          </h4>
          <p className="bg-zinc-200/10 md:bg-transparent backdrop-blur-sm shadow-lg md:shadow-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius
            deserunt labore quo architecto, possimus laborum.
          </p>
          <div className="">
            <Button onClick={() => console.log("open blog")}>Read more</Button>
          </div>
        </div>
        <div className="overflow-hidden h-full w-full md:w-1/2 flex-1 absolute md:relative top-0 left-0 z-[-1] md:z-0">
          <img
            src={DaDrone}
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
      {/* </div> */}

      <div className="container mt-24 space-y-6">
        <h4>Latest Blogs</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.slice(0, visibleCount).map((blog) => (
            <BlogCard thumbnail={blog.image}>
              hellafjd agad ga dgjkfa a
            </BlogCard>
          ))}
        </div>

        {visibleCount < blogs.length && (
          <div className="text-center mt-8">
            <Button onClick={loadMore} styleType="outline">
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
