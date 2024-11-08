
import { FiSearch, FiFilter } from 'react-icons/fi';

const SearchEvents = () => {
  return (
    <div className="w-full px-4 py-2">
      <div className="flex items-center w-full border border-gray-300 rounded-lg px-3 py-2">
        <FiSearch className="text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 ml-2 outline-none bg-transparent"
        />
        <button className="focus:outline-none">
          <FiFilter className="text-gray-400 w-5 h-5 cursor-pointer hover:text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default SearchEvents;
