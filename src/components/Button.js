import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZE = ['btn--medium', 'btn--large'];
const Button = ({
    children,
    type,
    onLick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

    return (
        <Link to='sign-up' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onLick}
                type={type}>
                {children}
            </button>
        </Link>
    )
}

export default Button
