import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Icon.scss';

const Icon = ({
                  name,
                  className,
                  onClick,
                  size,
                  color,
                  disabled,
                  ...attrs
}) => {

    const iconSize = size ? {fontSize: `${size}px`} : null;

    const iconClasses = classNames(
        'ff',
        `ff-${name}`,
        className,
        `${color}`,
        {hover: onClick},
        {disabled}
    );

    return(
        <i
            {...attrs}
            className={iconClasses}
            onClick={disabled ? null : onClick}
            style={iconSize}></i>
    );
};

Icon.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.number,
    disabled: PropTypes.bool,
    color: PropTypes.string,
};

Icon.defaultProps = {
    name: '',
    className: '',
    onClick: null,
    size: null,
    disabled: false,
    color: '',
};

export default Icon;
