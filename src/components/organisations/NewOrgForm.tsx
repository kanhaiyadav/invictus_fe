import { Input } from "../ui/input";
import { Button } from "../ui/button";

const NewOrgForm = () => {
    return (
        <form className="flex flex-col gap-4">
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
