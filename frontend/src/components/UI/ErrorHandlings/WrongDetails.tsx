import React from 'react'

interface LoginFailedProps {
    wrongDetailsMessage: string
}

export const WrongDetails: React.FC<LoginFailedProps> = ({ wrongDetailsMessage }) => wrongDetailsMessage ? <p style={{ textAlign: 'center', fontSize: "20px", paddingTop: '10px' }}>{wrongDetailsMessage}</p> : null
