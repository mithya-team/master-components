import React, { type ButtonHTMLAttributes, useMemo, type ReactNode } from 'react';
import type { TooltipProps } from '../Tooltip';
import Tooltip from '../Tooltip';

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
	openInNewTab?: boolean;
	tooltipprops?: TooltipProps;
	component?: React.ElementType<any>;
}

const Button: React.FC<ButtonProps> = (props) => {
	const {
		classNames = {},
		label,
		leftIcon,
		rightIcon,
		href,
		isExternalLink = false,
		tooltipprops,
		component,
		...rest
	} = props
	const { root = "", leftIcon: leftIconClass, rightIcon: rightIconClass, label: labelClass } = classNames;
	const rootClass = useMemo(() => `button_root ${root} `, [root])

	const buttonContent = useMemo(() => {
		return (
			<>
				{!!leftIcon ? (
					<div className={`button_left-icon ${leftIconClass}`}>
						{leftIcon}
					</div>
				) : null}
				{!!label ? typeof (label) === "string" ? <span className={`label ${labelClass}`}>{label}</span> : label : null}
				{!!rightIcon ? (
					<div className={`button_right-icon ${rightIconClass}`}>
						{rightIcon}
					</div>
				) : null}
			</>
		)
	}, [leftIcon, rightIcon, leftIconClass, rightIconClass, label, labelClass])

	const comp = useMemo(() => {
		if (!!href && isExternalLink) {
			return (
				<a
					className={rootClass}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
				>
					{buttonContent}
				</a>
			)
		};

		if (href && !isExternalLink && component) {
			const CustomComponent = component as React.ElementType;
			return (
				<CustomComponent className={rootClass} to={href} {...rest}>
					{buttonContent}
				</CustomComponent>
			);
		}

		return (
			<button className={rootClass} {...props}>
				{buttonContent}
			</button>
		)
	}, [classNames, label, leftIcon, rightIcon, href, isExternalLink, tooltipprops, component, rest])

	if (!!tooltipprops?.content) {
		return (
			<Tooltip {...tooltipprops}>
				{comp}
			</Tooltip>
		)
	}

	return comp;
};

export default Button;

