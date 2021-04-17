
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import styles from './history.module.scss';

interface HistoryProps {}
interface HistoryState {}

class History extends Component<HistoryProps, HistoryState> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/dashboard">Atras</Link>
                history
            </div>
        );
    }
}

export default connect(null, null)(History);