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
                favourite: false,
                archived: false,
                accounts: [{ email: "", password: "", createdAt: "" }],
            },
        ],
    },
    setData: () => {},
});

export default GlobalContext;
