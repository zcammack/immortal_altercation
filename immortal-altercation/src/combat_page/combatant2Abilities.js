
import React from 'react';

class Combatant2Abilities extends React.Component {
    render() {
        return (
            <div>
                <button id={this.props.abilities[0].id} combatant_id={this.props.abilities[0].combatant_id} onClick={(event) => this.props.handleClick(this.props.abilities[0])}>{this.props.abilities[0].name}</button>
             <br></br>
                <button id={this.props.abilities[1].id} combatant_id={this.props.abilities[1].combatant_id} onClick={(event) => this.props.handleClick(this.props.abilities[1])}>{this.props.abilities[1].name}</button>
            <br></br>
                <button id={this.props.abilities[2].id} combatant_id={this.props.abilities[2].combatant_id} onClick={(event) => this.props.handleClick(this.props.abilities[2])}>{this.props.abilities[2].name}</button>
            <br></br>
                <button id={this.props.abilities[3].id} combatant_id={this.props.abilities[3].combatant_id} onClick={(event) => this.props.handleClick(this.props.abilities[3])}>{this.props.abilities[3].name}</button>
            <br></br>`
            </div>
        )
    }
}

export default Combatant2Abilities