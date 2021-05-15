
import { connect } from 'react-redux';
import { Component } from 'react';
import styles from './create-account.module.css';

import { CitizenForm } from './citizen';
import { EstablishmentForm } from './establishment';

import { create_account as createPEAccount } from '../../client/public_establishment';
import { create_account as createCitizenAccount } from '../../client/citizen';
import CITIES_DATA from '../../constant/json/cities';

import VALUES from '../../constant/values';

import { CitizenValidation, PublicEstablishmentValidation, UserValidation } from '../../util/validation';

interface CreateAccountProps {
    history: any
}
interface CreateAccountState {
    username: string,
    password: string,
    neighborhood: string,
    city: string,
    type: string,
    disabled: boolean
}

class CreateAccount extends Component<CreateAccountProps, CreateAccountState> {

    public getFields: any;

    readonly types = [{key: "citizen", name: "Ciudadano"}, {key: "establishment", name: "Establecimiento"}];

    constructor(props: any) {
        super(props);
        this.state = { username: "", password: "", neighborhood: "", city: "", type: "citizen", disabled: false }
        this.createAccount = this.createAccount.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.renderType = this.renderType.bind(this);
    }

    changeInput(e: any, type: string) {
        switch(type) {
            case "username":
                this.setState({ username: e.target.value});
                break;
            case "password":
                this.setState({ password: e.target.value});
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
        this.setState({ disabled: true });
        const fields: any = this.getFields();
        let validation: UserValidation;
        let create: any;
        switch(this.state.type) {
            case "citizen":
                validation = new CitizenValidation(
                    this.state.username, this.state.password, this.state.city, this.state.neighborhood,
                    fields.names, fields.lastnames, fields.age, fields.housemates, fields.occupation
                )
                create = () => createCitizenAccount(
                    this.state.username, this.state.password, this.state.neighborhood, this.state.city, 
                    fields.names, fields.lastnames, fields.age, fields.occupation, fields.housemates
                );
                break;
            case "establishment":
                validation = new PublicEstablishmentValidation(
                    this.state.username, this.state.password, this.state.city, this.state.neighborhood, 
                    fields.name, fields.category, fields.capacity
                )
                create = () => createPEAccount(
                    this.state.username, this.state.password, this.state.neighborhood, this.state.city, 
                    fields.name, fields.category, fields.capacity
                );
                break;
        }
        validation.validate().then(result => {
            if (result) {
                create().then(result => {
                    if (result == this.state.username) {
                        alert(`${this.types.filter(type => {return this.state.type == type.key})[0].name} creado`);
                        this.props.history.push("/");
                    } else {
                        alert("Ha habido un problema al crear el usuario, intente de nuevo");
                        this.setState({ disabled: false });
                    }
                });
            } else {
                alert(`Corregir los siguientes errores:\n\n  •  ${validation.getErrors().join("\n  •  ")}`);
                this.setState({ disabled: false });
            }
        });
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.box}>
                    <img src="logo.png" className={styles.image}/>
                    <div className={styles.fields}>
                        <input placeholder={VALUES.VALIDATION.VALIDATION_VALUES.USER.USERNAME.NAME} onChange={(e) => this.changeInput(e, "username")}></input>
                        <input placeholder={VALUES.VALIDATION.VALIDATION_VALUES.USER.PASSWORD.NAME} type="password" onChange={(e) => this.changeInput(e, "password")}></input>
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
                    <button className={styles.button} onClick={this.createAccount} disabled={this.state.disabled} >Crear Cuenta</button>
                    <button className={styles.button} onClick={()=>{this.props.history.push("/login")}} >Ingresa, si ya tienes cuenta</button>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(CreateAccount);