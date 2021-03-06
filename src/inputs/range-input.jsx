import React from 'react'
import PropTypes from 'prop-types'

import ErrorTip from '../error-tip.jsx'

import '../styles/inputs.scss'
import '../styles/range-input.scss'

const RangeInput = (props) => {
    let {
        className, error,
        id, label, placeholder, showLabel, labelClass,
        required, validateAs, value, ...rest
    } = props;

    let attr = {};

    if (required) {
        attr['required'] = true;
        attr['aria-required'] = true;
    }
    let labelTextClasses = `input__label__text ${ labelClass ? labelClass : '' } ${ showLabel ? '' : ' u-sr-only' }`;

    return (
        <label className="input__label input__label--wrap">
          <span className={ labelTextClasses }>
            { label }{ attr.required && <span>{ '\u00A0' }*<span className="u-sr-only"> required field</span></span> }
          </span>
            <input type='range' name={ id } id={ id } onChange={ props.onChange } min='0' max={ props.total }
                   className={ `input input--range ${ className ? className : '' } ${ formErrors && formErrors[id] ? 'input--invalid' : '' }` }
                   data-validate={ validateAs } placeholder={ placeholder } value={ value } step='0.01'
                   onMouseOut={ props.onBlur }
                   { ...attr } />
            { error ? <ErrorTip contents={ error } /> : '' }
        </label>
    )
}

RangeInput.propTypes = {
    className: PropTypes.string,
    error: PropTypes.string,
    id: PropTypes.string.isRequired,
    labelClass: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]).isRequired,
    placeholder: PropTypes.string,
    validateAs: PropTypes.string,
    showLabel: PropTypes.bool,
    value: PropTypes.string.isRequired
}

export default RangeInput;
