import React, { PureComponent } from 'react';
import scss from './index.scss';

export interface IPureCompdProps {

}

export interface IPureCompdState {

}

class PureComp extends PureComponent<IPureCompdProps, IPureCompdState> {
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

export default PureComp;
