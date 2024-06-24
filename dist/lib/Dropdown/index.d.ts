import React, { type ReactNode } from 'react';
import { DropdownMenuProps, DropdownMenuTriggerProps, DropdownMenuContentProps, DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu';
import './index.css';
interface DropDownMenuItem extends DropdownMenuItemProps {
    id: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    leftLabel?: string;
    rightLabel?: string;
    value?: string;
    className?: string;
    leftContainerClass?: string;
    rightContainerClass?: string;
    onClick?: () => void;
}
interface DropdownProps extends DropdownMenuProps {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    title?: string;
    className?: string;
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
    dropdownTriggerClassName?: string;
    dropdownContentClassName?: string;
    dropdownItemClassName?: string;
    triggerProps?: DropdownMenuTriggerProps;
    contentProps?: DropdownMenuContentProps;
}
declare const Dropdown: React.FC<DropdownProps>;
export type { DropdownProps, DropDownMenuItem };
export { Dropdown };
