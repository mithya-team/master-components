import React, { type FC } from "react";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
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

const Input: FC<InputProps> = (props) => {
    const {
        className,
        startIcon,
        endIcon,
        label,
        disabled,
        error,
        helperText,
        classNames,
        type = "text",
        ...inputProps
    } = props;

    return (
        <div className={`${className} input_root`}>
            {!!label ? typeof (label) === "string" ? <label className={`input__label ${classNames?.label}`}>{label}</label> : label : null}
            <div
                className={`input_container ${classNames?.inputRoot}`}
            >
                {!!startIcon ? (
                    <div
                        className={`input__start-icon ${classNames?.startIcon}`}
                    >
                        {startIcon}
                    </div>
                ) : null}
                <input
                    disabled={disabled}
                    autoComplete="false"
                    type={type}
                    className={`input ${classNames?.input}`}
                    {...inputProps}
                />
                {!!endIcon ? (
                    <div
                        className={`input__end-icon ${classNames?.endIcon}`}
                    >
                        {endIcon}
                    </div>
                ) : null}
            </div>
            {!!error || !!helperText ? (
                <p
                    className={`input__helper-text ${!!error ? classNames?.error : classNames?.helperText}`}
                >
                    {error || helperText}
                </p>
            ) : null}
        </div>
    );
};

export default Input;
