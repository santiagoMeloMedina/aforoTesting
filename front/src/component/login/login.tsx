
import { connect } from 'react-redux';
import { Component } from 'react';
import styles from './login.module.css';

import { authenticate } from '../../client/user';

import Auth from '../../util/auth';

interface LoginProps {}
interface LoginState {}

class Login extends Component<LoginProps, LoginState> {

    private email: string = null;
    private password: string = null;

    constructor(props: any) {
        super(props);
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
            authenticate(this.email, this.password).then(result => {
                Auth.setTokenCookie(result);
                window.location.reload();
            })
        }
    }

    render() {
        return (
            <div>
                <img src="logo.jpg" className={styles.image}/>
                <div className={styles.fields}>
                    <input placeholder={"Correo Electronico"} onChange={(e) => this.changeInput(e, "email")}></input>
                    <input placeholder={"Contraseña"} type="password" onChange={(e) => this.changeInput(e, "password")}></input>
                    <button onClick={this.login}>Inicia sesión</button>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(Login);