import GlobalContext from "@/context/GlobalContext";
import { useContext, useState } from "react";
import { MdOutlineArchive } from "react-icons/md";
import { MdOutlineUnarchive } from "react-icons/md";
import { toast } from "sonner";

const Archive = ({ org, size }: {
    org: {
        title: string;
        domain: string;
        favourite: boolean;
        archived: boolean;
        accounts: Array<{
            email: string;
            createdAt: string;
            description?: string;
            password: string;
        }>;
    }
    size?: 'sm' | 'lg';
}) => {

    const { setData } = useContext(GlobalContext);
    const [arcLoading, setArcLoading] = useState(false);

    const handleArchive = async (title: string) => {
        setArcLoading(true);
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/archive`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title }),
        });
        const json = await res.json();
        if (res.ok) {
            setData(json.data);
            toast.success(json.message);
        } else {
            toast.error(json.message);
        }
        setArcLoading(false);
    };
    
    return (
        <div
            className="p-2 rounded-sm hover:bg-gray-200 h-fit"
            onClick={(e) => {
                e.stopPropagation();
                if (arcLoading) return;
                handleArchive(org.title);
            }}
        >
            {org.archived ? (
                <MdOutlineUnarchive
                    className={`text-gray-600 ${
                        size === "lg" ? "text-xl" : ""
                    }`}
                />
            ) : (
                <MdOutlineArchive
                    className={`text-gray-600 ${
                        size === "lg" ? "text-xl" : ""
                    }`}
                />
            )}
        </div>
    );
};

export default Archive;
