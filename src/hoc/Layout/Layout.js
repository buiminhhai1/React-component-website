import React, {Component} from 'react';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar/>
            </Aux>
        );
    }
}

export default Layout;