import React, { Component } from 'react';
import myState from './mystate';

class Body extends Component {
    render() {
        switch (myState.display) {
            case 1: return (
                <div>
                    body
                </div>
            );
            case 2: return (
                <div>
                    body2
                </div>
            );
            case 3: return (
                <div>
                    body3
                </div>
            );
        }


    }
}
export default Body;