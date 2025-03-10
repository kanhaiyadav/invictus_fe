import { useEffect, useState } from "react";
import SearchBox from "./components/shared/SearchBox";
import Orgnaisations from "./components/organisations/Orgnaisations";
import { dataType } from "./types";
import "./App.css";

function App() {
    const [data, setData] = useState<dataType>({ orgs: [] });
    const [visibleData, setVisibleData] = useState<dataType>({ orgs: [] });

    useEffect(() => {
        const getData = async () => {
            const res = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/data`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const json = await res.json();
            console.log(json);
            setData(json);
            setVisibleData(json);
        };
        getData();
    }, []);

    return (
        <div className="h-screen w-full overflow-scroll overflow-x-hidden">
            <div className="w-full mt-8 select-none">
                <img
                    src="/icon.png"
                    alt="app logo"
                    className="m-auto h-[150px]"
                />
                <h1 className="font-iceland text-5xl m-auto font-semibold w-fit text-primary">
                    invictus
                </h1>
            </div>
            <div className="w-full bg-gray-200 py-8 sticky top-[0px]">
                <SearchBox data={data} setData={setVisibleData} />
            </div>
            <Orgnaisations data={visibleData} />
        </div>
    );
}

export default App;
