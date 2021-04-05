
import { connect } from 'react-redux';
import { Component } from 'react';
import styles from './login.module.css';

interface LoginProps {}
interface LoginState {}

class Login extends Component<LoginProps, LoginState> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src="logo.jpg" className={styles.image}/>
                <div className={styles.fields}>
                    <input placeholder={"Correo Electronico"}></input>
                    <input placeholder={"Contraseña"}></input>
                    <button>Inicia sesión</button>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(Login);