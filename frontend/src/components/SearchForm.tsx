import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const SearchForm = () => {
  return (
    <form className="border bg-white border-bodyBg p-2 max-w-[418px] w-full flex justify-between"z>
      <input type="text" placeholder="Search" className="p-0 rounded-sm flex-1" />
      <button type="submit">
        <HiMiniMagnifyingGlass className="text-accentGold size-5" />
      </button>
    </form>
  );
};

export default SearchForm;
