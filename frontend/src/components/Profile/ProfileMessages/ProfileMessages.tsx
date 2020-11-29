import React from 'react'
import { NotFound } from '../NotFound/NotFound';
import { ProfileTitle } from '../Title/ProfileTitle'

const messages: {} = [];

export const ProfileMessages: React.FC = () => {
    const title = ["Pranešimai", "Pranešimų"];
    return (
        <>
            <ProfileTitle>{title[0]}</ProfileTitle>
            {messages == 0 ? <NotFound nameOfPage={title[1]} /> : null}
        </>
    )
}
