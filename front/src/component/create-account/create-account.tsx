
import { connect } from 'react-redux';
import { Component } from 'react';
import styles from './create-account.module.css';

import { CitizenForm } from './citizen';
import { EstablishmentForm } from './establishment';

import { create_account } from '../../client/user';

interface CreateAccountProps {}
interface CreateAccountState {
    email: string,
    password: string,
    cpassword: string,
    neighborhood: string,
    city: string,
    type: string
}

class CreateAccount extends Component<CreateAccountProps, CreateAccountState> {

    public getFields: any;

    readonly types = [{key: "citizen", name: "Ciudadano"}, {key: "establishment", name: "Establecimiento"}];

    constructor(props: any) {
        super(props);
        this.state = { email: null, password: null, cpassword: null, neighborhood: null, city: null, type: "citizen" }
        this.createAccount = this.createAccount.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.renderType = this.renderType.bind(this);
    }

    changeInput(e: any, type: string) {
        switch(type) {
            case "email":
                this.setState({ email: e.target.value});
                break;
            case "password":
                this.setState({ password: e.target.value});
                break;
            case "cpassword":
                this.setState({ cpassword: e.target.value});
                break;
            case "neighborhood":
                this.setState({ neighborhood: e.target.value});
                break;
            case "city":
                this.setState({ city: e.target.value});
                break;
            case "type":
                this.setState({ type: e.target.value});
                break;
        }
    }

    renderType() {
        switch(this.state.type) {
            case "citizen":
                return <CitizenForm setGetFields={(func) => {this.getFields = func}}/>
                break;
            case "establishment":
                return <EstablishmentForm setGetFields={(func) => {this.getFields = func}}/>;
                break;

        }
    }

    createAccount() {
        if (this.state.email && this.state.password && this.state.neighborhood && this.state.city) {
            if (this.state.password == this.state.cpassword) {
                // create_account(this.email, this.password, this.neighborhood, this.city).then(result => {
                //     console.log(result);
                //     console.log(this.getCitizenFields())
                // })
            } else {
                alert("Confirmar contraseña es diferente");
            }
        } else {
            alert("Faltan datos");
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.box}>
                    <img src="logo.png" className={styles.image}/>
                    <div className={styles.fields}>
                        <input placeholder={"Correo Electronico"} onChange={(e) => this.changeInput(e, "email")}></input>
                        <input placeholder={"Contraseña"} type="password" onChange={(e) => this.changeInput(e, "password")}></input>
                        <input placeholder={"Confirmar Contraseña"} type="password" onChange={(e) => this.changeInput(e, "cpassword")}></input>
                        <input placeholder={"Barrio"} type="password" onChange={(e) => this.changeInput(e, "neighborhood")}></input>
                        <input placeholder={"Ciudad"} type="password" onChange={(e) => this.changeInput(e, "city")}></input>
                        <select placeholder={"Elegir tipo de usuario"} onChange={(e) => this.changeInput(e, "type")}>
                            {
                                this.types.map((tpe) => {
                                    return <option value={tpe.key}>{tpe.name}</option>
                                })
                            }
                        </select>
                    </div>
                    {this.renderType()}
                    <button className={styles.button} onClick={this.createAccount}>Create Account</button>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(CreateAccount);