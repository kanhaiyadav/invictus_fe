export type dataType = {
    orgs: Array<{
        title: string;
        domain: string;
        favourite: boolean;
        archived: boolean;
        accounts: Array<{
            email: string;
            password: string;
            description?: string;
            createdAt: string;
        }>;
    }>;
};
