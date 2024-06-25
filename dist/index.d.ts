import React, { PropsWithChildren, ButtonHTMLAttributes, ReactNode, FC } from 'react';
import { TooltipProps as TooltipProps$1, TooltipContentProps, TooltipArrowProps } from '@radix-ui/react-tooltip';
import { DropdownMenuItemProps, DropdownMenuProps, DropdownMenuTriggerProps, DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';

type IPlacement = "top" | "bottom" | "left" | "right";
interface TooltipProps extends TooltipProps$1 {
    content: string;
    placement?: IPlacement;
    contentProps?: TooltipContentProps;
    hasArrow?: boolean;
    arrowProps?: TooltipArrowProps;
}
declare const Tooltip: React.FC<PropsWithChildren<TooltipProps>>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classNames?: {
        root?: string;
        leftIcon?: string;
        label?: string;
        rightIcon?: string;
    };
    rightIcon?: ReactNode;
    leftIcon?: ReactNode;
    label?: ReactNode;
    href?: string;
    isExternalLink?: boolean;
    tooltipProps?: TooltipProps;
    component?: React.ElementType<any>;
}
declare const Button: React.FC<ButtonProps>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    label?: React.ReactNode;
    error?: string | boolean;
    helperText?: string;
    classNames?: {
        inputRoot?: string;
        label?: string;
        input?: string;
        startIcon?: string;
        endIcon?: string;
        helperText?: string;
        error?: string;
    };
}
declare const Input: FC<InputProps>;

type AllowedInputTypes = 'password' | 'text' | 'number';
interface OTPInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onFocus' | 'onBlur' | 'onKeyDown' | 'onPaste' | 'autoComplete' | 'inputMode' | 'onInput' | 'title'> {
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
declare const OTPInput: FC<OTPInputProps>;

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

export { type AllowedInputTypes, Button, type ButtonProps, type DropDownMenuItem, Dropdown, type DropdownProps, type IPlacement, Input, type InputProps, OTPInput, type OTPInputProps, Tooltip, type TooltipProps };
