import { dataType } from "@/types";
import { IoSearch } from "react-icons/io5";

const SearchBox = ({
    data,
    setData,
}: {
    data: dataType;
    setData: React.Dispatch<React.SetStateAction<dataType>>;
}) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData = {
            orgs: data.orgs.filter((org) =>
                org.title.toLowerCase().includes(e.target.value.toLowerCase())
            ),
        };

        newData.orgs.sort((a, b) => {
            const indexA = a.title
                .toLowerCase()
                .indexOf(e.target.value.toLowerCase());
            const indexB = b.title
                .toLowerCase()
                .indexOf(e.target.value.toLowerCase());
            return indexA - indexB;
        });

        setData(newData);
    };

    return (
        <div className="flex items-center w-[600px] bg-white border-1 border-gray-300 rounded-full p-1 pl-4 outline-2 outline-primary outline-offset-3 m-auto ">
            <input
                type="text"
                placeholder="Search orgnaisation..."
                className="outline-none border-0 text-xl h-full grow "
                onChange={(e) => {
                    handleChange(e);
                }}
            />
            <div className="bg-primary text-white rounded-full h-full cursor-pointer p-2">
                <IoSearch className="text-white text-2xl" />
            </div>
        </div>
    );
};

export default SearchBox;
