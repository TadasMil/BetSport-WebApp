import React from 'react';
import { NotFound } from '../NotFound/NotFound';
import { ProfileTitle } from '../Title/ProfileTitle'

const discounts: {} = [];

export const Discounts: React.FC = () => {
    const title = "Nuolaidos";
    return (
        <>
            <ProfileTitle>{title}</ProfileTitle>
            {discounts == 0 ? <NotFound nameOfPage={title} /> : null}
        </>
    )
}