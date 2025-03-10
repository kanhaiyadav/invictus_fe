import { IoMdEye } from "react-icons/io";
import { decrypt } from "@/lib/utils";
import { IoMdEyeOff } from "react-icons/io";
import { IoCopy } from "react-icons/io5";
import { toast } from "sonner";
import PasswordStrengthMeter from "../shared/PassStrengthMeter";
import { useState } from "react";
import { copyToClipboard } from "@/lib/utils";

const Password = ({
    account,
}: {
    account: {
        password: string;
    };
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const password = decrypt(account.password, import.meta.env.VITE_SECRET_KEY);

    return (
        <>
            <div className="bg-accent p-2 px-4 rounded-lg flex items-center gap-4 shadow-sm">
                <div className="flex-grow">
                    <h1 className="text-sm">Password</h1>
                    <p className="mt-2 text-lg">
                        {showPassword ? password : "*".repeat(password.length)}
                    </p>
                </div>
                <div onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                        <IoMdEyeOff className="text-xl text-gray-400 cursor-pointer" />
                    ) : (
                        <IoMdEye className="text-xl text-gray-400 cursor-pointer" />
                    )}
                </div>
                <IoCopy
                    className="text-lg text-gray-400 cursor-pointer"
                    onClick={() => {
                        copyToClipboard(password);
                        toast.success("Password copied to clipboard");
                    }}
                />
            </div>
            <PasswordStrengthMeter password={password} />
        </>
    );
};

export default Password;
