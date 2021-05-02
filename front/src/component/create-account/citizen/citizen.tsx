
import { connect } from 'react-redux';
import { Component } from 'react';
import styles from './citizen.module.css';

import VALUES from '../../../constant/values';

interface CitizenFormProps {
    setGetFields: any
}
interface CitizenFormState {
    names: string,
    lastnames: string,
    age: number,
    occupation: string,
    housemates: number
}

class CitizenForm extends Component<CitizenFormProps, CitizenFormState> {

    constructor(props: any) {
        super(props);
        this.state = { names: null, lastnames: null, age: null, occupation: null, housemates: null }
        this.changeInput = this.changeInput.bind(this);
        this.props.setGetFields(this.getFields.bind(this))
    }

    changeInput(e: any, type: string) {
        switch(type) {
            case "names":
                this.setState({ names: e.target.value});
                break;
            case "lastnames":
                this.setState({ lastnames: e.target.value});
                break;
            case "age":
                this.setState({ age: e.target.value});
                break;
            case "occupation":
                this.setState({ occupation: e.target.value});
                break;
            case "housemates":
                this.setState({ housemates: e.target.value});
                break;
        }
    }

    getFields() {
        return this.state;
    }

    render() {
        return (
            <div>
                <div className={styles.fields}>
                    <input placeholder={VALUES.VALIDATION.VALIDATION_VALUES.CITIZEN.NAMES.NAME} onChange={(e) => this.changeInput(e, "names")}></input>
                    <input placeholder={VALUES.VALIDATION.VALIDATION_VALUES.CITIZEN.LASTNAME.NAME} onChange={(e) => this.changeInput(e, "lastnames")}></input>
                    <input placeholder={VALUES.VALIDATION.VALIDATION_VALUES.CITIZEN.AGE.NAME} onChange={(e) => this.changeInput(e, "age")}></input>
                    <select onChange={(e) => this.changeInput(e, "occupation")}>
                        <option value="" disabled selected>{VALUES.VALIDATION.VALIDATION_VALUES.CITIZEN.OCCUPATION.NAME}</option>
                        {
                            VALUES.VALIDATION.VALIDATION_VALUES.CITIZEN.OCCUPATION.VALUES.map((value, index) => {
                                return <option value={value.KEY}>{value.NAME}</option>
                            })
                        }
                    </select>
                    <input placeholder={VALUES.VALIDATION.VALIDATION_VALUES.CITIZEN.PEOPLE_LIVING.NAME} onChange={(e) => this.changeInput(e, "housemates")}></input>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(CitizenForm);