
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import styles from './risk.module.scss';

import Auth from '../../../util/auth';
import Guard from '../../../util/guard';

import CONST from '../../../constant';
import { getRisk } from '../../../client/citizen'
import jwtDecode from 'jwt-decode';

interface RiskProps {}
interface RiskState {
    risk: string
}

class Risk extends Component<RiskProps, RiskState> {

    constructor(props: any) {
        super(props);
        this.state = { risk : '' };
    }

    fetchRisk = () => {
        const username = Auth.getUsername()
        getRisk(username)
         .then( result => 
           this.setState({ risk : result })
         )
    }

    componentDidMount(){
        this.fetchRisk();
    }

    render() {
        return (
            <div className={styles.body}>
                <h1 className={styles.percentage}>
                    Su porcentaje de riesgo de contagio es:
                </h1>
                <div className={styles.center_box1}>
         
                    <h1 className={styles.risk}>
                        {
                            this.state.risk + "%"
                        }
                    </h1>
                </div>
                <div className={styles.center_box} style={{animationDelay: "0s"}}></div>
                <div className={styles.center_box} style={{animationDelay: "1s"}}></div>
                <div className={styles.center_box} style={{animationDelay: "2s"}}></div>               
            </div>
        );
    }
}

export default connect(null, null)(Risk);