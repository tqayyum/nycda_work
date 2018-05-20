import React from 'react';
import { connect } from 'react-redux';
import handleMovement from './movement';
import './styles.css'

function Player(props) {
    return (
        <div className="player"
            style ={{
                top: props.position[1],
                left: props.position[0],
            }}
        />
    )
}

function mapStateToProps(state) {
    return {
        ...state.player,
    }
} 
export default connect(mapStateToProps) (handleMovement(Player));