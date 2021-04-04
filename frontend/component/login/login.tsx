
import { Component } from 'react';
import { connect } from 'react-redux';
import styles from './login.module.scss';

interface LoginProps {}
interface LoginState {}

class Login extends Component<LoginProps, LoginState> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (<div className={styles.body}>Login page</div>);
    }

}

export default connect(null, null)(Login);