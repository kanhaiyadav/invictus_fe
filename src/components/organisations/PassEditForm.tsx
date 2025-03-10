import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useContext } from "react";
import GlobalContext from "@/context/GlobalContext";
import { toast } from "sonner";

const PassEditForm = ({
    org, account, closeDialog
}: {
    org: {
        title: string;
        domain: string;
        accounts: Array<{
            email: string;
            createdAt: string;
            description?: string;
            password: string;
        }>;
        };
    account: {
        email: string;
        password: string;
        description?: string;
        createdAt: string;
        };
    closeDialog: () => void;
}) => {
    const { setData } = useContext(GlobalContext);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const password = (
            document.getElementById("password") as HTMLInputElement
        ).value;
        const res = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/update-password`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ org: org.title, email: account.email, password }),
            }
        );
        const json = await res.json();
        if (res.ok) {
            setData(json.data);
            toast.success(json.message);
            closeDialog();
        }
        else {
            toast.error(json.message);
        }
    };

    return (
        <form className="flex gap-2" onSubmit={handleSubmit}>
            <Input id="password" placeholder="New Password" type="password" required />
            <Button type="submit">submit</Button>
        </form>
    );
};

export default PassEditForm;
