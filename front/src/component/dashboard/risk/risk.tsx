
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import styles from './risk.module.scss';

import Auth from '../../../util/auth';
import Guard from '../../../util/guard';

import CONST from '../../../constant';

interface RiskProps {}
interface RiskState {}

class Risk extends Component<RiskProps, RiskState> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className={styles.body}>
                <div className={styles.center_box}>AQUI LO QUE SE VA A MOSTRAR PARA RIESGO</div>
            </div>
        );
    }
}

export default connect(null, null)(Risk);