import React, { ReactElement } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    errorDisplay?: FieldError;
    required: {}
}

const Input = React.forwardRef<ReactElement, InputProps>(({ type, name, placeholder, errorDisplay, required }, ref: any) => {
    return (
        <div>
            <input ref={ref(required)} type={type} name={name} placeholder={placeholder} />
            {errorDisplay && <p>{errorDisplay.message}</p>}
        </div>
    )
})

export default Input;