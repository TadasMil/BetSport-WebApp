import React from 'react';
import { Switch } from 'react-router-dom';
import { FullLayout } from '../components/UI/Layout/Full/FullLayout';
import { Layout } from '../components/UI/Layout/Layout';
import { About } from '../pages/About';
import { Games } from '../pages/Games';
import { Home } from '../pages/Home';
import { BaseRoute } from './BaseRoute';
import Profile from '../pages/Profile';
import { Game } from '../components/Games/Game';
import { AuthWrapper } from '../utilities/AuthWrapper';
import { GamesLayout } from '../components/UI/Layout/Games/GamesLayout';
import { ProfileBackground } from '../components/UI/Layout/ProfileLayout/ProfileBackground';

export const Routes: React.FC = () => {
    return (
        <>
            <Switch>
                <BaseRoute exact path="/" layout={Layout} component={Home} />
                <BaseRoute exact path="/about" layout={Layout} component={About} />
                <BaseRoute exact path="/games" layout={GamesLayout} component={Games} />
                <AuthWrapper>
                    <BaseRoute path={`/games/:id`} layout={GamesLayout} component={Game} />
                    <BaseRoute path="/profile" layout={ProfileBackground} component={Profile} />
                </AuthWrapper>
            </Switch>
        </>
    )
}


