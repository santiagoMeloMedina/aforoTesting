
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Login } from '../component/login';
import { Dashboard } from '../component/dashboard';
import { CreateAccount } from '../component/create-account';

import Guard from '../util/guard';
import Auth from '../util/auth';

export default class Pages extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        const authed: any = Auth.isAuthenticated;
        const notAuthed: any = () => !Auth.isAuthenticated();
        return (
            <div>
                <Router>
                    <Switch>
                        <Guard path="/login" component={Login} authorized={notAuthed} redirect={"/dashboard"}></Guard>
                        <Guard path="/create-account" component={CreateAccount} authorized={notAuthed} redirect={"/dashboard"}></Guard>
                        <Guard path="/dashboard" component={Dashboard} authorized={authed} redirect={"/login"}></Guard>
                    </Switch>
                </Router>
            </div>
        );
    }
}