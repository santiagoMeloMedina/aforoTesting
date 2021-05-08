
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import styles from './history.module.scss';

import Auth from '../../../../util/auth';
import Guard from '../../../../util/guard';

import CONST from '../../../../constant';

import { getCitizenHistory, getEntriesRiskLevel } from '../../../../client/citizen';
import { getEstablishmentHistory } from '../../../../client/public_establishment';

interface HistoryProps {}
interface HistoryState {
    table,
    establishment_table,
    risk
}
class History extends Component<HistoryProps, HistoryState> {
    username: any;

    constructor(props: any) {
        super(props);
        this.state = { table : {}, establishment_table : {}, risk : 0};
        this.username = Auth.getUsername();

    }

    getPublicEstablishmentEntries(){
        getEstablishmentHistory(this.username)
          .then(result => {
              this.setState({ establishment_table : result });
          })
    }

    getCitizenEntries(){
        getCitizenHistory(this.username)
          .then(result => {
              this.setState({ table : result });
          })
    }

    getRiskLevelByEntries(){
        getEntriesRiskLevel(this.username)
        .then(result => {
            this.setState({ risk : result });
        })
    }

    getTimeDate(dateTime){
        let date: string = "-";
        let time: string = "-";
        if(dateTime){
            const d = new Date(dateTime);
        
            date = d.toLocaleDateString('es-ES', {
                weekday: "short", 
                year: "numeric", 
                month: "short", 
                day: "numeric"
            });
            time = d.toLocaleTimeString();
        }
        return {
            date,
            time
        }
    }

    getCitizenTable(){
        if(this.state.table){
            return Object.keys(this.state.table).map( (key) => {
                const record = this.state.table[key];

                const entry = this.getTimeDate(record[1]);
                const exit = this.getTimeDate(record[2]);
                
                return (
                    <tr key={record[0]}>
                        <td> { entry.date } </td>
                        <td> { entry.time } </td>
                        <td> { exit.date } </td>
                        <td> { exit.time } </td>
                        <td> { record[4]} </td>
                        <td> { record[5] } </td>
                    </tr>
                );
            });
        }
        else{
            return null;
        }
    }

    getEstablismentTable(){
        if(this.state.establishment_table){
            return Object.keys(this.state.establishment_table).map( (key) => {
                const record = this.state.establishment_table[key];
    
                const entry = this.getTimeDate(record[1]);
                const exit = this.getTimeDate(record[2]);
                
                return (
                    <tr key={record[0]}>
                        <td> { entry.date } </td>
                        <td> { entry.time } </td>
                        <td> { exit.date } </td>
                        <td> { exit.time } </td>
                        <td> { record[3]} </td>
                        <td> { record[5] } </td>
                    </tr>
                );
            })
        }
        else{
            return null;
        }
    }

    getEntriesRiskLevel(){
        return this.state.risk;
    }

    componentDidMount(){
        if(Auth.isSpecifiedRole(CONST.VALUES.ROLES.CITIZEN)){
            this.getCitizenEntries();
            this.getRiskLevelByEntries();
        }
        else{
            this.getPublicEstablishmentEntries()
        }
    }

    render() {
        return (
            <div>
                <div className={styles.dashboard_link}>
                    <a href="/dashboard">&#8592;</a>
                    {
                        Auth.isSpecifiedRole(CONST.VALUES.ROLES.CITIZEN) ? 
                        <h4>
                            Riesgo de contagio: {this.getEntriesRiskLevel()}
                        </h4>
                        :
                        null
                    }
                </div>
                <div className={styles.overflow_div}>
                    <table className={styles.table}>
                        <tbody>
                            <tr className={styles.tableHead}>
                                <th>Fecha entrada</th>
                                <th>Hora entrada</th>
                                <th>Fecha salida</th>
                                <th>Hora salida</th>
                                {
                                    Auth.isSpecifiedRole(CONST.VALUES.ROLES.CITIZEN) ? 
                                    <th>Establecimiento</th>
                                    :
                                    <th>Ciudadano</th>
                                }
                                <th>Temperatura (&#8451;)</th>
                            </tr>
                    {
                        Auth.isSpecifiedRole(CONST.VALUES.ROLES.CITIZEN) ? 
                            this.getCitizenTable()
                        : 
                            this.getEstablismentTable()
                    }
                            </tbody>
                        </table>
                </div>
            </div>
        );
    }
}

export default connect(null, null)(History);