import { FiStar } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";
import { useContext, useState } from "react";
import GlobalContext from "@/context/GlobalContext";
import { toast } from "sonner";

const Favourite = ({ org, size }: {
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
    const [favLoading, setFavLoading] = useState(false);

    const handleFavourite = async (title: string) => {
        setFavLoading(true);
        const res = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/favourite`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title }),
            }
        );
        const json = await res.json();
        if (res.ok) {
            setData(json.data);
            toast.success(json.message);
        } else {
            toast.error(json.message);
        }
        setFavLoading(false);
    };

    return (
        <div
            className="p-2 rounded-sm hover:bg-gray-200 h-fit"
            onClick={(e) => {
                e.stopPropagation();
                if (favLoading) return;
                handleFavourite(org.title);
            }}
        >
            {org.favourite ? (
                <GoStarFill className={`text-yellow-400 ${size === 'lg' ? 'text-xl': ''}`} />
            ) : (
                    <FiStar className={`text-gray-600 ${size === 'lg' ? 'text-xl': ''}`} />
            )}
        </div>
    );
};

export default Favourite;
