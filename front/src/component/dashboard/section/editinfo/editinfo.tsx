
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import styles from './editinfo.module.scss';

interface EditInfoProps {}
interface EditInfoState {}

class EditInfo extends Component<EditInfoProps, EditInfoState> {

    constructor(props: any) {
        super(props);
    }

    render() {
        console.log("ON EDIT")
        return (
            <div>
                <Link to="/dashboard">Atras</Link>
                edit
            </div>
        );
    }
}

export default connect(null, null)(EditInfo);