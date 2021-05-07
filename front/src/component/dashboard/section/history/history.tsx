
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import styles from './history.module.scss';

import Auth from '../../../../util/auth';
import Guard from '../../../../util/guard';

import CONST from '../../../../constant';

import { getCitizenHistory } from '../../../../client/citizen';

interface HistoryProps {}
interface HistoryState {
    table
}
class History extends Component<HistoryProps, HistoryState> {

    constructor(props: any) {
        super(props);
        this.state = { table : {}};
    }

    getCitizenEntries(){
        const username = Auth.getUsername();
        getCitizenHistory(username)
          .then(result => {
              this.setState({ table : result });
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
        })        
    }

    componentDidMount(){
        if(Auth.isSpecifiedRole(CONST.VALUES.ROLES.CITIZEN)){
            this.getCitizenEntries();
        } 
    }

    render() {
        return (
            <div>
                <Link to="/dashboard">Dashboard</Link>
                {
                    Auth.isSpecifiedRole(CONST.VALUES.ROLES.CITIZEN) ? 
                    <div className={styles.overflow_div}>
                        <table className={styles.table}>
                            <tbody>
                                <tr className={styles.tableHead}>
                                    <th>Fecha entrada</th>
                                    <th>Hora entrada</th>
                                    <th>Fecha Salida</th>
                                    <th>Hora Salida</th>
                                    <th>Establecimiento</th>
                                    <th>Temperatura (°C)</th>
                                </tr>
                                { this.getCitizenTable() }
                            </tbody>
                        </table>
                    </div>
                    
                    : null 
                }
            </div>
        );
    }
}

export default connect(null, null)(History);