
import { connect } from 'react-redux';
import { Component } from 'react';
import styles from './dashboard.module.scss';

interface DashboardProps {}
interface DashboardState {}

class Dashboard extends Component<DashboardProps, DashboardState> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                dashboard
            </div>
        );
    }
}

export default connect(null, null)(Dashboard);