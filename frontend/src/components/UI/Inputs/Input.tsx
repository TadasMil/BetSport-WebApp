import React from 'react'

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    handleUserInput: () => void;
}

export const Input: React.FC<InputProps> = ({ type, name, handleUserInput, placeholder }) => {
    return (
        <input type={type} name={name} onChange={handleUserInput} placeholder={placeholder}></input>
    )
}
