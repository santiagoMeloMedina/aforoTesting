
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import styles from './entry.module.scss';
import VALUES from '../../../../constant/values'
import { registerEntry, registerExit } from '../../../../client/public_establishment';
import Auth from '../../../../util/auth';


interface EntryProps {}
interface EntryState {
    username,
    mask,
    temperature,
    exitUsername
}

class Entry extends Component<EntryProps, EntryState> {

    constructor(props: any) {
        super(props);
        this.state = {
            username : "",
            mask: 0,
            temperature: null,
            exitUsername : ""
        }
    }

    changeInputEntry(e: any, type: any){
        switch(type) {
            case "username":
                this.setState({ username: e.target.value});
                break;
            case "mask":
                this.setState({ mask: parseInt(e.target.value)});
                break;
            case "temperature":
                this.setState({ temperature: parseFloat(e.target.value)});
                break;
            case "exitUsername":
                this.setState({ exitUsername: e.target.value});
                break;
        }
    }

    submitEntry(){
        const publicEstablishentUsername = Auth.getUsername();
        registerEntry(this.state.username, publicEstablishentUsername, Boolean(this.state.mask), this.state.temperature)
          .then( result => {
            let alertMessage = '';
            if(result === "error"){
                alertMessage = "El usuario debe estar registrado";
            }
            else{
                if(!Boolean(result)){
                    alertMessage = 'El usuario no puede ingresar al establecimiento';
                }
                else{
                    alertMessage = 'La visita se ha registrado exitosamente';
                }
            }
            alert(alertMessage);
            
            this.setState({ temperature : 0 });
            this.setState({ username : '' });
          })
    }

    submitExit(){
        const publicEstablishentUsername = Auth.getUsername();
        registerExit(this.state.exitUsername, publicEstablishentUsername)
        .then( result => {
            if(result === "error"){
                alert("El usuario debe haber ingresado al establecimiento");
            }
            else{
                alert('La salida se ha registrado exitosamente');
            }
            this.setState({ exitUsername : '' });
        });
    }

    render() {
        const { username, temperature, exitUsername } = this.state;
        return (
            <div>
                <div className={styles.dashboard_link}>
                    <a title="Dashboard" href="/dashboard">&#8592;</a>
                </div>
                <div className={styles.forms}>
                    <div className={styles.form}>
                        <h1>Registro de entrada</h1>
                        <input value={username} placeholder={VALUES.VALIDATION.VALIDATION_VALUES.USER.USERNAME.NAME} onChange={(e) => this.changeInputEntry(e, "username")}></input>
                        <select name="tapabocas" onChange={(e) => this.changeInputEntry(e, "mask")} >
                            <option value="" disabled selected>
                                {VALUES.VALIDATION.VALIDATION_VALUES.PUBLIC_ESTABLISHMENT.MASK.NAME}
                            </option>
                            {
                                VALUES.VALIDATION.VALIDATION_VALUES.PUBLIC_ESTABLISHMENT.MASK.VALUES.map( 
                                    (value, index) => {
                                        return( 
                                        <option value={value.KEY}>
                                            { value.NAME }
                                        </option> )
                                    })
                            }
                        </select>
                        <input value={temperature} placeholder={VALUES.VALIDATION.VALIDATION_VALUES.PUBLIC_ESTABLISHMENT.TEMPERATURE.NAME} type="number" onChange={(e) => this.changeInputEntry(e, "temperature")}></input>
                        <button className={styles.buttonStyle} onClick={() => this.submitEntry()} > Registrar </button>
                    </div>


                    <div className={styles.form}>
                        <h1>Registro de salida</h1>
                        <input value={exitUsername} placeholder={VALUES.VALIDATION.VALIDATION_VALUES.USER.USERNAME.NAME} onChange={(e) => this.changeInputEntry(e, "exitUsername")}></input>                        
                        <button className={styles.buttonStyle } onClick={() => this.submitExit()}> Registrar </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(Entry);