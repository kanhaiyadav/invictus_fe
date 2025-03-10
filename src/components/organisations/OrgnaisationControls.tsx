import { TbFolderDown } from "react-icons/tb";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { BsPersonAdd, BsTrash2 } from "react-icons/bs";
import NewAccountForm from "./NewAccountForm";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Signature from "../shared/Signature";
import { useContext, useState } from "react";
import GlobalContext from "@/context/GlobalContext";
import { toast } from "sonner";

const OrgnaisationControls = ({
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

    const [open, setOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const { setData } = useContext(GlobalContext);
    
    const handleDelete = async (title: string) => {
        const res = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/delete-org`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title }),
            }
        );
        const json = await res.json();
        if (res.ok) {
            setData(json.data);
            setDeleteOpen(false);
            toast.success(json.message);
        }
        else {
            toast.error(json.message);
        }
    };

    return (
        <div className="flex items-center gap-4 w-fit m-auto mt-4">
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant={"secondary"} onClick={() => setOpen(true)}>
                        <BsPersonAdd /> New Account
                    </Button>
                </DialogTrigger>
                <DialogContent className="w-[350px]">
                    <DialogHeader>
                        <Signature />
                        <VisuallyHidden>
                            <DialogTitle>Add New Account</DialogTitle>
                            <DialogDescription>
                                Fill the form below to add a new account
                            </DialogDescription>
                        </VisuallyHidden>
                    </DialogHeader>
                    <NewAccountForm org={org} closeDialog={() => setOpen(false)} />
                </DialogContent>
            </Dialog>

            <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
                <DialogTrigger asChild>
                    <Button variant={"secondary"} onClick={() => setDeleteOpen(true)}>
                        <BsTrash2 /> Delete
                    </Button>
                </DialogTrigger>
                <DialogContent className="w-[300px]">
                    <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="w-fit m-auto">
                        <Button
                            variant={"destructive"}
                            className="mr-2"
                            onClick={() => handleDelete(org.title)}
                        >
                            Delete
                        </Button>
                        <Button variant={"secondary"}>Cancel</Button>
                    </div>
                </DialogContent>
            </Dialog>

            <Button variant={"secondary"}>
                <TbFolderDown /> Add to folder
            </Button>
        </div>
    );
};

export default OrgnaisationControls;
