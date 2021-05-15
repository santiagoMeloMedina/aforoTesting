import { Component } from "react";
import { connect } from "react-redux";
import { getEntriesRiskLevel } from '../../../../client/citizen';
import CONST from '../../../../constant';
import Auth from "../../../../util/auth";
import styles from './entriesRisk.module.scss';

interface EntriesRiskProps {}
interface EntriesRiskState {
    risk
}
class EntriesRisk extends Component<EntriesRiskProps, EntriesRiskState> {
    username: any;

    constructor(props: any) {
        super(props);
        this.username = Auth.getUsername();
        this.state = { risk : 0 }
    }

    getRiskLevelByEntries(){
        getEntriesRiskLevel(this.username)
        .then(result => {
            this.setState({ risk : result });
        })
    }

    getEntriesRiskLevel(){
        return this.state.risk;
    }

    componentDidMount(){
        this.getRiskLevelByEntries();

    }

    render(){
       return (
            <div className={styles.body}>
                <div className={styles.dashboard_link}>
                    <a title="Dashboard" href="/dashboard">&#8592;</a>
                </div>

                <h1 className={styles.percentage}>
                    Su porcentaje de riesgo de contagio por entradas es:
                </h1>
                <div className={styles.center_box1}>
         
                    <h1 className={styles.risk}>
                        {
                            this.getEntriesRiskLevel() + '%'
                        }
                    </h1>
                </div>
                <div className={styles.center_box} style={{animationDelay: "0s"}}></div>
                <div className={styles.center_box} style={{animationDelay: "1s"}}></div>
                <div className={styles.center_box} style={{animationDelay: "2s"}}></div>  
                
            </div>
       )
   } 
}


export default connect(null, null)(EntriesRisk);