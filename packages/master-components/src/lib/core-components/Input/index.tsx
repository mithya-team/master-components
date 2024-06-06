import React, { FC } from "react";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    label?: string;
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
        <div className={`${className} cmp-Input_root`}>
            {label ? (
                <label
                    className={`cmp-Input__label ${classNames?.label}`
                    }
                >
                    {label}
                </label>
            ) : null}
            <div
                className={`cmp-Input_container ${classNames?.inputRoot}`}
            >
                {!!startIcon ? (
                    <div
                        className={`cmp-Input__start-icon ${classNames?.startIcon}`}
                    >
                        {startIcon}
                    </div>
                ) : null}
                <input
                    disabled={disabled}
                    autoComplete="false"
                    type={type}
                    className={`cmp-Input ${classNames?.input}`}
                    {...inputProps}
                />
                {!!endIcon ? (
                    <div
                        className={`cmp-Input__end-icon ${classNames?.endIcon}`}
                    >
                        {endIcon}
                    </div>
                ) : null}
            </div>
            {!!error || !!helperText ? (
                <p
                    className={`cmp-Input__helper-text ${!!error ? classNames?.error : classNames?.helperText}`}
                >
                    {error || helperText}
                </p>
            ) : null}
        </div>
    );
};

export default Input;
