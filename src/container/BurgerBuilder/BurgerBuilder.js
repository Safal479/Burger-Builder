import React, { Component } from 'react';
import Auxa from '../../hoc/Auxa';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
    render() {
        return (
            <Auxa>
                <Burger/>
                <div>BurgerControls</div>
            </Auxa>
        );
    }
}

export default BurgerBuilder;