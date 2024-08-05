import React, { useState } from 'react';

const RangeSlider = ({ label, id, min, max, step, value, onChange }) => {
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor={id} className="text-left font-semibold">{label}</label>
            <input
                type="range"
                id={id}
                name={id}
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
                className="slider"
            />
            <div className="flex justify-between">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5+</span>
            </div>
            <div className="text-left">Selected Experience: {value}</div>
        </div>
    );
};

export default RangeSlider;