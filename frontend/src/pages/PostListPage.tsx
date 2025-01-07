import PostList from "../components/PostList";


const CATEGORIES_LINK = [
  { label: "UAV", href: "#" },
  { label: "UAV", href: "#" },
  { label: "UAV", href: "#" },
  { label: "UAV", href: "#" },
  { label: "UAV", href: "#" },
  { label: "UAV", href: "#" },
  { label: "UAV", href: "#" },
  { label: "UAV", href: "#" },
];


const PostListPage = () => {
  return (
    <div className="bg-white py-16">
      <div className="container flex justify-between">
        <div className="hidden lg:flex flex-col gap-2 w-[10%]">
            
          {CATEGORIES_LINK.map(({ label, href }) => (
            <a key={label} href={href} className="border-t border-lightBg pt-2">
              {label}
            </a>
          ))}
          <span className="bg-lightBg w-full h-[1px]"></span>
        </div>

        <PostList />

        <div className=""></div>
      </div>
    </div>
  );
};

export default PostListPage;
