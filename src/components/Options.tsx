import { useState } from "react";
import { useContext } from "react";
import GlobalContext from "@/context/GlobalContext";
import { dataType } from "@/types";

const tabs = ["All", "Favourite", "Archived"];

const Options = ({ setVisibleData }: {
    setVisibleData: (data: dataType) => void;
}) => {
    const { data } = useContext(GlobalContext);
    const [active, setActive] = useState("All");

    return (
        <div className="w-full h-[50px] px-[100px]">
            <div className="w-fit flex items-center gap-2">
                {tabs.map((tab, index) => (
                    <span
                        className={`px-4 py-1 rounded-full cursor-default hover:bg-primary/10 ${
                            active === tab
                                ? "bg-primary/10 border-1 border-primary"
                                : ""
                        }`}
                        key={index}
                        onClick={() => {
                            setActive(tab);
                            if (tab === "All") {
                                setVisibleData(data);
                            } else {
                                const filteredData = data.orgs.filter(
                                    (org) =>
                                        tab === "Favourite"
                                            ? org.favourite
                                            : org.archived
                                );
                                setVisibleData({ orgs: filteredData });
                            }
                        }}
                    >
                        {tab}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Options;
