import { createContext, Dispatch, SetStateAction } from "react";
import { dataType } from "@/types";

const GlobalContext = createContext<{
    data: dataType;
    setData: Dispatch<SetStateAction<{ orgs: [] }>>;
}>({
    data: {
        orgs: [
            {
                title: "",
                domain: "",
                accounts: [{ email: "", password: "", createdAt: "" }],
            },
        ],
    },
    setData: () => {},
});

export default GlobalContext;
