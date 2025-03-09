import { motion } from "framer-motion";

function getPasswordStrengthPercentage(password: string): number {
    let strength = 0;
    const totalCriteria = 6;

    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;

    return Math.round((strength / totalCriteria) * 100);
}

export default function PasswordStrengthMeter({ password }: { password: string }) {
    const strength = getPasswordStrengthPercentage(password);

    // Determine color based on strength
    const strengthColor =
        strength > 80
            ? "bg-green-500"
            : strength > 50
            ? "bg-yellow-500"
            : "bg-red-500";

    return (
        <div className="w-full max-w-md px-1">
            <div className="w-full h-2 bg-gray-200 rounded mt-2 relative overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${strength}%`, transition: { duration: 0.5, type:'tween' } }}
                    className={`h-full ${strengthColor} transition-all duration-300 rounded`}
                ></motion.div>
            </div>

            <p className="text-sm mt-1 text-gray-600">Strength: {strength}%</p>
        </div>
    );
}
