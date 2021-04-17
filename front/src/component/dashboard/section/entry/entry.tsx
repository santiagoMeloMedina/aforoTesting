
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import styles from './entry.module.scss';

interface EntryProps {}
interface EntryState {}

class Entry extends Component<EntryProps, EntryState> {

    constructor(props: any) {
        super(props);
    }

    render() {
        console.log("ON ENTRY")
        return (
            <div>
                <Link to="/dashboard">Atras</Link>
                entry
            </div>
        );
    }
}

export default connect(null, null)(Entry);