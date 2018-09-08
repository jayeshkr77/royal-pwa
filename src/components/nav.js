import React, { Component } from 'react';
import {Icon } from 'antd';
import styled from 'styled-components';
import Chest from '../assets/Clan_Chest_open.png';
import clanimage from '../assets/clan.jpg';
import myState from './mystate';

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="tabs">
                    <Button>
                        <img src={Chest} alt="chest" width="20px" height="20px" onclick={myState.dispaly= 1}/>
                    </Button>
                </div>
                <div className="tabs">
                    <Button>
                        <Icon type="user" theme="outlined" onclick={myState.dispaly= 2}/>
                    </Button>
                </div>
                <div className="tabs">
                    <Button>
                        <img src={clanimage} alt="chest" width="20px" height="20px" />
                    </Button>
                </div>
                <div className="tabs">
                    <Button>
                        <img src={clanimage} alt="chest" width="20px" height="20px" />
                    </Button>
                </div>
            </div>
        );
    }
}

export default Nav;

const Button = styled.button`
    border:none;
    background:transparent;
`;

