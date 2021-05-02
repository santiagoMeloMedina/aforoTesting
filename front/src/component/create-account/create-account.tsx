
import { connect } from 'react-redux';
import { Component } from 'react';
import styles from './create-account.module.css';

import { CitizenForm } from './citizen';
import { EstablishmentForm } from './establishment';

import { create_account } from '../../client/user';
import CITIES_DATA from '../../constant/json/cities';

import VALUES from '../../constant/values';

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
        console.log(this.getFields())
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.box}>
                    <img src="logo.png" className={styles.image}/>
                    <div className={styles.fields}>
                        <input placeholder={VALUES.VALIDATION.VALIDATION_VALUES.USER.USERNAME.NAME} onChange={(e) => this.changeInput(e, "email")}></input>
                        <input placeholder={VALUES.VALIDATION.VALIDATION_VALUES.USER.PASSWORD.NAME} type="password" onChange={(e) => this.changeInput(e, "password")}></input>
                        <input placeholder={VALUES.VALIDATION.VALIDATION_VALUES.USER.PASSWORD.NAME} type="password" onChange={(e) => this.changeInput(e, "cpassword")}></input>
                        <input placeholder={VALUES.VALIDATION.VALIDATION_VALUES.USER.NEIGHBORHOOD.NAME} onChange={(e) => this.changeInput(e, "neighborhood")}></input>
                        <select onChange={(e) => this.changeInput(e, "city")}>
                            <option value="" disabled selected>{VALUES.VALIDATION.VALIDATION_VALUES.USER.CITY.NAME}</option>
                            {
                                CITIES_DATA.map((value, index) => {
                                    return <option value={value.MUNICIPIO}>{value.MUNICIPIO}</option>
                                })
                            }
                        </select>
                        <select placeholder={"Elegir tipo de usuario"} onChange={(e) => this.changeInput(e, "type")}>
                            {
                                this.types.map((tpe) => {
                                    return <option value={tpe.key}>{tpe.name}</option>
                                })
                            }
                        </select>
                    </div>
                    {this.renderType()}
                    <button className={styles.button} onClick={this.createAccount}>Crear Cuenta</button>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(CreateAccount);