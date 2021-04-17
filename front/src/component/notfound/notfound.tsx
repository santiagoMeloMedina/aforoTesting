
import { Component } from 'react';
import styles from './notfound.module.scss';

interface NotFoundProps {}
interface NotFoundState {}

export default class NotFound extends Component<NotFoundProps, NotFoundState> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                PAGINA NO ENCONTRADA
            </div>
        );
    }
}