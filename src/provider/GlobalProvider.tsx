import React, { useState, useEffect } from "react";
import GlobalContext from "@/context/GlobalContext";
import { dataType } from "@/types";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<dataType>({ orgs: [] });

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
            setData(json);
        };
        getData();
    }, []);

    return (
        //@ts-expect-error - GlobalContext.Provider value type mismatch
        <GlobalContext.Provider value={{ data, setData }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
