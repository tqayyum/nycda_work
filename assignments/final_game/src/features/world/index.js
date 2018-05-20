import React from 'react';
import Map from '../map';
import Player from '../player'
import './styles.css'

import { tiles } from '../../data/maps/1'
import store from '../../config/store'

function World(props) {
    store.dispatch({
        type: 'ADD_TILES',
        payload: {
            tiles,
        }
    })
    
    return (
        <div className="world">
        <Map />
        <Player />
        </div>
    )
}

export default World;