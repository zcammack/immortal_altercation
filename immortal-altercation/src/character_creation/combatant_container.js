import React from "react";
import AltercationSelect from "./redux"
import '../styling.css'

class CombatantForm extends React.Component {

    render() {
        console.log(this.props.combatants)
        return (
            
            <div>
                <h2 align="center">Or choose one!</h2>
                
                <div className="grid-container" align="center"> 

                    {this.props.combatants.map ((combatant) => {
                    return <AltercationSelect state={this.props.state} handleChange={this.props.handleChange} combatant={combatant} key={combatant.id} selectCombatant={this.props.selectCombatant} handleDelete={this.props.handleDelete} handlePatch={this.props.handlePatch}/>
                    })}
                    
                </div> 
            </div>
        )
    }

}

export default CombatantForm