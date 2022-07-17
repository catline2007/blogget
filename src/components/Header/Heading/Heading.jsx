import React from 'react';
import style from './Heading.module.css';

export const Heading = (props) => {
    return (
            <p className={style.heading}>{props.text}</p>
    )
}