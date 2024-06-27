import * as React from 'react';
import "./slider.css";

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

const Slider: React.FC<SliderProps> = ({
    name,
    min = 0,
    max = 100,
    step = 1,
    orientation = 'horizontal',
    dir = 'ltr',
    disabled = false,
    defaultValue = [min],
    value,
    onValueChange = () => { },
    onValueCommit = () => { },
    className = "",
    inputClassName = "",
}) => {
    const [internalValues, setInternalValues] = React.useState<number[]>(defaultValue);
    const values = value || internalValues;
    const valueIndexToChangeRef = React.useRef<number>(0);
    const isHorizontal = orientation === 'horizontal';

    const handleSlideStart = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);
        valueIndexToChangeRef.current = index;
        updateValues(newValue, index);
    };

    const handleSlideEnd = () => {
        onValueCommit(values);
    };

    const updateValues = (newValue: number, atIndex: number) => {
        const nextValues = [...values];
        nextValues[atIndex] = clamp(newValue, min, max);
        if (!value) {
            setInternalValues(nextValues);
        }
        onValueChange(nextValues);
    };

    const containerClass = `slider-container ${isHorizontal ? 'horizontal' : 'vertical'} ${className}`;
    const inputClass = `slider-input ${isHorizontal ? '' : 'vertical'} ${inputClassName}`;

    return (
        <div className={containerClass} aria-disabled={disabled} style={{ direction: dir }}>
            {values?.map((val, index) => (
                <input
                    key={index}
                    type="range"
                    name={name}
                    min={min}
                    max={max}
                    step={step}
                    value={val}
                    onChange={handleSlideStart(index)}
                    onMouseUp={handleSlideEnd}
                    onTouchEnd={handleSlideEnd}
                    disabled={disabled}
                    className={inputClass}
                />
            ))}
        </div>
    );
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export type { Direction, SliderProps, IOrientation };

export { Slider };
