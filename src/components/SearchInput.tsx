import searchIcon from "../assets/searchIcon.svg";

const SearchInput = ({ icon, placeholder, defaultValue, ...rest }: any) => {
  return (
    <form className="max-w-full">
      <div className="relative">
        <span className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3">
          <img src={icon || searchIcon} alt="search-icon" />
        </span>
        <input
          type="text"
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="w-full py-3 pl-10 pr-4 text-gray-500 border rounded outline-none focus:bg-white focus:border-primary-600"
          {...rest}
        />
      </div>
    </form>
  );
};

export default SearchInput;
