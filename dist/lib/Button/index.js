import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { Tooltip } from '../Tooltip';
const Button = (props) => {
    const { classNames = {}, label, leftIcon, rightIcon, href, isExternalLink = false, tooltipProps, component, ...rest } = props;
    const { root = "", leftIcon: leftIconClass, rightIcon: rightIconClass, label: labelClass } = classNames;
    const rootClass = useMemo(() => `button_root ${root} `, [root]);
    const buttonContent = useMemo(() => {
        return (_jsxs(_Fragment, { children: [!!leftIcon ? (_jsx("div", { className: `button_left-icon ${leftIconClass}`, children: leftIcon })) : null, !!label ? typeof (label) === "string" ? _jsx("span", { className: `label ${labelClass}`, children: label }) : label : null, !!rightIcon ? (_jsx("div", { className: `button_right-icon ${rightIconClass}`, children: rightIcon })) : null] }));
    }, [leftIcon, rightIcon, leftIconClass, rightIconClass, label, labelClass]);
    const comp = useMemo(() => {
        if (!!href && isExternalLink) {
            return (_jsx("a", { className: rootClass, href: href, target: "_blank", rel: "noopener noreferrer", children: buttonContent }));
        }
        ;
        if (href && !isExternalLink && component) {
            const CustomComponent = component;
            return (_jsx(CustomComponent, { className: rootClass, to: href, ...rest, children: buttonContent }));
        }
        return (_jsx("button", { className: rootClass, ...rest, children: buttonContent }));
    }, [classNames, label, leftIcon, rightIcon, href, isExternalLink, tooltipProps, component, rest]);
    if (!!(tooltipProps === null || tooltipProps === void 0 ? void 0 : tooltipProps.content)) {
        return (_jsx(Tooltip, { ...tooltipProps, children: comp }));
    }
    return comp;
};
export { Button };
