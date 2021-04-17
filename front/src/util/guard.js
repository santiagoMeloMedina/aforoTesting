
import { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, authorized, redirect, ...params }) => {
    const render = (props) => (
        authorized() ? <Component {...props}/> : <Redirect to={redirect ?? "/"}/>
    );
    return params.nested ? <Route {...params} render={render} /> : <Route exact {...params} render={render} />;
}