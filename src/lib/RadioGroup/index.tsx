import React, { FC, useEffect, useState } from 'react';
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

const RadioGroup: FC<RadioGroupProps> = ({
    name,
    required = false,
    disabled = false,
    defaultValue,
    value: valueProp,
    onChange,
    options,
    className = "",
}) => {
    const [value, setValue] = useState<string | undefined>(defaultValue);

    useEffect(() => {
        if (valueProp !== undefined) {
            setValue(valueProp);
        }
    }, [valueProp]);

    const handleChange = (option: RadioOption) => {
        setValue(option?.value);
        onChange?.(option);
    };

    return (
        <div role="radiogroup" aria-required={required} data-disabled={disabled ? '' : undefined} className={`radio-group ${className}`}>
            {options.map((option) => (
                <label key={option.value} className={`radio-group-item ${option?.className ?? ""}`}>
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={value === option.value}
                        required={required}
                        disabled={disabled || option.disabled}
                        onChange={() => handleChange(option)}
                        className="radio-input"
                    />
                    <span className="radio-custom"></span> {/* Custom span for design */}
                    {option.label}
                </label>
            ))}
        </div>
    );
};

export type { RadioOption, RadioGroupProps };
export { RadioGroup };
