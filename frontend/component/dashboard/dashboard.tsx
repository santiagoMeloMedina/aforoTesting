
import { Component } from 'react';
import { connect } from 'react-redux';

interface DashboardProps {}
interface DashboardState {}

class Dashboard extends Component<DashboardProps, DashboardState> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (<div></div>);
    }
}

export default connect(null, null)(Dashboard);