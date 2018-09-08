import React, { Component } from 'react';
import Nav from './nav';
import Body from './body';

class Main extends Component {
    render() {
        return (
            <div class="mainbody">
                 <Body />
                <div style={{position:'relative',bottom:'0'}}>
                    <Nav />
                </div>

            </div>
        );
    }
}

export default Main;