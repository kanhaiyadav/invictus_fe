import { ImSpinner9 } from "react-icons/im";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Signature from "./shared/Signature";
import { useState } from "react";
import { Label } from "./ui/label";
import { copyToClipboard } from "@/lib/utils";
import { toast } from "sonner";

const PasswordGenerator = () => {
    const [length, setLength] = useState<number>(16);
    const [password, setPassword] = useState<string>(generatePassword(length));

    function generatePassword(length: number) {
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const specialChars = "!@#$%^&*()_+[]{}|;:<>?";

        const allChars = upperCase + lowerCase + numbers + specialChars;
        let password = "";

        // Ensure the password has at least one character from each category
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        password += numbers[Math.floor(Math.random() * numbers.length)];
        password +=
            specialChars[Math.floor(Math.random() * specialChars.length)];

        // Fill the remaining length with random characters
        for (let i = 4; i < length; i++) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }

        // Shuffle the password to remove predictable patterns
        password = password
            .split("")
            .sort(() => 0.5 - Math.random())
            .join("");

        return password;
    }

    const handleClick = () => {
        setPassword(generatePassword(length));
        copyToClipboard(password);
        toast("Password copied to clipboard");
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div
                    className="flex items-center gap-3 w-fit select-none text-white bg-primary px-4 py-3 rounded-full hover:bg-primary/85 active:scale-95 transition-transform duration-200 cursor-pointer"
                    onClick={() => {
                        const spinIcon = document.getElementById("spinner-icon");
                        if (spinIcon) {
                            const currentRotation =
                                parseInt(spinIcon.style.rotate || "0") || 0;
                            const nextRotation = currentRotation + 360;
                            spinIcon.style.rotate = currentRotation + "deg";
                            void spinIcon.offsetWidth;
                            spinIcon.style.transition = "all 0.3s";
                            spinIcon.style.rotate = nextRotation + "deg";
                        }
                        copyToClipboard(password);
                        toast("Password copied to clipboard");
                    }}
                >
                    <ImSpinner9 id="spinner-icon" className="text-2xl" />
                    Generate Password
                </div>
            </DialogTrigger>
            <DialogContent className="w-[320px]">
                <DialogHeader>
                    <Signature />
                    <VisuallyHidden>
                        <DialogTitle>Generated password</DialogTitle>
                        <DialogDescription>
                            this is the password generated randomly. Click the
                            spin icon to generate another one
                        </DialogDescription>
                    </VisuallyHidden>
                </DialogHeader>
                <div className="flex gap-2">
                    <div className="flex flex-col gap-2">
                        <Label>Password</Label>
                        <Input readOnly value={password} />
                    </div>
                    <div className="flex flex-col gap-2 max-w-[80px]">
                        <Label className="whitespace-nowrap">Length</Label>
                        <Input
                            type="number"
                            value={length}
                            onChange={(e) =>
                                setLength(parseInt(e.target.value))
                            }
                            className="grow"
                        />
                    </div>
                </div>
                <Button
                    className="w-full"
                    onClick={() => {
                        const spinIcon = document.getElementById("spin-icon");
                        if (spinIcon) {
                            const currentRotation = parseInt(spinIcon.style.rotate || "0") || 0;
                            const nextRotation = currentRotation + 360;
                            spinIcon.style.rotate = currentRotation + "deg";
                            void spinIcon.offsetWidth;
                            spinIcon.style.transition = "all 0.3s";
                            spinIcon.style.rotate = nextRotation + "deg";
                        }
                        handleClick();
                    }}
                    variant="default"
                >
                    <ImSpinner9 id="spin-icon" className="transition-all duration-300"/>
                    Generate Another
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default PasswordGenerator;
