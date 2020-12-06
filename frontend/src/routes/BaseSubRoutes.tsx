import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { BaseRoute } from './BaseRoute'

interface BaseSubRouteProps {
    routes: any[];
    path: string;
    layout: any;
}

export const BaseSubRoutes: React.FC<BaseSubRouteProps> = ({ routes, path, layout }) => {
    console.log(routes);
    return (
        <>
            <Switch>
                {routes.map((route: any) => {
                    return <BaseRoute key={route.path} path={`${path}${route.path}`} layout={layout} component={route.component} />
                })}
            </Switch>
        </>
    )
}
