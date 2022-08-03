import React from 'react'
import PropTypes from 'prop-types';
import classes from './Bar.module.css'

export default function Bar({ value, color, onClick }) {

    const _value = value < 0 ? 0 : value > 100 ? 100 : value

    return (
        <div className={classes.container}>
            <div className={classes.graph} style={{
                height: `${_value}%`,
                backgroundColor: color,
            }} onClick={() => onClick(_value)}></div>
        </div>
    )
}

Bar.defaultProps = {
    value: 0,
    color: '#ff6767',
    onClick: () => {},
}

Bar.propTypes = {
    value: PropTypes.number,
    color: PropTypes.string,
    onClick: PropTypes.func,
}