export type dataType = {
    orgs: Array<{
        title: string;
        domain: string;
        accounts: Array<{
            email: string;
            createdAt: string;
        }>;
    }>;
};
