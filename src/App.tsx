import { useEffect, useState } from "react";
import SearchBox from "./components/shared/SearchBox";
import Orgnaisations from "./components/organisations/Orgnaisations";
import { dataType } from "./types";
import "./App.css";

function App() {
    const [data, setData] = useState<dataType>({ orgs: [] });

    useEffect(() => {
        const getData = async () => {
            let res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/data`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            res = await res.json();
            console.log(res);
            setData(res);
        };
        getData();
    }, []);

    return (
        <>
            <div className="w-full mt-8">
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
                <SearchBox data={data} />
            </div>
            <Orgnaisations data={data} />
        </>
    );
}

export default App;
