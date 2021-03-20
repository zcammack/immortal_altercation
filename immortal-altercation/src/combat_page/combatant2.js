import React from 'react';
import Combatant2Abilities from './combatant2Abilities'

class Combatant2 extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.combatant2.img_url} alt={'no image'} width={400} height={500} mode='fit'></img>
                <h1>HP:{this.props.combatant2HP}</h1>
                <Combatant2Abilities handleClick={this.props.handleClick} abilities={this.props.combatant2.abilities} />
            </div>
        )
    }
}
export default Combatant2