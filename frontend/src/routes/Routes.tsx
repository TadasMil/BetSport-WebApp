import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from '../pages/About';
import { Games } from '../pages/Games';
import { Home } from '../pages/Home';

export const Routes: React.FC = () => {
    return (
        <>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/games' exact component={Games} />
            </Switch>
        </>
    )
}


