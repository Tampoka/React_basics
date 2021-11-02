import React from 'react';
import s from './Myselect.module.css'

const MySelect = ({label, options, defaultValue, value, onChange}) => {
    return (<div className={s.mySelect}>
            <label>{label}</label>
            <select value={value}
                    onChange={e => onChange(e.target.value)}>
                {options.map(option =>
                    <option key={option.value}
                            value={option.value}>
                        {option.name}
                    </option>)}
            </select>
        </div>
    );
};

export default MySelect;