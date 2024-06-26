import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DropdownMenu, Item, Content, Portal, Label, Trigger, } from '@radix-ui/react-dropdown-menu';
import './index.css';
const Dropdown = ({ title, className, leftIcon, rightIcon, classNames, selectedId, onSelect, menuItemProps, menuTitleProps, dropdownTriggerClassName, dropdownContentClassName, dropdownItemClassName, triggerProps, contentProps, ...restProps }) => {
    return (_jsxs(DropdownMenu, { ...restProps, children: [_jsx(Trigger, { asChild: true, ...triggerProps, children: _jsxs("div", { className: `dropdown-trigger-container ${classNames === null || classNames === void 0 ? void 0 : classNames.root} ${dropdownTriggerClassName}`, children: [!!leftIcon && (_jsx("div", { className: `dropdown__left-icon ${classNames === null || classNames === void 0 ? void 0 : classNames.leftIcon}`, children: leftIcon })), _jsx("span", { className: `dropdown-title ${classNames === null || classNames === void 0 ? void 0 : classNames.title}`, children: title }), !!rightIcon && (_jsx("div", { className: `dropdown__right-icon ${classNames === null || classNames === void 0 ? void 0 : classNames.rightIcon}`, children: rightIcon }))] }) }), _jsx(Portal, { children: _jsxs(Content, { className: `dropdown-item-container ${dropdownContentClassName}`, ...contentProps, children: [menuTitleProps ?
                            _jsx(Label, { children: _jsx(DropdownMenuItem, { ...menuTitleProps }) })
                            : null, menuItemProps === null || menuItemProps === void 0 ? void 0 : menuItemProps.map((menu, index) => (_jsx(DropdownMenuItem, { ...menu, className: `dropdown-item ${dropdownItemClassName}`, onClick: () => onSelect === null || onSelect === void 0 ? void 0 : onSelect(menu) }, index)))] }) })] }));
};
const DropdownMenuItem = ({ className, leftIcon, leftLabel, rightIcon, rightLabel, leftContainerClass, rightContainerClass, onClick, ...props }) => {
    return (_jsxs(Item, { onClick: onClick, className: `dropdown-item ${className}`, ...props, children: [_jsxs("div", { className: `dropdown-subitem ${leftContainerClass}`, children: [!!leftIcon && (_jsx("div", { className: "dropdown__left-icon", children: leftIcon })), !!leftLabel && _jsx("span", { className: "dropdown-left-label", children: leftLabel })] }), _jsxs("div", { className: `dropdown-subitem ${rightContainerClass}`, children: [!!rightLabel && _jsx("span", { className: "dropdown-right-label", children: rightLabel }), !!rightIcon && (_jsx("div", { className: "dropdown__right-icon", children: rightIcon }))] })] }));
};
export { Dropdown };
