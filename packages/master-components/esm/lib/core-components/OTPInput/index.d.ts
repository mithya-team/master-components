import React, { type ReactNode, type FC } from 'react';
import "./index.css";
type AllowedInputTypes = 'password' | 'text' | 'number';
interface OTPInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onFocus' | 'onBlur' | 'onKeyDown' | 'onPaste' | 'autoComplete' | 'inputMode' | 'onInput' | 'title'> {
    value?: string;
    numInputs?: number;
    onChange: (otp: string) => void;
    onPaste?: (event: React.ClipboardEvent<HTMLDivElement>) => void;
    shouldAutoFocus?: boolean;
    placeholder?: string;
    renderSeparator?: ((index: number) => React.ReactNode) | React.ReactNode;
    classNames?: {
        container?: string;
        input?: string;
        separator?: string;
        error?: string;
        helperText?: string;
        title?: string;
    };
    title?: ReactNode;
    error?: string;
    helperText?: string;
    inputType?: AllowedInputTypes;
}
declare const OTPInput: FC<OTPInputProps>;
export type { OTPInputProps, AllowedInputTypes };
export { OTPInput };
//# sourceMappingURL=index.d.ts.map