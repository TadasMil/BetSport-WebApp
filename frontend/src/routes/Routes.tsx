import React from 'react';
import { Switch } from 'react-router-dom';
import { Layout } from '../components/UI/Layout/Layout';
import { About } from '../pages/About';
import { Games } from '../pages/Games';
import { Home } from '../pages/Home';
import Profile from '../pages/Profile';
import { BaseRoute } from './BaseRoute';

export const Routes: React.FC = () => {
    return (
        <>
            <Switch>
                <BaseRoute exact path="/" layout={Layout} component={Home} />
                <BaseRoute exact path="/about" layout={Layout} component={About} />
                <BaseRoute exact path="/games" layout={Layout} component={Games} />
                <BaseRoute path="/profile" layout={Layout} component={Profile} />
            </Switch>
        </>
    )
}


