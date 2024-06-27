import * as React from 'react';
import React__default, { PropsWithChildren, ButtonHTMLAttributes, ReactNode, FC } from 'react';
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
declare const Tooltip: React__default.FC<PropsWithChildren<TooltipProps>>;

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
    component?: React__default.ElementType<any>;
}
declare const Button: React__default.FC<ButtonProps>;

interface InputProps extends React__default.InputHTMLAttributes<HTMLInputElement> {
    startIcon?: React__default.ReactNode;
    endIcon?: React__default.ReactNode;
    label?: React__default.ReactNode;
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
interface OTPInputProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onFocus' | 'onBlur' | 'onKeyDown' | 'onPaste' | 'autoComplete' | 'inputMode' | 'onInput' | 'title'> {
    value?: string;
    numInputs?: number;
    onChange: (otp: string) => void;
    onPaste?: (event: React__default.ClipboardEvent<HTMLDivElement>) => void;
    shouldAutoFocus?: boolean;
    placeholder?: string;
    renderSeparator?: ((index: number) => React__default.ReactNode) | React__default.ReactNode;
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
declare const Dropdown: React__default.FC<DropdownProps>;

type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error';
type AvatarProps = {
    fallback: ReactNode;
    src?: string;
    alt?: string;
    className?: string;
    style?: React__default.CSSProperties;
    onImageLoadingStatusChange?: (status: ImageLoadingStatus) => void;
    imageClassName?: string;
    fallbackClassName?: string;
    fallbackCharactersToShow?: number;
};
declare const Avatar: React__default.FC<AvatarProps>;

type Direction = 'ltr' | 'rtl';
type IOrientation = 'horizontal' | 'vertical';
type SliderProps = {
    name?: string;
    disabled?: boolean;
    orientation?: IOrientation;
    dir?: Direction;
    min?: number;
    max?: number;
    step?: number;
    value?: number[];
    defaultValue?: number[];
    onValueChange?(value: number[]): void;
    onValueCommit?(value: number[]): void;
    className?: string;
    inputClassName?: string;
};
declare const Slider: React.FC<SliderProps>;

export { type AllowedInputTypes, Avatar, type AvatarProps, Button, type ButtonProps, type Direction, type DropDownMenuItem, Dropdown, type DropdownProps, type IOrientation, type IPlacement, type ImageLoadingStatus, Input, type InputProps, OTPInput, type OTPInputProps, Slider, type SliderProps, Tooltip, type TooltipProps };
