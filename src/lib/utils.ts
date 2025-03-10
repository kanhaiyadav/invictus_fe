import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import CryptoJs from "crypto-js"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateStrongPassword = (length = 12) => {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    const allChars = upperCase + lowerCase + numbers + specialChars;
    let password = "";

    // Ensure the password has at least one character from each category
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

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

export const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
}

export const decrypt = (cipherText: string, key: string) => {
    return CryptoJs.AES.decrypt(cipherText, key).toString(CryptoJs.enc.Utf8);
}