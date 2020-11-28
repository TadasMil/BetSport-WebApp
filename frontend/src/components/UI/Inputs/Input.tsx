import React, { ReactElement } from 'react'
import { FieldError } from 'react-hook-form'
import styles from "./Input.module.scss"

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    errorDisplay?: FieldError;
    required: {}
}

const Input = React.forwardRef<ReactElement, InputProps>(({ type, name, placeholder, errorDisplay, required }, ref: any) => {
    return (
        <div className={`${styles.InputStyles} ${errorDisplay && styles.InputError}`}>
            <input ref={ref(required)} type={type} name={name} placeholder={placeholder} />
            {errorDisplay && <p>{errorDisplay.message}</p>}
        </div>
    )
})

export default Input;