import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useContext } from "react";
import GlobalContext from "@/context/GlobalContext";
import { toast } from "sonner";

const NewOrgForm = ({ closeDialog }: {
    closeDialog: () => void;
}) => {

    const { setData } = useContext(GlobalContext);
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const orgName = (document.getElementById("orgName") as HTMLInputElement).value;
        const orgDomain = (document.getElementById("orgDomain") as HTMLInputElement).value;
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/new-org`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: orgName, domain: orgDomain }),
        })
        const json = await res.json();
        if (res.ok) {
            closeDialog();
            setData(json.data);
            toast.success(json.message);
        }
        else {
            toast.error(json.message);
        }
    };
    
    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <Input
                    id="orgName"
                    placeholder="Organisation Name"
                    type="text"
                    required
                />
                <Input
                    id="orgDomain"
                    placeholder="Organisation Domain"
                    type="text"
                    required
                />
            <Button type="submit">Create Organisation</Button>
        </form>
    );
};

export default NewOrgForm;
