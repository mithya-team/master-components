import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import "./index.css";
const Input = (props) => {
    const { className, startIcon, endIcon, label, disabled, error, helperText, classNames, type = "text", ...inputProps } = props;
    return (_jsxs("div", { className: `${className} input_root`, children: [!!label ? typeof (label) === "string" ? _jsx("label", { className: `input__label ${classNames === null || classNames === void 0 ? void 0 : classNames.label}`, children: label }) : label : null, _jsxs("div", { className: `input_container ${classNames === null || classNames === void 0 ? void 0 : classNames.inputRoot}`, children: [!!startIcon ? (_jsx("div", { className: `input__start-icon ${classNames === null || classNames === void 0 ? void 0 : classNames.startIcon}`, children: startIcon })) : null, _jsx("input", { disabled: disabled, autoComplete: "false", type: type, className: `input ${classNames === null || classNames === void 0 ? void 0 : classNames.input}`, ...inputProps }), !!endIcon ? (_jsx("div", { className: `input__end-icon ${classNames === null || classNames === void 0 ? void 0 : classNames.endIcon}`, children: endIcon })) : null] }), !!error || !!helperText ? (_jsx("p", { className: `input__helper-text ${!!error ? classNames === null || classNames === void 0 ? void 0 : classNames.error : classNames === null || classNames === void 0 ? void 0 : classNames.helperText}`, children: error || helperText })) : null] }));
};
export { Input };
