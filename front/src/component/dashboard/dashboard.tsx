
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
import { Risk } from './risk';
import jwtDecode from 'jwt-decode';

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

    getUsername(){
        const decodedToken = jwtDecode(Auth.getToken());
        return decodedToken['user']
    }

    render() {
        const is_public_est: any = () => Auth.isSpecifiedRole(CONST.VALUES.ROLES.PUBLIC_ESTABLISHMENT);
        return (
            <Router>
                <Switch>
                <div className={styles.body}>
                    <div className={styles.box}>
                        <div className={styles.menu}>
                            <img src="logo.png" className={styles.image}/>
                            <div className={styles.buttons}>
                                <Route exact path="/dashboard" component={Section} />
                                <button className={styles.logOut} onClick={this.logOut}>Cerrar Sesión</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.jumbotron} >
                        Bienvenido, { this.getUsername() }
                    </div>
                    <div className={styles.sections}>
                        <Guard nested={true} path="/dashboard/history" component={History} authorized={()=>true} redirect={"/dashboard"}></Guard>
                        <Guard nested={true} path="/dashboard/entry" component={Entry} authorized={is_public_est} redirect={"/dashboard"}></Guard>
                        <Guard nested={true} path="/dashboard/edit" component={EditInfo} authorized={()=>true} redirect={"/dashboard"}></Guard>
                        {
                            Auth.isSpecifiedRole(CONST.VALUES.ROLES.CITIZEN) ? <Guard nested={false} path="/dashboard" component={Risk} authorized={()=>true} redirect={"/"}></Guard> : null
                        }
                        {
                            Auth.isSpecifiedRole(CONST.VALUES.ROLES.PUBLIC_ESTABLISHMENT) ? 
                            <div className={styles.img_box}>
                                <img className={styles.pub_est_img} src="pub_est.svg"></img> 
                            </div>
                            : null
                        }
                    </div>
                </div>
                </Switch>
            </Router>
        );
    }
}

export default connect(null, null)(Dashboard);