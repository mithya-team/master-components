import React, { type ButtonHTMLAttributes, useMemo, type FC, type ReactNode } from 'react';
import type { TooltipProps } from '../Tooltip';
import Tooltip from '../Tooltip';
import "./index.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: "Small" | "Big";
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
	toolTipProps?: TooltipProps;
	component?: React.ElementType<any>;
}

const Button: React.FC<ButtonProps> = (props) => {
	const {
		size = "Small",
		classNames = {},
		label,
		leftIcon,
		rightIcon,
		href,
		isExternalLink = false,
		toolTipProps,
		component,
		...rest
	} = props
	const { root = "" } = classNames;

	const heightClassName = useMemo(() => (size === "Big" ? "big" : "small"), [size]);
	const rootClass = useMemo(() => `button-root-container ${root} `, [root, heightClassName])

	const comp = useMemo(() => {
		if (!!href && isExternalLink) {
			return (
				<a
					className={rootClass}
					href={href}
					target="_blank"
					rel="noopener noreferrer"
				>
					<ButtonContent {...props} />
				</a>
			)
		};

		if (href && !isExternalLink && component) {
			const CustomComponent = component as React.ElementType;
			return (
				<CustomComponent className={rootClass} {...rest}>
					<ButtonContent {...props} />
				</CustomComponent>
			);
		}

		return (
			<button className={rootClass} {...props}>
				{<ButtonContent {...props} />}
			</button>
		)
	}, [size, classNames, label, leftIcon, rightIcon, href, isExternalLink, toolTipProps, component, rest])

	if (!!toolTipProps?.content) {
		return (
			<Tooltip {...toolTipProps}>
				{comp}
			</Tooltip>
		)
	}

	return comp;
};

export default Button;


const ButtonContent: FC<ButtonProps> = ({
	leftIcon,
	rightIcon,
	label,
	classNames = {},
}) => {
	const { leftIcon: leftIconClass, rightIcon: rightIconClass, label: labelClass } = classNames;
	return (
		<>
			{!!leftIcon ? (
				<div className={`left-icon-container ${leftIconClass}`}>
					{leftIcon}
				</div>
			) : null}
			{!!label ? typeof (label) === "string" ? <span className={`label ${labelClass}`}>{label}</span> : label : null}
			{!!rightIcon ? (
				<div className={`left-icon-container ${rightIconClass}`}>
					{rightIcon}
				</div>
			) : null}
		</>
	)
};
