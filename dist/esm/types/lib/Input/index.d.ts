import React, { type FC } from "react";
import "./index.css";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    label?: React.ReactNode;
    error?: string | boolean;
    helperText?: string;
    classNames?: {
        inputRoot?: string;
        label?: string;
        input?: string;
        startIcon?: string;
        endIcon?: string;
        helperText?: string;
        error?: string;
    };
}
declare const Input: FC<InputProps>;
export type { InputProps };
export { Input };
