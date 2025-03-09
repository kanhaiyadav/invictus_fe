import { Input } from "../ui/input";
import { Button } from "../ui/button";

const PassEditForm = () => {
    return (
        <form className="flex gap-2">
            <Input
                placeholder="New Password"
                type="password"
                required
            />
            <Button type="submit">submit</Button>
        </form>
    );
};

export default PassEditForm;
