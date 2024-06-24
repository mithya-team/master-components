import React, { type ReactNode } from 'react';
import './index.css';
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
declare const Dropdown: React.FC<DropdownProps>;
export type { IMenuItem as IItem, DropdownProps, DropDownMenuItem };
export { Dropdown };
