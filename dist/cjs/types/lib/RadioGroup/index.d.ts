import React, { FC } from 'react';
import "./index.css";
interface RadioOption {
    value: string;
    label: React.ReactNode;
    className?: string;
    disabled?: boolean;
}
interface RadioGroupProps {
    name?: string;
    required?: boolean;
    disabled?: boolean;
    defaultValue?: string;
    value?: string;
    onChange?: (option: RadioOption) => void;
    options: RadioOption[];
    className?: string;
}
declare const RadioGroup: FC<RadioGroupProps>;
export type { RadioOption, RadioGroupProps };
export { RadioGroup };
