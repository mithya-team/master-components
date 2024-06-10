const _excluded = ["classNames", "label", "leftIcon", "rightIcon", "href", "isExternalLink", "tooltipProps", "component"],
  _excluded2 = ["className", "startIcon", "endIcon", "label", "disabled", "error", "helperText", "classNames", "type"],
  _excluded3 = ["value", "numInputs", "onChange", "onPaste", "shouldAutoFocus", "inputType", "renderSeparator", "placeholder", "classNames", "error", "helperText", "title"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], t.indexOf(o) >= 0 || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.indexOf(n) >= 0) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Bundled with Packemon: https://packemon.dev
// Platform: browser, Support: stable, Format: esm

import React, { useState, useRef, useLayoutEffect, useMemo, useEffect } from 'react';
import '../assets/index-c4df0b28.css';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import '../assets/index-a83d2979.css';
import '../assets/index-5e5ce4f2.css';
const Tooltip = props => {
  const children = props.children,
    content = props.content,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? "top" : _props$placement,
    delay = props.delay,
    _props$className = props.className,
    className = _props$className === void 0 ? {} : _props$className,
    _props$tooltipStyle = props.tooltipStyle,
    tooltipStyle = _props$tooltipStyle === void 0 ? {} : _props$tooltipStyle;
  let timeout;
  const _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];
  const tooltipRef = useRef(null);
  const _useState3 = useState(placement),
    _useState4 = _slicedToArray(_useState3, 2),
    calculatedPlacement = _useState4[0],
    setCalculatedPlacement = _useState4[1];
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
    const tooltipElement = tooltipRef?.current;
    if (!tooltipElement) {
      return; // Tooltip not yet rendered
    }
    const tooltipRect = tooltipElement.getBoundingClientRect();
    const newPlacement = getAvailablePlacement(tooltipRect, placement);
    if (newPlacement !== placement) setCalculatedPlacement(newPlacement);
  }, [placement]);
  return /*#__PURE__*/jsxs("div", {
    className: `Tooltip-Wrapper ${className}`,
    onMouseEnter: showTip,
    onMouseLeave: hideTip,
    children: [children, /*#__PURE__*/jsx("div", {
      ref: tooltipRef,
      className: `Tooltip-Tip ${calculatedPlacement}`,
      style: _objectSpread(_objectSpread({}, tooltipStyle), {}, {
        opacity: isVisible ? 1 : 0
      }),
      children: content
    })]
  });
};
const getAvailablePlacement = (tooltipRect, placement) => {
  const top = tooltipRect.top,
    left = tooltipRect.left,
    right = tooltipRect.right,
    bottom = tooltipRect.bottom,
    width = tooltipRect.width,
    height = tooltipRect.height;
  const _window = window,
    innerHeight = _window.innerHeight,
    innerWidth = _window.innerWidth;
  const fitsTop = top >= height;
  const fitsBottom = innerHeight - bottom >= height;
  const fitsLeft = left >= width;
  const fitsRight = innerWidth - right >= width;
  // If all sides fit, return the provided placement
  if (fitsTop && fitsBottom && fitsLeft && fitsRight) {
    return placement;
  }
  return checkPlacement(fitsTop, fitsBottom, fitsLeft, fitsRight) ?? placement;
};
const checkPlacement = (fitsTop, fitsBottom, fitsLeft, fitsRight) => {
  if (fitsBottom && fitsLeft && fitsRight) return 'bottom';
  if (fitsTop && fitsBottom && fitsLeft) return 'left';
  if (fitsTop && fitsBottom && fitsRight) return 'right';
  if (fitsTop && fitsLeft && fitsRight) return 'top';
  if (fitsBottom && fitsLeft && fitsRight) return 'bottom';
  if (fitsTop && fitsLeft) return 'top';
  if (fitsTop && fitsRight) return 'top';
  if (fitsBottom && fitsLeft) return 'bottom';
  if (fitsBottom && fitsRight) return 'right';
  if (fitsLeft) return 'left';
  if (fitsRight) return 'right';
  if (fitsTop) return 'top';
  if (fitsBottom) return 'bottom';
};
const Button = props => {
  const _props$classNames = props.classNames,
    classNames = _props$classNames === void 0 ? {} : _props$classNames,
    label = props.label,
    leftIcon = props.leftIcon,
    rightIcon = props.rightIcon,
    href = props.href,
    _props$isExternalLink = props.isExternalLink,
    isExternalLink = _props$isExternalLink === void 0 ? false : _props$isExternalLink,
    tooltipProps = props.tooltipProps,
    component = props.component,
    rest = _objectWithoutProperties(props, _excluded);
  const _classNames$root = classNames.root,
    root = _classNames$root === void 0 ? "" : _classNames$root,
    leftIconClass = classNames.leftIcon,
    rightIconClass = classNames.rightIcon,
    labelClass = classNames.label;
  const rootClass = useMemo(() => `button_root ${root} `, [root]);
  const buttonContent = useMemo(() => {
    return /*#__PURE__*/jsxs(Fragment, {
      children: [!!leftIcon ? /*#__PURE__*/jsx("div", {
        className: `button_left-icon ${leftIconClass}`,
        children: leftIcon
      }) : null, !!label ? typeof label === "string" ? /*#__PURE__*/jsx("span", {
        className: `label ${labelClass}`,
        children: label
      }) : label : null, !!rightIcon ? /*#__PURE__*/jsx("div", {
        className: `button_right-icon ${rightIconClass}`,
        children: rightIcon
      }) : null]
    });
  }, [leftIcon, rightIcon, leftIconClass, rightIconClass, label, labelClass]);
  const comp = useMemo(() => {
    if (!!href && isExternalLink) {
      return /*#__PURE__*/jsx("a", {
        className: rootClass,
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        children: buttonContent
      });
    }
    if (href && !isExternalLink && component) {
      const CustomComponent = component;
      return /*#__PURE__*/jsx(CustomComponent, _objectSpread(_objectSpread({
        className: rootClass,
        to: href
      }, rest), {}, {
        children: buttonContent
      }));
    }
    return /*#__PURE__*/jsx("button", _objectSpread(_objectSpread({
      className: rootClass
    }, rest), {}, {
      children: buttonContent
    }));
  }, [classNames, label, leftIcon, rightIcon, href, isExternalLink, tooltipProps, component, rest]);
  if (!!tooltipProps?.content) {
    return /*#__PURE__*/jsx(Tooltip, _objectSpread(_objectSpread({}, tooltipProps), {}, {
      children: comp
    }));
  }
  return comp;
};
const Input = props => {
  const className = props.className,
    startIcon = props.startIcon,
    endIcon = props.endIcon,
    label = props.label,
    disabled = props.disabled,
    error = props.error,
    helperText = props.helperText,
    classNames = props.classNames,
    _props$type = props.type,
    type = _props$type === void 0 ? "text" : _props$type,
    inputProps = _objectWithoutProperties(props, _excluded2);
  return /*#__PURE__*/jsxs("div", {
    className: `${className} input_root`,
    children: [!!label ? typeof label === "string" ? /*#__PURE__*/jsx("label", {
      className: `input__label ${classNames?.label}`,
      children: label
    }) : label : null, /*#__PURE__*/jsxs("div", {
      className: `input_container ${classNames?.inputRoot}`,
      children: [!!startIcon ? /*#__PURE__*/jsx("div", {
        className: `input__start-icon ${classNames?.startIcon}`,
        children: startIcon
      }) : null, /*#__PURE__*/jsx("input", _objectSpread({
        disabled: disabled,
        autoComplete: "false",
        type: type,
        className: `input ${classNames?.input}`
      }, inputProps)), !!endIcon ? /*#__PURE__*/jsx("div", {
        className: `input__end-icon ${classNames?.endIcon}`,
        children: endIcon
      }) : null]
    }), !!error || !!helperText ? /*#__PURE__*/jsx("p", {
      className: `input__helper-text ${!!error ? classNames?.error : classNames?.helperText}`,
      children: error || helperText
    }) : null]
  });
};
const OTPInput = _ref => {
  let _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    _ref$numInputs = _ref.numInputs,
    numInputs = _ref$numInputs === void 0 ? 4 : _ref$numInputs,
    onChange = _ref.onChange,
    onPaste = _ref.onPaste,
    _ref$shouldAutoFocus = _ref.shouldAutoFocus,
    shouldAutoFocus = _ref$shouldAutoFocus === void 0 ? true : _ref$shouldAutoFocus,
    _ref$inputType = _ref.inputType,
    inputType = _ref$inputType === void 0 ? 'text' : _ref$inputType,
    _ref$renderSeparator = _ref.renderSeparator,
    renderSeparator = _ref$renderSeparator === void 0 ? "-" : _ref$renderSeparator,
    placeholder = _ref.placeholder,
    classNames = _ref.classNames,
    error = _ref.error,
    helperText = _ref.helperText,
    title = _ref.title,
    inputProps = _objectWithoutProperties(_ref, _excluded3);
  const _ref2 = classNames ?? {},
    _ref2$container = _ref2.container,
    container = _ref2$container === void 0 ? "" : _ref2$container,
    _ref2$input = _ref2.input,
    input = _ref2$input === void 0 ? "" : _ref2$input,
    _ref2$separator = _ref2.separator,
    separator = _ref2$separator === void 0 ? "" : _ref2$separator;
  const _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    activeInput = _useState6[0],
    setActiveInput = _useState6[1];
  const inputRefs = React.useRef([]);
  const getOTPValue = () => value ? value.toString().split('') : [];
  const isInputNum = inputType === 'number';
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, numInputs);
  }, [numInputs]);
  useEffect(() => {
    if (shouldAutoFocus) {
      inputRefs.current[0]?.focus();
    }
  }, [shouldAutoFocus]);
  const getPlaceholderValue = () => {
    if (typeof placeholder === 'string') {
      if (placeholder.length === numInputs) {
        return placeholder;
      }
      if (placeholder.length > 0) {
        console.error('Length of the placeholder should be equal to the number of inputs.');
      }
    }
    return undefined;
  };
  const isInputValueValid = value => {
    const isTypeValid = isInputNum ? !isNaN(Number(value)) : typeof value === 'string';
    return isTypeValid && value.trim().length === 1;
  };
  const handleChange = event => {
    const value = event.target.value;
    if (isInputValueValid(value)) {
      changeCodeAtFocus(value);
      focusInput(activeInput + 1);
    }
  };
  const handleInputChange = event => {
    const nativeEvent = event.nativeEvent;
    const value = event.target.value;
    if (!isInputValueValid(value)) {
      // Pasting from the native autofill suggestion on a mobile device can pass
      // the pasted string as one long input to one of the cells. This ensures
      // that we handle the full input and not just the first character.
      if (value.length === numInputs) {
        const hasInvalidInput = value.split('').some(cellInput => !isInputValueValid(cellInput));
        if (!hasInvalidInput) {
          handleOTPChange(value.split(''));
          focusInput(numInputs - 1);
        }
      }

      // @ts-expect-error - This was added previously to handle and edge case
      // for dealing with keyCode "229 Unidentified" on Android. Check if this is
      // still needed.
      if (nativeEvent.data === null && nativeEvent.inputType === 'deleteContentBackward') {
        event.preventDefault();
        changeCodeAtFocus('');
        focusInput(activeInput - 1);
      }

      // Clear the input if it's not valid value because firefox allows
      // pasting non-numeric characters in a number type input
      event.target.value = '';
    }
  };
  const handleFocus = event => index => {
    setActiveInput(index);
    event.target.select();
  };
  const handleBlur = () => {
    setActiveInput(activeInput - 1);
  };
  const handleKeyDown = event => {
    const otp = getOTPValue();
    if ([event.code, event.key].includes('Backspace')) {
      event.preventDefault();
      changeCodeAtFocus('');
      focusInput(activeInput - 1);
    } else if (event.code === 'Delete') {
      event.preventDefault();
      changeCodeAtFocus('');
    } else if (event.code === 'ArrowLeft') {
      event.preventDefault();
      focusInput(activeInput - 1);
    } else if (event.code === 'ArrowRight') {
      event.preventDefault();
      focusInput(activeInput + 1);
    }
    // React does not trigger onChange when the same value is entered
    // again. So we need to focus the next input manually in this case.
    else if (event.key === otp[activeInput]) {
      event.preventDefault();
      focusInput(activeInput + 1);
    } else if (event.code === 'Spacebar' || event.code === 'Space' || event.code === 'ArrowUp' || event.code === 'ArrowDown') {
      event.preventDefault();
    }
  };
  const focusInput = index => {
    const activeInput = Math.max(Math.min(numInputs - 1, index), 0);
    if (inputRefs.current[activeInput]) {
      inputRefs.current[activeInput]?.focus();
      inputRefs.current[activeInput]?.select();
      setActiveInput(activeInput);
    }
  };
  const changeCodeAtFocus = value => {
    const otp = getOTPValue();
    otp[activeInput] = value[0];
    handleOTPChange(otp);
  };
  const handleOTPChange = otp => {
    const otpValue = otp.join('');
    onChange(otpValue);
  };
  const handlePaste = event => {
    event.preventDefault();
    const otp = getOTPValue();
    let nextActiveInput = activeInput;

    // Get pastedData in an array of max size (num of inputs - current position)
    const pastedData = event.clipboardData.getData('text/plain').slice(0, numInputs - activeInput).split('');

    // Prevent pasting if the clipboard data contains non-numeric values for number inputs
    if (isInputNum && pastedData.some(value => isNaN(Number(value)))) {
      return;
    }

    // Paste data from focused input onwards
    for (let pos = 0; pos < numInputs; ++pos) {
      if (pos >= activeInput && pastedData.length > 0) {
        otp[pos] = pastedData.shift() ?? '';
        nextActiveInput++;
      }
    }
    focusInput(nextActiveInput);
    handleOTPChange(otp);
  };
  return /*#__PURE__*/jsxs("div", {
    className: `input_root ${container}`,
    onPaste: onPaste,
    children: [!!title ? typeof title === "string" ? /*#__PURE__*/jsx("p", {
      className: `title ${classNames?.title}`,
      children: title
    }) : title : null, Array.from({
      length: numInputs
    }, (_, index) => index).map(index => /*#__PURE__*/jsxs(React.Fragment, {
      children: [/*#__PURE__*/jsx("input", _objectSpread({
        value: getOTPValue()[index] ?? '',
        placeholder: getPlaceholderValue()?.[index] ?? undefined,
        ref: element => inputRefs.current[index] = element,
        onChange: handleChange,
        onFocus: event => handleFocus(event)(index),
        onBlur: handleBlur,
        onKeyDown: handleKeyDown,
        onPaste: handlePaste,
        autoComplete: "off",
        className: `input-box otp_input ${input}`,
        type: inputType,
        inputMode: isInputNum ? 'numeric' : 'text',
        onInput: handleInputChange
      }, inputProps)), index < numInputs - 1 && (typeof renderSeparator === 'function' ? renderSeparator(index) : /*#__PURE__*/jsx("span", {
        className: `otp_input_separator ${separator}`,
        children: renderSeparator
      }))]
    }, index)), !!error || !!helperText ? /*#__PURE__*/jsx("p", {
      className: `input__helper-text ${!!error ? classNames?.error : classNames?.helperText}`,
      children: error || helperText
    }) : null]
  });
};
export { Button, Input, OTPInput, Tooltip };
//# sourceMappingURL=index.js.map
