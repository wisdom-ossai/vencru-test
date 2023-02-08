import searchIcon from "../assets/searchIcon.svg";

const SearchInput = () => {
  return (
    <form className="max-w-sm px-4">
      <div className="relative">
        <span className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3">
          <img src={searchIcon} alt="search-icon" />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="w-full py-3 pl-10 pr-4 text-gray-500 border rounded outline-none focus:bg-white focus:border-primary-600"
        />
      </div>
    </form>
  );
};

export default SearchInput;
