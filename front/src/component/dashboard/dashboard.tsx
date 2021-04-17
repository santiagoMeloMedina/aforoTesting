
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import styles from './dashboard.module.scss';

import Auth from '../../util/auth';
import Guard from '../../util/guard';

import { History } from './section/history';
import { Entry } from './section/entry';
import { EditInfo } from './section/editinfo';
import { Section } from './section';

import CONST from '../../constant';

interface DashboardProps {}
interface DashboardState {}

class Dashboard extends Component<DashboardProps, DashboardState> {

    constructor(props: any) {
        super(props);
        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        Auth.delTokenCookie();
        window.location.reload();
    }

    render() {
        const is_public_est: any = () => Auth.isSpecifiedRole(CONST.VALUES.ROLES.PUBLIC_ESTABLISHMENT);
        return (
            <div className={styles.body}>
                <div className={styles.menu}>
                    <button onClick={this.logOut}>Cerrar Sesion</button>
                </div>
                <div className={styles.sections}>
                    <Router>
                        <Switch>
                            <Route exact path="/dashboard" component={Section} />
                            <Guard nested={true} path="/dashboard/history" component={History} authorized={()=>true} redirect={"/dashboard"}></Guard>
                            <Guard nested={true} path="/dashboard/entry" component={Entry} authorized={is_public_est} redirect={"/dashboard"}></Guard>
                            <Guard nested={true} path="/dashboard/edit" component={EditInfo} authorized={()=>true} redirect={"/dashboard"}></Guard>
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(Dashboard);