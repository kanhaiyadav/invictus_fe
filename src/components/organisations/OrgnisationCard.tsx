// import { dataType } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Panel from "./Panel";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsPersonAdd } from "react-icons/bs";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import Signature from "../shared/Signature";
import NewAccountForm from "./NewAccountForm";


const OrgnisationCard = ({
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
    const [showPanel, setShowPanel] = useState(false);

    const sidebarVariants = {
        hidden: { x: "100%", opacity: 1 },
        visible: {
            x: "0%",
            opacity: 1,
            transition: { type: "tween", duration: 0.2 },
        },
        exit: {
            x: "100%",
            opacity: 1,
            transition: { type: "tween", duration: 0.2 },
        },
    };

    return (
        <>
            <div
                className="flex flex-col items-center w-full h-fit bg-white shadow-sm rounded-lg p-4 cursor-default hover:outline-2 hover:outline-primary hover:shadow-lg active:scale-95 transition-transform duration-300 select-none"
                onClick={() => setShowPanel(!showPanel)}
            >
                <img
                    src={`https://www.google.com/s2/favicons?sz=256&domain=${org.domain}`}
                    className="h-[80px] w-[80px] rounded-lg"
                    alt=""
                />
                <h1 className="text-2xl font-semibold text-gray-600 mt-2">
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
            {showPanel && (
                <div
                    className="bg-black/20 w-screen h-screen fixed top-0 left-0 z-1"
                    onClick={() => setShowPanel(false)}
                />
            )}

            <AnimatePresence>
                {showPanel && (
                    <motion.div
                        variants={sidebarVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed top-0 right-0 w-[500px] h-screen ml-auto bg-white shadow-2xl z-2 flex flex-col"
                    >
                        <div className="w-full p-4">
                            <div
                                className="ml-auto w-fit flex gap-2 items-center hover:bg-gray-100 py-2 px-4 cursor-default rounded-full"
                                onClick={() => setShowPanel(false)}
                            >
                                <span>Close</span>
                                <MdOutlineKeyboardArrowRight className="text-xl text-black" />
                            </div>
                        </div>
                        <Panel org={org} />
                        <Dialog>
                            <DialogTrigger>
                                <div className="p-3 rounded-full bg-primary text-white absolute bottom-4 left-4 cursor-pointer hover:bg-primary-dark transition-all duration-300 shadow-lg">
                                    <BsPersonAdd className="text-3xl m-auto" />
                                </div>
                            </DialogTrigger>
                            <DialogContent className="w-[350px]">
                                <DialogHeader>
                                    <Signature />
                                </DialogHeader>
                                <NewAccountForm />
                            </DialogContent>
                        </Dialog>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default OrgnisationCard;
