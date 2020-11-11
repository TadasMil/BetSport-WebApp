import React from 'react'

interface LoginFailedProps {
    wrongDetails: boolean
}

export const WrongDetails: React.FC<LoginFailedProps> = ({ wrongDetails }) => wrongDetails ? <p style={{ textAlign: 'center', fontSize: "20px", paddingTop: '10px' }}>Neteisingi vartotojo duomenys</p> : null
