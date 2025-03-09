import { dataType } from "@/types";

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
    return (
        <div className="flex flex-col items-center w-full h-fit bg-white shadow-sm rounded-lg p-4 cursor-default hover:outline-2 hover:outline-primary hover:shadow-lg">
            <img
                src={`https://www.google.com/s2/favicons?sz=256&domain=${org.domain}`}
                className="h-[80px] w-[80px] rounded-lg"
                alt=""
            />
            <h1 className="text-2xl font-semibold text-gray-600">{org.title}</h1>
            <h3 className="text-gray-500 hover:text-primary hover:underline underline-offset-2 cursor-pointer">{org.domain}</h3>
        </div>
    );
};

export default OrgnisationCard;
