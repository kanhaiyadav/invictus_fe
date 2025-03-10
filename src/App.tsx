import { useState, useContext, useEffect } from "react";
import SearchBox from "./components/shared/SearchBox";
import Orgnaisations from "./components/organisations/Orgnaisations";
import { dataType } from "./types";
import GlobalContext from "./context/GlobalContext";
import "./App.css";
import { Toaster } from "sonner";
import Options from "./components/Options";
import PasswordGenerator from "./components/PasswordGenerator";

function App() {
    const { data } = useContext(GlobalContext);

    // const [data, setData] = useState<dataType>({ orgs: [] });
    const [visibleData, setVisibleData] = useState<dataType>({ orgs: [] });

    useEffect(() => {
        setVisibleData(data);
    }, [data]);

    return (
        <>
            <div className="flex items-center justify-between px-[100px]">
                <div className="flex items-center gap-4 w-fit select-none">
                    <img
                        src="/icon.png"
                        alt="app logo"
                        className="m-auto h-[50px]"
                    />
                    <h1 className="font-iceland text-5xl m-auto font-semibold w-fit text-primary">
                        invictus
                    </h1>
                </div>
                <div className="grow bg-gray-200 py-8 sticky top-[0px]">
                    <SearchBox data={data} setData={setVisibleData} />
                </div>
                <PasswordGenerator />
            </div>
            <div className="h-screen w-full">
                <Options setVisibleData={setVisibleData} />
                <Orgnaisations data={visibleData} />
            </div>
            <Toaster position="bottom-left" />
        </>
    );
}

export default App;
