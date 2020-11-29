import React from 'react'
import { NotFound } from '../NotFound/NotFound';
import { ProfileTitle } from '../Title/ProfileTitle'

const messages: {} = [];

export const Redeem: React.FC = () => {
    const title = "Atsiimti laimėjimą";
    return (
        <>
            <ProfileTitle>{title}</ProfileTitle>
            {messages == 0 ? <NotFound nameOfPage="Šiuo metu galimybės" /> : null}
        </>
    )
}
