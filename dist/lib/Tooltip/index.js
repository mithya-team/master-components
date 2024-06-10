import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef, useLayoutEffect } from 'react';
import "./index.css";
const Tooltip = (props) => {
    const { children, content, placement = "top", delay, className = {}, tooltipStyle = {} } = props;
    let timeout;
    const [isVisible, setIsVisible] = useState(false);
    const tooltipRef = useRef(null);
    const [calculatedPlacement, setCalculatedPlacement] = useState(placement);
    const showTip = () => {
        timeout = setTimeout(() => {
            setIsVisible(true);
        }, delay || 400);
    };
    const hideTip = () => {
        clearInterval(timeout);
        setIsVisible(false);
    };
    useLayoutEffect(() => {
        const tooltipElement = tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.current;
        if (!tooltipElement) {
            return; // Tooltip not yet rendered
        }
        const tooltipRect = tooltipElement.getBoundingClientRect();
        const newPlacement = getAvailablePlacement(tooltipRect, placement);
        if (newPlacement !== placement)
            setCalculatedPlacement(newPlacement);
    }, [placement]);
    return (_jsxs("div", { className: `Tooltip-Wrapper ${className}`, onMouseEnter: showTip, onMouseLeave: hideTip, children: [children, _jsx("div", { ref: tooltipRef, className: `Tooltip-Tip ${calculatedPlacement}`, style: { ...tooltipStyle, opacity: isVisible ? 1 : 0 }, children: content })] }));
};
export { Tooltip };
const getAvailablePlacement = (tooltipRect, placement) => {
    var _a;
    const { top, left, right, bottom, width, height } = tooltipRect;
    const { innerHeight, innerWidth } = window;
    const fitsTop = top >= height;
    const fitsBottom = (innerHeight - bottom) >= height;
    const fitsLeft = left >= width;
    const fitsRight = (innerWidth - right) >= width;
    // If all sides fit, return the provided placement
    if (fitsTop && fitsBottom && fitsLeft && fitsRight) {
        return placement;
    }
    return (_a = checkPlacement(fitsTop, fitsBottom, fitsLeft, fitsRight)) !== null && _a !== void 0 ? _a : placement;
};
const checkPlacement = (fitsTop, fitsBottom, fitsLeft, fitsRight) => {
    if (fitsBottom && fitsLeft && fitsRight)
        return 'bottom';
    if (fitsTop && fitsBottom && fitsLeft)
        return 'left';
    if (fitsTop && fitsBottom && fitsRight)
        return 'right';
    if (fitsTop && fitsLeft && fitsRight)
        return 'top';
    if (fitsBottom && fitsLeft && fitsRight)
        return 'bottom';
    if (fitsTop && fitsLeft)
        return 'top';
    if (fitsTop && fitsRight)
        return 'top';
    if (fitsBottom && fitsLeft)
        return 'bottom';
    if (fitsBottom && fitsRight)
        return 'right';
    if (fitsLeft)
        return 'left';
    if (fitsRight)
        return 'right';
    if (fitsTop)
        return 'top';
    if (fitsBottom)
        return 'bottom';
};
