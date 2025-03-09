import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";
// import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { IoCopy } from "react-icons/io5";
import { BsTrash2 } from "react-icons/bs";
import { Button } from "../ui/button";
import { FaRegEdit } from "react-icons/fa";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import PasswordStrengthMeter from "../shared/PassStrengthMeter";


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
                                            <Button
                                                variant={"secondary"}
                                                className="text-gray-500"
                                            >
                                                <FaRegEdit />
                                                <span>Edit</span>
                                            </Button>
                                            <Button
                                                variant={"secondary"}
                                                className="text-gray-500 hover:text-white hover:bg-red-400"
                                            >
                                                <BsTrash2 />
                                                <span>Delete</span>
                                            </Button>
                                        </div>

                                        <div className="bg-accent p-2 px-4 rounded-lg flex items-center gap-4 shadow-sm">
                                            <div className="flex-grow">
                                                <h1 className="text-sm">
                                                    Password
                                                </h1>
                                                <p className="mt-2 text-lg">
                                                    **********
                                                </p>
                                            </div>
                                            <IoMdEyeOff className="text-xl text-gray-400 cursor-pointer" />
                                            <IoCopy className="text-lg text-gray-400 cursor-pointer" />
                                        </div>
                                        <PasswordStrengthMeter password="hello@12" />
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
