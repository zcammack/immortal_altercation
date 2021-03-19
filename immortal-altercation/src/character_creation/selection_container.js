  
import React from "react";
import CombatantForm from "./combatant_form";
import CombatantContainer from "./combatant_container"
import '../styling.css'

class SelectionContainer extends React.Component {

    state = {
        damagePoints: 20,
        combatantName: "",
        combatantImage: "",
        health: 100,
        abilityOne: {
            name: "",
            image: "",
            damage: 0,
        },
        abilityTwo: {
            name: "",
            image: "",
            damage: 0,
        },
        abilityThree: {
            name: "",
            image: "",
            damage: 0,
        },
        abilityFour: {
            name: "",
            image: "",
            damage: 0,
        }
    }

    handleDamageClick = (inc, abilityKey, attribute, event) => {
        event.preventDefault()

        if (inc === '+' && this.state.damagePoints > 0) {
            this.setState({
                [abilityKey]: {
                    ...this.state[abilityKey],
                    [attribute]: this.state[abilityKey][attribute] + 1
                },
                damagePoints: this.state.damagePoints - 1
            })
        } else if (inc === '-' && this.state.damagePoints <= 20 && this.state[abilityKey][attribute] > 0) {
            this.setState({
                [abilityKey]: {
                    ...this.state[abilityKey],
                    [attribute]: this.state[abilityKey][attribute] - 1
                },
                damagePoints: this.state.damagePoints + 1
            })
        }
    }

    handleAbilityChange = (abilityKey, attribute, value) => {
        this.setState({
            [abilityKey]: {
                ...this.state[abilityKey],
                [attribute]: value
            }
        })
    }

    handleChange = (event) => {

        this.setState({
        [event.target.name]: event.target.value
        })
    }

   handlePatch = (id, event) => {
       event.preventDefault()
       console.log('here')
       fetch(`https://localhost:3000/combatants/${id}`, {
           method: "PATCH",
           headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
           }, 
           body: JSON.stringify({
            name: this.state.combatantName,
            image: this.state.combatantImage
           })
       })
        .then(rsp => rsp.json())
        .then(rsp => console.log(rsp))
   }




    handleSubmit = (event) => {
        
        console.log('form submitted')
        this.props.handlePost(this.postFetch())
    }

    postFetch = () => {
        fetch('http://localhost:3000/combatants', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(results => results.json())
        .then(data => {
            console.log(data)
            return data
        })
    }

    render() {
        console.log(this.state.combatantImage)
        return (
            <div className="selection-container">
                < CombatantForm handleAbilityChange={this.handleAbilityChange} handleChange={this.handleChange} handlePowerClick={this.handlePowerClick} handleDamageClick={this.handleDamageClick} handleSubmit={this.handleSubmit} state={this.state}/>
                <br></br>
                < CombatantContainer handlePatch={this.handlePatch} state={this.state} handleChange={this.handleChange} combatants={this.props.combatants} selectCombatant={this.props.selectCombatant} handleDelete={this.props.handleDelete}/>
            </div>
        )
    }


}

export default SelectionContainer