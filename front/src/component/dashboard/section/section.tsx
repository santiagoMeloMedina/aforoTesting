
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import styles from './section.module.scss';
import CONST from '../../../constant/values';
import Auth from '../../../util/auth';

interface SectionProps {}
interface SectionState {}

class Section extends Component<SectionProps, SectionState> {

    constructor(props: any) {
        super(props);
        this.getSections = this.getSections.bind(this);
    }

    getSections() {
        let menu: any[] = [];
        const options: any = [
            { name: "Historial", path: "/dashboard/history" },
            { name: "Riesgo por entradas", path: "/dashboard/entries-risk", role: CONST.ROLES.CITIZEN },
            { name: "Entrada/Salida", path: "/dashboard/entry", role: CONST.ROLES.PUBLIC_ESTABLISHMENT },
        ]
        options.forEach(option => {
            if (!option.role || Auth.isSpecifiedRole(option.role))
                menu.push(<Link to={option.path} className={styles.option} >{option.name}</Link>);
        });
        return menu;
    }

    render() {
        return (
            <div className={styles.body}>
                <div className={styles.sections}>
                    { this.getSections() }
                </div>
            </div>
        );
    }
}

export default connect(null, null)(Section);