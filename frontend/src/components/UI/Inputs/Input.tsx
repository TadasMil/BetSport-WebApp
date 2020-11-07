import React from 'react'

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
}

export const Input: React.FC<InputProps> = ({ type, name, placeholder }) => {
    return (
        <input type={type} name={name} placeholder={placeholder}></input>
    )
}
