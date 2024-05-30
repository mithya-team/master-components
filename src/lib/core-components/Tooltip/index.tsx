import { type FC, useState, type PropsWithChildren, type CSSProperties } from 'react';
import "./index.css"

export type IPlacement = "top" | "bottom" | "left" | "right";

export interface TooltipProps extends PropsWithChildren {
    content: string;
    placement?: IPlacement;
    delay?: number;
    className?: string;
    tooltipStyle?: CSSProperties
    hasToolTipArrow?: boolean;
}

const Tooltip: FC<TooltipProps> = (props) => {
    const { children, content, placement = "top", delay, className = {}, tooltipStyle = {}, hasToolTipArrow = true } = props
    let timeout: NodeJS.Timeout;

    const [isVisible, setIsVisible] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setIsVisible(true);
        }, delay || 400);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setIsVisible(false);
    };

    return (
        <div
            className={`Tooltip-Wrapper ${className}`}
            onMouseEnter={showTip}
            onMouseLeave={hideTip}
        >
            {children}
            {isVisible && (
                <div className={`Tooltip-Tip ${placement} ${hasToolTipArrow ? 'has-arrow' : ''}`} style={tooltipStyle}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;