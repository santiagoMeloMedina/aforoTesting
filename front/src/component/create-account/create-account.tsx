
import { connect } from 'react-redux';
import { Component } from 'react';
import styles from './create-account.module.css';

interface CreateAccountProps {}
interface CreateAccountState {}

class CreateAccount extends Component<CreateAccountProps, CreateAccountState> {

    private email: string = null;
    private password: string = null;
    private cpassword: string = null;

    constructor(props: any) {
        super(props);
        this.createAccount = this.createAccount.bind(this);
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
            case "cpassword":
                this.cpassword = e.target.value;
                break;
        }
    }

    createAccount() {
        if (this.email && this.password && this.password == this.cpassword) {
            console.log(this.email, this.password)
        }
    }

    render() {
        return (
            <div>
                <img src="logo.jpg" className={styles.image}/>
                <div className={styles.fields}>
                    <input placeholder={"Correo Electronico"} onChange={(e) => this.changeInput(e, "email")}></input>
                    <input placeholder={"Contraseña"} type="password" onChange={(e) => this.changeInput(e, "password")}></input>
                    <input placeholder={"Confirmar Contraseña"} type="password" onChange={(e) => this.changeInput(e, "cpassword")}></input>
                    <button onClick={this.createAccount}>Create Account</button>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(CreateAccount);