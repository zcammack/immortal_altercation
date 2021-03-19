import React from 'react';
import styles from './styling.module.css'

class Arena extends React.Component {

    render() {
        return (
            <div style={{alignContent: 'center'}}>
            <h1>It's {this.props.activeCombatant.name}'s turn</h1>
            
            {this.props.image ? <img src={this.props.image} width={400} height={400}></img> : null}
            </div>
             
        )
    }
}

export default Arena