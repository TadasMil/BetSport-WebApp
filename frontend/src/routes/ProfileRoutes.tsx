import React from 'react'
import { Switch } from 'react-router-dom'
import { ProfileInfo } from '../components/Profile/ProfileInfo/ProfileInfo'
import { ProfileMessages } from '../components/Profile/ProfileMessages/ProfileMessages'
import { ProfileLayout } from '../components/UI/Layout/ProfileLayout/ProfileLayout'
import { Discounts } from "../components/Profile/ProfileDiscounts/Discounts"
import { BaseRoute } from './BaseRoute'
import { GameHistory } from '../components/Profile/ProfileGameHistory/GameHistory'
import { Redeem } from '../components/Profile/ProfileRedeem/Redeem'

interface ProfileRoutesProps {
    path: string;
}

export const ProfileRoutes: React.FC<ProfileRoutesProps> = ({ path }) => {
    return (
        <Switch>
            <BaseRoute path={`${path}/details`} layout={ProfileLayout} component={ProfileInfo} />
            <BaseRoute path={`${path}/messages`} layout={ProfileLayout} component={ProfileMessages} />
            <BaseRoute path={`${path}/discounts`} layout={ProfileLayout} component={Discounts} />
            <BaseRoute path={`${path}/game-history`} layout={ProfileLayout} component={GameHistory} />
            <BaseRoute path={`${path}/redeem`} layout={ProfileLayout} component={Redeem} />
        </Switch>
    )
}
