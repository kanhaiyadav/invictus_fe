import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useContext } from "react";
import GlobalContext from "@/context/GlobalContext";

const NewAccountForm = ({
    org,
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
}) => {
    const { setData } = useContext(GlobalContext);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = (
            document.getElementById("username") as HTMLInputElement
        ).value;
        const password = (
            document.getElementById("password") as HTMLInputElement
        ).value;
        const description = (
            document.getElementById("description") as HTMLInputElement
        ).value;
        const res = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/new-password`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    org: org.title,
                    email: username,
                    password,
                    description,
                }),
            }
        );
        const json = await res.json();
        setData(json);
    };

    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
                id="username"
                placeholder="username/email"
                type="text"
                required
            />
            <Input
                id="password"
                placeholder="password"
                type="password"
                required
            />
            <Textarea id="description" placeholder="description" />
            <Button type="submit">Create Account</Button>
        </form>
    );
};

export default NewAccountForm;
