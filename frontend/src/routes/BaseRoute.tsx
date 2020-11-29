import React from "react";
import { Route } from "react-router-dom";

interface BaseRouteProps {
    component: any;
    layout: any;
    [rest: string]: any;
}
export const BaseRoute: React.FC<BaseRouteProps> = ({
    component: Component,
    layout: Layout,
    ...rest
}) => (
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );