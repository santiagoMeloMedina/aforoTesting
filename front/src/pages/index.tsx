
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Login } from '../component/login';
import { Dashboard } from '../component/dashboard';

export default class Pages extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/dashboard" component={Dashboard}></Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}