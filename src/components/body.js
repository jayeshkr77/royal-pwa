import React, { Component } from 'react';
import myState from './mystate';
import Body1 from './body/body1';
import Body2 from './body/body2';
import Body3 from './body/body3';
import Body4 from './body/body4';

class Body extends Component {
    constructor(props){
        super(props);
    }
    render() {
        switch (myState.display) {
            case 1: return (
                <div>
                    <Body1 />
                </div>
            );
            case 2: return (
                <div>
                    <Body2 />
                </div>
            );
            case 3: return (
                <div>
                    <Body3 />
                </div>
            );
            case 4: return (
                <div>
                    <Body4 />
                </div>
            );
            default : return (
                <div>
                    error
                </div>
            );
        }


    }
}
export default Body;