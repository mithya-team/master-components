import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import './index.css';
import useOutsideClick from './useOutsideClick';
const Dropdown = ({ title, className, leftIcon, rightIcon, classNames, selectedId, onSelect, menuItemProps, menuTitleProps, position = "bottom-right", }) => {
    var _a;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(selectedId ? menuItemProps === null || menuItemProps === void 0 ? void 0 : menuItemProps.find(item => (item === null || item === void 0 ? void 0 : item.id) === selectedId) : undefined);
    const handleChange = (item) => {
        setSelectedItem(item);
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(item);
        setIsOpen(false);
    };
    useEffect(() => {
        if (selectedId) {
            const newSelectedItem = menuItemProps === null || menuItemProps === void 0 ? void 0 : menuItemProps.find(item => (item === null || item === void 0 ? void 0 : item.id) === selectedId);
            newSelectedItem && setSelectedItem(newSelectedItem);
        }
        else {
            setSelectedItem(undefined);
        }
    }, [selectedId, menuItemProps]);
    const dropdownRef = useRef(null);
    useOutsideClick({
        ref: dropdownRef,
        handler: () => setIsOpen(false),
    });
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    return (_jsxs("div", { className: `dropdown-root-container ${className}`, ref: dropdownRef, children: [_jsxs("div", { className: `dropdown-trigger-container ${classNames === null || classNames === void 0 ? void 0 : classNames.root}`, onClick: handleToggle, children: [!!leftIcon && (_jsx("div", { className: `dropdown__left-icon ${classNames === null || classNames === void 0 ? void 0 : classNames.leftIcon}`, children: leftIcon })), _jsx("span", { className: `dropdown-title ${classNames === null || classNames === void 0 ? void 0 : classNames.title}`, children: (_a = selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.name) !== null && _a !== void 0 ? _a : title }), !!rightIcon && (_jsx("div", { className: `dropdown__right-icon ${classNames === null || classNames === void 0 ? void 0 : classNames.rightIcon}`, children: rightIcon }))] }), isOpen && (_jsxs("div", { className: `dropdown-item-container ${position}`, children: [menuTitleProps ? _jsx(DropdownMenu, { ...menuTitleProps }) : null, menuItemProps === null || menuItemProps === void 0 ? void 0 : menuItemProps.map((menu, index) => (_jsx(DropdownMenu, { ...menu, onClick: () => handleChange(menu) }, index)))] }))] }));
};
const DropdownMenu = ({ className, leftIcon, leftLabel, rightIcon, rightLabel, name, id, }) => {
    return (_jsxs("div", { className: `dropdown-item ${className}`, children: [!!leftIcon && (_jsx("div", { className: `dropdown__left-icon`, children: leftIcon })), !!leftLabel && _jsx("span", { className: "dropdown-left-label", children: leftLabel }), _jsx("span", { className: "dropdown-item-name", children: name }), !!rightLabel && _jsx("span", { className: "dropdown-right-label", children: rightLabel }), !!rightIcon && (_jsx("div", { className: `dropdown__right-icon`, children: rightIcon }))] }, id));
};
export { Dropdown };
