
import { connect } from 'react-redux';
import { Component } from 'react';
import styles from './establishment.module.css';

import { getCategories } from '../../../client/public_establishment';

import VALUES from '../../../constant/values';

interface EstablishmentFormProps {
    setGetFields: any
}
interface EstablishmentFormState {
    name: string,
    category: string,
    capacity: string,
    categories: any[]
}

class EstablishmentForm extends Component<EstablishmentFormProps, EstablishmentFormState> {

    constructor(props: any) {
        super(props);
        this.state = { name: "", category: "", capacity: "", categories: [] }
        this.changeInput = this.changeInput.bind(this);
        this.props.setGetFields(this.getFields.bind(this))
        getCategories().then(response => {
            this.setState({ categories: response });
        })
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
                    <input placeholder={VALUES.VALIDATION.VALIDATION_VALUES.PUBLIC_ESTABLISHMENT.NAME.NAME} onChange={(e) => this.changeInput(e, "name")}></input>
                    <select onChange={(e) => this.changeInput(e, "category")}>
                        <option value="" disabled selected>{VALUES.VALIDATION.VALIDATION_VALUES.PUBLIC_ESTABLISHMENT.CATEGORY.NAME}</option>
                        {
                            this.state.categories.map(category => {
                                return <option value={category["id"]}>{category["name"]}</option>
                            })
                        }
                    </select>
                    <input placeholder={VALUES.VALIDATION.VALIDATION_VALUES.PUBLIC_ESTABLISHMENT.CAPACITY.NAME} onChange={(e) => this.changeInput(e, "capacity")}></input>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(EstablishmentForm);