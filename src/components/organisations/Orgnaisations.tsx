import { dataType } from "@/types";
import OrgnisationCard from "./OrgnisationCard";
import { RiFunctionAddFill } from "react-icons/ri";
import NewOrgForm from "./NewOrgForm";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import Signature from "../shared/Signature";

const Orgnaisations = ({ data }: { data: dataType }) => {
    return (
        <div className="w-full px-[100px] py-[50px] h-fit grid grid-cols-4 gap-6">
            <Dialog>
                <DialogTrigger className="h-full">
                    <div className="bg-black/10 h-full rounded-lg flex items-center justify-center hover:outline-primary hover:outline-2 active:scale-90 transition-transform duration-300 shadow-sm select-none">
                        <RiFunctionAddFill className="text-7xl text-black/20 m-auto" />
                    </div>
                </DialogTrigger>
                <DialogContent className="w-[350px]">
                    <DialogHeader>
                        <Signature />
                    </DialogHeader>
                        <NewOrgForm />
                </DialogContent>
            </Dialog>

            {data.orgs.map((org, index) => (
                <OrgnisationCard key={index} org={org} />
            ))}
        </div>
    );
};

export default Orgnaisations;
