import React from "react";
import styled from 'styled-components'
import '../styling.css'


const CombatantBorder = styled('div')`
   
    text-align: center;
    margin-top: 10%;
    margin-right: 10%;
    margin-left: 10%;
    
    padding: 2%;
    align-items: center;
    justify-items: center;
    grid-column-gap: 1%;
    
    height: auto; padding-right: 2%;
    padding-left: 2%;
    padding-top: 2%;
    align-items: center;
    justify-items: center;
    
    border-radius: 15%;
    background: white;
    height: auto;
    color: black;
`

class AltercationSelect extends React.Component {

    state = {
        toggle: false
    }

    toggleState = () => {
        this.setState({
            toggle: !this.state.toggle
        })
       
    }

    renderEditForm(){
        console.log(this.props.combatant)
            return ( 
            <div>
                <h1>Edit Your Combatant</h1>
                <form onSubmit={(event) => this.props.handlePatch(this.props.combatant.id, event)}>
                        <input onChange={(event) => this.props.handleChange(event)} value={this.props.state.combatantName}  name="combatantName" type="text" placeholder={this.props.combatant.name}/>
                        <input type="submit" value="Submit" />
                </form>
            </div>
            )

        }

    render() {
        let returnDiv

        if (this.state.toggle) {
            returnDiv = this.renderEditForm()
            
        } else {
            returnDiv = null
        }
        return (

            <CombatantBorder>
                {this.props.combatant.name}

                <br></br>
                <br></br>


                <img src={this.props.combatant.img_url} alt={this.props.combatant.name} width={250} height={300} mode='fit'/>

                <br></br>
                
                
                <ul >{this.props.combatant.abilities[0].name}</ul>
                <ul>{this.props.combatant.abilities[1].name}</ul>
                <ul>{this.props.combatant.abilities[2].name}</ul>
                <ul>{this.props.combatant.abilities[3].name}</ul>

                <button id={this.props.combatant.id} size="small" color="primary" align="center" onClick={(event) => this.props.selectcombatant(event)}>
                Player 1 - Select
                </button>

                <button id={this.props.combatant.id} size="small" color="primary" align="center" onClick={(event) => this.props.selectcombatant(event)}>
                Player 2 - Select
                </button>

                <br></br>

                <button id={this.props.combatant.id} onClick={(event) => this.props.handleDelete(this.props.combatant.id)}>Delete Character</button>
                
                <div>{returnDiv}</div>
                
         </CombatantBorder>
        )
    }

}

export default AltercationSelect