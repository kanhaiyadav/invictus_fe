import { dataType } from "@/types";
import { IoSearch } from "react-icons/io5";

const SearchBox = ({ data }: {
    data: dataType
}) => {
    return (
        <div className="flex items-center w-[600px] bg-white border-1 border-gray-300 rounded-full p-1 pl-4 outline-2 outline-primary outline-offset-3 m-auto ">
            <input
                type="text"
                placeholder="Search orgnaisation..."
                className="outline-none border-0 text-xl h-full grow "
            />
            <div className="bg-primary text-white rounded-full h-full cursor-pointer p-2">
                <IoSearch className="text-white text-2xl" />
            </div>
        </div>
    );
};

export default SearchBox;
