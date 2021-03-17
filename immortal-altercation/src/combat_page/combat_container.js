import React from 'react';

class CombatContainer extends React.Component {
    state = {
        activeCombatant: {},
        passiveCombatant: {},
        combatant1: this.props.combatant1,
        combatant2: this.props.combatant2,
        selectedAbilityDamage: 0,
        selectedAbilityImage: "",
        combatant1HP: this.props.combatant1.hp,
        combatant2HP: this.props.combatant2.hp
    }

    
}