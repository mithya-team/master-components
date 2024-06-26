import React, { type ReactNode, useEffect, useState, type FC } from 'react';
import "./index.css";

type AllowedInputTypes = 'password' | 'text' | 'number';

interface OTPInputProps extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    | 'value'
    | 'onChange'
    | 'onFocus'
    | 'onBlur'
    | 'onKeyDown'
    | 'onPaste'
    | 'autoComplete'
    | 'inputMode'
    | 'onInput'
    | 'title'
> {
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

const OTPInput: FC<OTPInputProps> = ({
    value = '',
    numInputs = 4,
    onChange,
    onPaste,
    shouldAutoFocus = true,
    inputType = 'text',
    renderSeparator = "-",
    placeholder,
    classNames,
    error,
    helperText,
    title,
    ...inputProps
}) => {
    const { container = "", input = "", separator = "" } = classNames ?? {};
    const [activeInput, setActiveInput] = useState(0);
    const inputRefs = React.useRef<Array<HTMLInputElement | null>>([]);

    const getOTPValue = () => (value ? value.toString().split('') : []);

    const isInputNum = inputType === 'number';

    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, numInputs);
    }, [numInputs]);

    useEffect(() => {
        if (shouldAutoFocus) {
            inputRefs.current[0]?.focus();
        }
    }, [shouldAutoFocus]);

    const getPlaceholderValue = () => {
        if (typeof placeholder === 'string') {
            if (placeholder.length === numInputs) {
                return placeholder;
            }

            if (placeholder.length > 0) {
                console.error('Length of the placeholder should be equal to the number of inputs.');
            }
        }
        return undefined;
    };

    const isInputValueValid = (value: string) => {
        const isTypeValid = isInputNum ? !isNaN(Number(value)) : typeof value === 'string';
        return isTypeValid && value.trim().length === 1;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        if (isInputValueValid(value)) {
            changeCodeAtFocus(value);
            focusInput(activeInput + 1);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const nativeEvent = event.nativeEvent as InputEvent
        const value = event.target.value;

        if (!isInputValueValid(value)) {
            // Pasting from the native autofill suggestion on a mobile device can pass
            // the pasted string as one long input to one of the cells. This ensures
            // that we handle the full input and not just the first character.
            if (value.length === numInputs) {
                const hasInvalidInput = value.split('').some((cellInput) => !isInputValueValid(cellInput));
                if (!hasInvalidInput) {
                    handleOTPChange(value.split(''));
                    focusInput(numInputs - 1);
                }
            }

            if (nativeEvent?.data === null && nativeEvent?.inputType === 'deleteContentBackward') {
                event.preventDefault();
                changeCodeAtFocus('');
                focusInput(activeInput - 1);
            }

            // Clear the input if it's not valid value because firefox allows
            // pasting non-numeric characters in a number type input
            event.target.value = '';
        }
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => (index: number) => {
        setActiveInput(index);
        event.target.select();
    };

    const handleBlur = () => {
        setActiveInput(activeInput - 1);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const otp = getOTPValue();
        if ([event.code, event.key].includes('Backspace')) {
            event.preventDefault();
            changeCodeAtFocus('');
            focusInput(activeInput - 1);
        } else if (event.code === 'Delete') {
            event.preventDefault();
            changeCodeAtFocus('');
        } else if (event.code === 'ArrowLeft') {
            event.preventDefault();
            focusInput(activeInput - 1);
        } else if (event.code === 'ArrowRight') {
            event.preventDefault();
            focusInput(activeInput + 1);
        }
        // React does not trigger onChange when the same value is entered
        // again. So we need to focus the next input manually in this case.
        else if (event.key === otp[activeInput]) {
            event.preventDefault();
            focusInput(activeInput + 1);
        } else if (
            event.code === 'Spacebar' ||
            event.code === 'Space' ||
            event.code === 'ArrowUp' ||
            event.code === 'ArrowDown'
        ) {
            event.preventDefault();
        }
    };

    const focusInput = (index: number) => {
        const activeInput = Math.max(Math.min(numInputs - 1, index), 0);

        if (inputRefs.current[activeInput]) {
            inputRefs.current[activeInput]?.focus();
            inputRefs.current[activeInput]?.select();
            setActiveInput(activeInput);
        }
    };

    const changeCodeAtFocus = (value: string) => {
        const otp = getOTPValue();
        otp[activeInput] = value[0];
        handleOTPChange(otp);
    };

    const handleOTPChange = (otp: Array<string>) => {
        const otpValue = otp.join('');
        onChange(otpValue);
    };

    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        event.preventDefault();

        const otp = getOTPValue();
        let nextActiveInput = activeInput;

        // Get pastedData in an array of max size (num of inputs - current position)
        const pastedData = event.clipboardData
            .getData('text/plain')
            .slice(0, numInputs - activeInput)
            .split('');

        // Prevent pasting if the clipboard data contains non-numeric values for number inputs
        if (isInputNum && pastedData.some((value) => isNaN(Number(value)))) {
            return;
        }

        // Paste data from focused input onwards
        for (let pos = 0; pos < numInputs; ++pos) {
            if (pos >= activeInput && pastedData.length > 0) {
                otp[pos] = pastedData.shift() ?? '';
                nextActiveInput++;
            }
        }

        focusInput(nextActiveInput);
        handleOTPChange(otp);
    };

    return (
        <div
            className={`input_root ${container}`}
            onPaste={onPaste}
        >
            {!!title ? typeof (title) === "string" ? <p className={`title ${classNames?.title}`}>{title}</p> : title : null}
            {Array.from({ length: numInputs }, (_, index) => index).map((index) => (
                <React.Fragment key={index}>
                    <input
                        value={getOTPValue()[index] ?? ''}
                        placeholder={getPlaceholderValue()?.[index] ?? undefined}
                        ref={(element) => (inputRefs.current[index] = element)}
                        onChange={handleChange}
                        onFocus={(event) => handleFocus(event)(index)}
                        onBlur={handleBlur}
                        onKeyDown={handleKeyDown}
                        onPaste={handlePaste}
                        autoComplete='off'
                        className={`input-box otp_input ${input}`}
                        type={inputType}
                        inputMode={isInputNum ? 'numeric' : 'text'}
                        onInput={handleInputChange}
                        {...inputProps}
                    />
                    {index < numInputs - 1 && (
                        typeof renderSeparator === 'function'
                            ? (renderSeparator as Function)(index)
                            : <span className={`otp_input_separator ${separator}`}>{renderSeparator}</span>
                    )}
                </React.Fragment>
            ))}
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

export type { OTPInputProps, AllowedInputTypes };
export { OTPInput };