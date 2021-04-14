
import { connect } from 'react-redux';
import { Component } from 'react';
import styles from './establishment.module.css';

interface EstablishmentFormProps {
    setGetFields: any
}
interface EstablishmentFormState {
    name: string,
    category: string,
    capacity: string
}

class EstablishmentForm extends Component<EstablishmentFormProps, EstablishmentFormState> {

    constructor(props: any) {
        super(props);
        this.state = { name: null, category: null, capacity: null }
        this.changeInput = this.changeInput.bind(this);
        this.props.setGetFields(this.getFields.bind(this))
    }

    changeInput(e: any, type: string) {
        switch(type) {
            case "name":
                this.setState({ name: e.target.value});
                break;
            case "category":
                this.setState({ category: e.target.value});
                break;
            case "capacity":
                this.setState({ capacity: e.target.value});
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
                    <input placeholder={"Nombres"} onChange={(e) => this.changeInput(e, "name")}></input>
                    <input placeholder={"Apellidos"} onChange={(e) => this.changeInput(e, "category")}></input>
                    <input placeholder={"Edad"} type="number" onChange={(e) => this.changeInput(e, "capacity")}></input>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(EstablishmentForm);