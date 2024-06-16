import React, { type ReactNode, useState, useRef, useEffect } from 'react';
import './index.css';
import useOutsideClick from './useOutsideClick';
import { ButtonProps } from '../Button';


type IPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
interface IMenuItem {
    id: string;
    name: string;
    value: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    leftLabel?: string;
    rightLabel?: string;
}

interface DropDownMenuItem extends ButtonProps {
    id: string;
    name: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    leftLabel?: string;
    rightLabel?: string;
    value?: string;
    className?: string;
}

interface DropdownProps {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    title?: string;
    className?: string;
    position?: IPosition;
    classNames?: {
        leftIcon?: string;
        rightIcon?: string;
        root?: string;
        title?: string;
    };
    menuItemProps: DropDownMenuItem[];
    selectedId?: string;
    onSelect?: (menuItem: DropDownMenuItem) => void;
    menuTitleProps?: Omit<DropDownMenuItem, 'items'>;
}

const Dropdown: React.FC<DropdownProps> = ({
    title,
    className,
    leftIcon,
    rightIcon,
    classNames,
    selectedId,
    onSelect,
    menuItemProps,
    menuTitleProps,
    position = "bottom-right",
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<DropDownMenuItem | undefined>(
        selectedId ? menuItemProps?.find(item => item?.id === selectedId) : undefined
    );

    const handleChange = (item: DropDownMenuItem) => {
        setSelectedItem(item);
        onSelect?.(item);
        setIsOpen(false);
    };

    useEffect(() => {
        if (selectedId) {
            const newSelectedItem = menuItemProps?.find(item => item?.id === selectedId);
            newSelectedItem && setSelectedItem(newSelectedItem);
        } else {
            setSelectedItem(undefined);
        }
    }, [selectedId, menuItemProps]);

    const dropdownRef = useRef<HTMLDivElement>(null);
    useOutsideClick({
        ref: dropdownRef,
        handler: () => setIsOpen(false),
    });

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`dropdown-root-container ${className}`} ref={dropdownRef}>
            <div
                className={`dropdown-trigger-container ${classNames?.root}`}
                onClick={handleToggle}
            >
                {!!leftIcon && (
                    <div className={`dropdown__left-icon ${classNames?.leftIcon}`}>
                        {leftIcon}
                    </div>
                )}
                <span className={`dropdown-title ${classNames?.title}`}>
                    {selectedItem?.name ?? title}
                </span>
                {!!rightIcon && (
                    <div className={`dropdown__right-icon ${classNames?.rightIcon}`}>
                        {rightIcon}
                    </div>
                )}
            </div>

            {isOpen && (
                <div className={`dropdown-item-container ${position}`}>
                    {
                        menuTitleProps ? <DropdownMenu {...menuTitleProps} /> : null
                    }
                    {menuItemProps?.map((menu, index) => (
                        <DropdownMenu
                            key={index}
                            {...menu}
                            onClick={() => handleChange(menu)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

const DropdownMenu: React.FC<DropDownMenuItem> = ({
    className,
    leftIcon,
    leftLabel,
    rightIcon,
    rightLabel,
    name,
    id,

}) => {

    return (
        <div
            key={id}
            className={`dropdown-item ${className}`}
        >
            {!!leftIcon && (
                <div className={`dropdown__left-icon`}>
                    {leftIcon}
                </div>
            )}
            {!!leftLabel && <span className="dropdown-left-label">{leftLabel}</span>}
            <span className="dropdown-item-name">{name}</span>
            {!!rightLabel && <span className="dropdown-right-label">{rightLabel}</span>}
            {!!rightIcon && (
                <div className={`dropdown__right-icon`}>
                    {rightIcon}
                </div>
            )}
        </div>
    );
};

export type { IMenuItem as IItem, DropdownProps, DropDownMenuItem };
export { Dropdown };
