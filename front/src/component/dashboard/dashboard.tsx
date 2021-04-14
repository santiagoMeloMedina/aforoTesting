
import { connect } from 'react-redux';
import { Component } from 'react';
import styles from './dashboard.module.scss';
import Auth from '../../util/auth';

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
        return (
            <div>
                <div className={styles.menu}>
                    <button onClick={this.logOut}>Cerrar Sesion</button>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(Dashboard);