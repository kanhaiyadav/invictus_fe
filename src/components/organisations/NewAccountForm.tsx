import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const NewAccountForm = () => {
    return (
        <form className="flex flex-col gap-4">
            <Input
                placeholder="username/email"
                type="text"
                required
            />
            <Input
                placeholder="password"
                type="password"
                required
            />
            <Textarea
                placeholder="description"
            />
            <Button type="submit">Create Account</Button>
        </form>
    );
};

export default NewAccountForm;
