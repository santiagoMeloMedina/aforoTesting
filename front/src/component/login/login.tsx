
import { connect } from 'react-redux';
import { Component } from 'react';
import styles from './login.module.css';

import { authenticate } from '../../client/user';

import Auth from '../../util/auth';

import VALUES from '../../constant/values';

interface LoginProps {
    history: any
}
interface LoginState {
    disabled: boolean
}

class Login extends Component<LoginProps, LoginState> {

    private email: string = null;
    private password: string = null;

    constructor(props: any) {
        super(props);
        this.state = { disabled: false };
        this.login = this.login.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    changeInput(e: any, type: string) {
        switch(type) {
            case "email":
                this.email = e.target.value;
                break;
            case "password":
                this.password = e.target.value;
                break;
        }
    }

    login() {
        if (this.email && this.password) {
            this.setState({ disabled: true });
            authenticate(this.email, this.password).then(result => {
                if (result) {
                    Auth.setTokenCookie(result);
                    window.location.reload();
                } else {
                    alert("Credenciales no aceptadas");
                    this.setState({ disabled: false });
                }
            })
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.box}>
                    <img src="logo.png" className={styles.image}/>
                    <div className={styles.fields}>
                        <input placeholder={VALUES.VALIDATION.VALIDATION_VALUES.USER.USERNAME.NAME} onChange={(e) => this.changeInput(e, "email")}></input>
                        <input placeholder={VALUES.VALIDATION.VALIDATION_VALUES.USER.PASSWORD.NAME} type="password" onChange={(e) => this.changeInput(e, "password")}></input>
                        <button onClick={this.login} disabled={this.state.disabled}>Inicia sesión</button>
                        <button onClick={() => this.props.history.push("/create-account")}>Crear Cuenta</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(Login);