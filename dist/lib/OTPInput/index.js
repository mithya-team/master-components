import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from 'react';
import "./index.css";
const OTPInput = ({ value = '', numInputs = 4, onChange, onPaste, shouldAutoFocus = true, inputType = 'text', renderSeparator = "-", placeholder, classNames, error, helperText, title, ...inputProps }) => {
    const { container = "", input = "", separator = "" } = classNames !== null && classNames !== void 0 ? classNames : {};
    const [activeInput, setActiveInput] = useState(0);
    const inputRefs = React.useRef([]);
    const getOTPValue = () => (value ? value.toString().split('') : []);
    const isInputNum = inputType === 'number';
    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, numInputs);
    }, [numInputs]);
    useEffect(() => {
        var _a;
        if (shouldAutoFocus) {
            (_a = inputRefs.current[0]) === null || _a === void 0 ? void 0 : _a.focus();
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
    const isInputValueValid = (value) => {
        const isTypeValid = isInputNum ? !isNaN(Number(value)) : typeof value === 'string';
        return isTypeValid && value.trim().length === 1;
    };
    const handleChange = (event) => {
        const { value } = event.target;
        if (isInputValueValid(value)) {
            changeCodeAtFocus(value);
            focusInput(activeInput + 1);
        }
    };
    const handleInputChange = (event) => {
        const { nativeEvent } = event;
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
            if (nativeEvent.data === null && nativeEvent.inputType === 'deleteContentBackward') {
                event.preventDefault();
                changeCodeAtFocus('');
                focusInput(activeInput - 1);
            }
            // Clear the input if it's not valid value because firefox allows
            // pasting non-numeric characters in a number type input
            event.target.value = '';
        }
    };
    const handleFocus = (event) => (index) => {
        setActiveInput(index);
        event.target.select();
    };
    const handleBlur = () => {
        setActiveInput(activeInput - 1);
    };
    const handleKeyDown = (event) => {
        const otp = getOTPValue();
        if ([event.code, event.key].includes('Backspace')) {
            event.preventDefault();
            changeCodeAtFocus('');
            focusInput(activeInput - 1);
        }
        else if (event.code === 'Delete') {
            event.preventDefault();
            changeCodeAtFocus('');
        }
        else if (event.code === 'ArrowLeft') {
            event.preventDefault();
            focusInput(activeInput - 1);
        }
        else if (event.code === 'ArrowRight') {
            event.preventDefault();
            focusInput(activeInput + 1);
        }
        // React does not trigger onChange when the same value is entered
        // again. So we need to focus the next input manually in this case.
        else if (event.key === otp[activeInput]) {
            event.preventDefault();
            focusInput(activeInput + 1);
        }
        else if (event.code === 'Spacebar' ||
            event.code === 'Space' ||
            event.code === 'ArrowUp' ||
            event.code === 'ArrowDown') {
            event.preventDefault();
        }
    };
    const focusInput = (index) => {
        var _a, _b;
        const activeInput = Math.max(Math.min(numInputs - 1, index), 0);
        if (inputRefs.current[activeInput]) {
            (_a = inputRefs.current[activeInput]) === null || _a === void 0 ? void 0 : _a.focus();
            (_b = inputRefs.current[activeInput]) === null || _b === void 0 ? void 0 : _b.select();
            setActiveInput(activeInput);
        }
    };
    const changeCodeAtFocus = (value) => {
        const otp = getOTPValue();
        otp[activeInput] = value[0];
        handleOTPChange(otp);
    };
    const handleOTPChange = (otp) => {
        const otpValue = otp.join('');
        onChange(otpValue);
    };
    const handlePaste = (event) => {
        var _a;
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
                otp[pos] = (_a = pastedData.shift()) !== null && _a !== void 0 ? _a : '';
                nextActiveInput++;
            }
        }
        focusInput(nextActiveInput);
        handleOTPChange(otp);
    };
    return (_jsxs("div", { className: `input_root ${container}`, onPaste: onPaste, children: [!!title ? typeof (title) === "string" ? _jsx("p", { className: `title ${classNames === null || classNames === void 0 ? void 0 : classNames.title}`, children: title }) : title : null, Array.from({ length: numInputs }, (_, index) => index).map((index) => {
                var _a, _b, _c;
                return (_jsxs(React.Fragment, { children: [_jsx("input", { value: (_a = getOTPValue()[index]) !== null && _a !== void 0 ? _a : '', placeholder: (_c = (_b = getPlaceholderValue()) === null || _b === void 0 ? void 0 : _b[index]) !== null && _c !== void 0 ? _c : undefined, ref: (element) => (inputRefs.current[index] = element), onChange: handleChange, onFocus: (event) => handleFocus(event)(index), onBlur: handleBlur, onKeyDown: handleKeyDown, onPaste: handlePaste, autoComplete: 'off', className: `input-box otp_input ${input}`, type: inputType, inputMode: isInputNum ? 'numeric' : 'text', onInput: handleInputChange, ...inputProps }), index < numInputs - 1 && (typeof renderSeparator === 'function'
                            ? renderSeparator(index)
                            : _jsx("span", { className: `otp_input_separator ${separator}`, children: renderSeparator }))] }, index));
            }), !!error || !!helperText ? (_jsx("p", { className: `input__helper-text ${!!error ? classNames === null || classNames === void 0 ? void 0 : classNames.error : classNames === null || classNames === void 0 ? void 0 : classNames.helperText}`, children: error || helperText })) : null] }));
};
export { OTPInput };
