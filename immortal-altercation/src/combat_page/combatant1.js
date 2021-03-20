import React from 'react';
import Combatant1Abilities from './combatant1Abilities'

class Combatant1 extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.combatant1.img_url} alt={'no image'} width={400} height={500} mode='fit'></img>
                <h1>HP: {this.props.combatant1HP}</h1>
                <Combatant1Abilities handleClick={this.props.handleClick} abilities={this.props.combatant1.abilities} />
            </div>
        )
    }
}
export default Combatant1