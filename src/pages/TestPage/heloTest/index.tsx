import React, { PureComponent } from 'react';
import scss from './index.scss';

export interface IHeloTestdProps {

}

export interface IHeloTestdState {

}

class HeloTest extends PureComponent<IHeloTestdProps, IHeloTestdState> {
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

export default HeloTest;
