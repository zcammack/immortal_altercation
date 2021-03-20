import React from "react";
import Combatant1 from './combatant1'
import Combatant2 from './combatant2'
import Arena from './arena'
import styles from './styling.module.css'


class CombatContainer extends React.Component {

    state = {
        activeCombatant: {},
        passiveCombatant: {},
        Combatant1: this.props.Combatant1,
        Combatant2: this.props.Combatant2,
        selectedAbilityDamage: 0,
        selectedAbilityImage: "",
        Combatant1HP: this.props.Combatant1.hp,
        Combatant2HP: this.props.Combatant2.hp
 }

 handleClick = (ability) => {

        if (parseInt(ability.combatant_id) === this.state.activeCombatant.id) {
            
            if (this.state.activeCombatant.id === this.state.combatant1.id) {
                this.setState({
                    selectedAbilityDamage: ability.damage,
                    selectedAbilityImage: ability.image,
                    activeCombatant: {...this.state.activeCombatant},
                    combatant1: {...this.state.activeCombatant},
                    combatant2HP: this.state.combatant2HP - ability.damage,
                    activeCombatant: {...this.state.combatant2}
                })
                console.log('Combatant1 hp:', this.state.combatant1HP)
                console.log('Combatant2 hp:', this.state.combatant2HP)
                
            } else if (this.state.activeCombatant.id === this.state.combatant2.id) {
                this.setState({
                    selectedAbilityDamage: ability.damage,
                    selectedAbilityImage: ability.image,
                    activeCombatant: {...this.state.activeCombatant},
                    combatant2: {...this.state.activeCombatant},
                    combatant1HP: this.state.combatant1HP - ability.damage,
                    activeCombatant: {...this.state.combatant1}
                })

                console.log('Combatant1 hp:', this.state.combatant1HP)
                console.log('Combatant2 hp:', this.state.combatant2HP)
            }
        }
        else {
            alert("It is currently not your turn!")
        }
 }

 componentDidMount(){
     const combatants = [this.props.combatant1, this.props.combatant2]
     let activeCombatant = this.selectStart()
     let passiveCombatant = {}

    combatants.forEach(function(combatant) {
        if (combatant !== activeCombatant) {
            passiveCombatant = combatant
        }
    })


     this.setState({
         activeCombatant: activeCombatant,
         passiveCombatant: passiveCombatant
     })
 }

 selectStart = () => {
    let array = [this.props.combatant2, this.props.combatant1]
     return array[Math.floor(Math.random() * array.length)];
 }

 determineWinner = () => {
     let winner;

     if (this.state.combatant1HP > 0) {
         winner = this.state.combatant1.name;
     } else {
         winner = this.state.combatant2.name;
     }
     return winner
 }

 render() {
     console.log(this.state)
    let arenaStage;

    function refreshPage() {
        window.location.reload(false);
      }

     if (this.state.combatant1HP > 0 && this.state.combatant2HP > 0) {
        arenaStage = <div className={styles.wrapper}>
   
               <div className={styles.combatant1}>
                   <Combatant1 handleClick={this.handleClick} combatant1HP={this.state.combatant1HP} combatant1={this.props.combatant1} />
               </div>
   
               <div className={styles.arena}>
                   <Arena image={this.state.selectedAbilityImage} abilityDamage={this.state.selectedAbilityDamage} activeCombatant={this.state.activeCombatant} />
               </div>
   
               <div className={styles.combatant2}>
                   <Combatant2 handleClick={this.handleClick} Combatant2HP={this.state.combatant2HP} combatant2={this.props.combatant2} />
               </div>
   
            </div>
    } else {
        arenaStage = <div className={styles.finalDisplay}>
            <h1>{this.determineWinner()} Won!</h1>
            <button onClick={refreshPage}>Play Again!</button>
        </div>
    }

     return (
        <div>
            {arenaStage}
        </div>
     )
 }
}

export default CombatContainer