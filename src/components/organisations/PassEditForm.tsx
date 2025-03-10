import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useContext } from "react";
import GlobalContext from "@/context/GlobalContext";

const PassEditForm = ({
    org, account
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
        setData(json);
    };

    return (
        <form className="flex gap-2" onSubmit={handleSubmit}>
            <Input id="password" placeholder="New Password" type="password" required />
            <Button type="submit">submit</Button>
        </form>
    );
};

export default PassEditForm;
