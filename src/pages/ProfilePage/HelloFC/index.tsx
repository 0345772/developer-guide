import React, { PureComponent } from 'react';
import scss from './index.scss';

export interface IHelloFCdProps {

}

export interface IHelloFCdState {

}

class HelloFC extends PureComponent<IHelloFCdProps, IHelloFCdState> {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={scss.style}>
                
            </div>
        );
    }
}

export default HelloFC;
