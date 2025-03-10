import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";
import { BsTrash2 } from "react-icons/bs";
import { Button } from "../ui/button";
import { FaRegEdit } from "react-icons/fa";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import Signature from "../shared/Signature";
import PassEditForm from "./PassEditForm";
import Password from "./Password";

const Panel = ({
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
    const [starred, setStarred] = useState(false);
    

    return (
        <div className="w-full grow px-8">
            <div className="flex gap-4">
                <img
                    src={`https://www.google.com/s2/favicons?sz=128&domain=${org.domain}`}
                    className="h-[60px] w-[60px] rounded-lg"
                    alt="organisation logo"
                />
                <div className="grow">
                    <h1 className="text-2xl font-semibold text-gray-600">
                        {org.title}
                    </h1>
                    <a
                        href={org.domain}
                        className="text-gray-500 hover:text-primary hover:underline underline-offset-2 cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {org.domain}
                    </a>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <button
                            className="hover:bg-accent text-xl rounded-lg p-2"
                            onClick={() => setStarred(!starred)}
                        >
                            {starred ? <GoStarFill /> : <FiStar />}
                        </button>
                    </div>
                </div>
            </div>
            <hr className="w-full border-[1px] border-gray-200 my-[25px]" />
            <div>
                {
                    <Accordion type="multiple">
                        {org.accounts.map((account, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>
                                    <div className="flex justify-between items-center">
                                        <h1 className="text-lg font-semibold text-gray-600">
                                            {account.email}
                                        </h1>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-4">
                                            <Dialog>
                                                <DialogTrigger>
                                                    <Button
                                                        variant={"secondary"}
                                                        className="text-gray-500"
                                                    >
                                                        <FaRegEdit />
                                                        <span>Edit</span>
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="w-[350px]">
                                                    <DialogHeader>
                                                        <Signature />
                                                    </DialogHeader>
                                                    <PassEditForm />
                                                </DialogContent>
                                            </Dialog>
                                            <Dialog>
                                                <DialogTrigger>
                                                    <Button
                                                        variant={"secondary"}
                                                        className="text-gray-500 hover:text-white hover:bg-red-400"
                                                    >
                                                        <BsTrash2 />
                                                        <span>Delete</span>
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="w-[300px]">
                                                    <DialogHeader>
                                                        <DialogTitle>
                                                            Are you absolutely
                                                            sure?
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            This action cannot
                                                            be undone. This will
                                                            permanently delete
                                                            your account.
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <div className="w-fit m-auto">
                                                        <Button
                                                            variant={
                                                                "destructive"
                                                            }
                                                            className="mr-2"
                                                        >
                                                            Delete
                                                        </Button>
                                                        <Button
                                                            variant={
                                                                "secondary"
                                                            }
                                                        >
                                                            Cancel
                                                        </Button>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                        <Password account={account} />
                                        {account.description && (
                                            <div className="px-1">
                                                <div className="flex justify-between items-center w-full">
                                                    <h1 className="text-sm font-semibold">
                                                        Note
                                                    </h1>
                                                    <p className="text-gray-500 ml-auto">
                                                        {account.createdAt}
                                                    </p>
                                                </div>
                                                <p className="text-gray-500">
                                                    {account.description}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                }
            </div>
        </div>
    );
};

export default Panel;
