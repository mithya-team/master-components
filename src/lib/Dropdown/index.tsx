import React, { type ReactNode } from 'react';
import {
    DropdownMenu,
    DropdownMenuProps,
    DropdownMenuTriggerProps,
    DropdownMenuContentProps,
    DropdownMenuItemProps,
    Item,
    Content,
    Portal,
    Label,
    Trigger,
} from '@radix-ui/react-dropdown-menu';
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
    dropdownTriggerClassName,
    dropdownContentClassName,
    dropdownItemClassName,
    triggerProps,
    contentProps,
    ...restProps
}) => {

    return (
        <DropdownMenu {...restProps}>
            <Trigger asChild {...triggerProps}>
                <div
                    className={`dropdown-trigger-container ${classNames?.root} ${dropdownTriggerClassName}`}
                >
                    {!!leftIcon && (
                        <div className={`dropdown__left-icon ${classNames?.leftIcon}`}>
                            {leftIcon}
                        </div>
                    )}
                    <span className={`dropdown-title ${classNames?.title}`}>
                        {title}
                    </span>
                    {!!rightIcon && (
                        <div className={`dropdown__right-icon ${classNames?.rightIcon}`}>
                            {rightIcon}
                        </div>
                    )}
                </div>
            </Trigger>

            <Portal>
                <Content
                    className={`dropdown-item-container ${dropdownContentClassName}`}
                    {...contentProps}
                >
                    {menuTitleProps ?
                        <Label>
                            <DropdownMenuItem {...menuTitleProps} />
                        </Label>
                        : null}
                    {menuItemProps?.map((menu, index) => (
                        <DropdownMenuItem
                            key={index}
                            {...menu}
                            className={`dropdown-item ${dropdownItemClassName}`}
                            onClick={() => onSelect?.(menu)}
                        />
                    ))}
                </Content>
            </Portal>
        </DropdownMenu>
    );
};

const DropdownMenuItem: React.FC<DropDownMenuItem> = ({
    className,
    leftIcon,
    leftLabel,
    rightIcon,
    rightLabel,
    leftContainerClass,
    rightContainerClass,
    onClick,
    ...props
}) => {
    return (
        <Item onClick={onClick} className={`dropdown-item ${className}`} {...props}>
            <div className={`dropdown-subitem ${leftContainerClass}`}>
                {!!leftIcon && (
                    <div className="dropdown__left-icon">
                        {leftIcon}
                    </div>
                )}
                {!!leftLabel && <span className="dropdown-left-label">{leftLabel}</span>}
            </div>
            <div className={`dropdown-subitem ${rightContainerClass}`}>
                {!!rightLabel && <span className="dropdown-right-label">{rightLabel}</span>}
                {!!rightIcon && (
                    <div className="dropdown__right-icon">
                        {rightIcon}
                    </div>
                )}
            </div>


        </Item>
    );
};

export type { DropdownProps, DropDownMenuItem };
export { Dropdown };
