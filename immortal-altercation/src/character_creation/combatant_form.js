import React from 'react';
import styles from './form.module.css'

class CombatantForm extends React.Component {
 
    render() {
        
        return (
            <React.Fragment>
            <h1 style={{textAlign: 'center', paddingTop: '2%'}}>Create your character!</h1>
            
            <form value={this.props.state} className={styles.container} onSubmit={(event) => this.props.handleSubmit(event)} >

                <div id="combatant" className={styles.base}>

                    <label>Character Name: </label>

                    <input onChange={this.props.handleChange} value={this.props.state.combatantName} name="combatantName" placeholder="Character Name" type="text" ></input>


                    <label>Character Image URL: </label>

                    <input onChange={this.props.handleChange} value={this.props.state.combatantImage} name="combatantImage" placeholder="Character Image URL" type="text"></input>

                </div>
                
                <div className={styles.base}>
                <p>Damage Points Remaining: {this.props.state.damagePoints}</p>
                </div>

                <div className={styles.abilityOne}>

                    <label>Ability One</label>
                    
                    <div>
                        <input onChange={(event) => this.props.handleAbilityChange("abilityOne", "name", event.target.value)} value={this.props.state.abilityOne.name} name="abilityOneName" placeholder="Ability One Name" type="text" />
                        <input onChange={(event) => this.props.handleAbilityChange("abilityOne", "image", event.target.value )} value={this.props.state.abilityOne.image} name="abilityOneImage" placeholder="Ability One Image" type="text" />
                    </div>

                    <div>
                        <label>Damage Points</label>

                        <button id={this.props.state.abilityOne} onClick={(event) => this.props.handleDamageClick("+", "abilityOne", "damage", event)}>+</button>

                        <span id='abilityOneDamageSpan' value={this.props.state.abilityOne.damage}>{this.props.state.abilityOne.damage}</span>

                        <button id={this.props.state.abilityOne.damage} onClick={(event) => this.props.handleDamageClick("-", "abilityOne", "damage", event)}>-</button>
                    </div>

                </div>

                <div className={styles.abilityTwo}>

                    <label>Ability Two</label>

                    <div>
                        <input onChange={(event) => this.props.handleAbilityChange("abilityTwo", "name", event.target.value)} value={this.props.state.abilityTwo.name} name="abilityTwoName" placeholder="Ability Two Name" type="text" />
                        <input onChange={(event) => this.props.handleAbilityChange("abilityTwo", "image", event.target.value)} value={this.props.state.abilityTwo.image} name="abilityTwoImage" placeholder="Ability Two Image"type="text" />
                    </div>
                    
                    <div>
                        <label>Damage Points </label>
                        <button id={this.props.state.abilityTwo} onClick={(event) => this.props.handleDamageClick('+','abilityTwo','damage', event)}>+</button>

                        <span id="abilityTwoDamageSpan" value={this.props.state.abilityTwo.damage}>{this.props.state.abilityTwo.damage}</span>

                        <button id={this.props.state.abilityTwo} onClick={(event) => this.props.handleDamageClick('-', 'abilityTwo', 'damage', event)}>-</button>
                    </div>

                </div>

                <div className={styles.abilityThree}>

                    <label>Ability Three</label>
                    
                    <div>
                        <input onChange={(event) => this.props.handleAbilityChange("abilityThree", "name", event.target.value)} value={this.props.state.abilityThree.name} name="abilityThreeName" placeholder="Ability Three Name"type="text" />
                        <input onChange={(event) => this.props.handleAbilityChange("abilityThree", "image", event.target.value)} value={this.props.state.abilityThree.image} name="abilityThreeName" placeholder="Ability Three Image"type="text" />
                    </div>
                    
                    <div>
                        <label>Damage Points </label>
                        <button id={this.props.state.abilityThree.damage} onClick={(event) => this.props.handleDamageClick('+','abilityThree','damage', event)}>+</button>
                        <span id="abilityThreeDamageSpan" value={this.props.state.abilityThree.damage}>{this.props.state.abilityThree.damage}</span>
                        <button id={this.props.state.abilityThree.damage} onClick={(event) => this.props.handleDamageClick('-', 'abilityThree', 'damage', event)}>-</button>
                    </div>

                </div>

               

                <div className={styles.abilityFour}>

                    <label>Ability Four</label>
                   
                    <div>
                        <input onChange={(event) => this.props.handleAbilityChange("abilityFour", "name", event.target.value)} value={this.props.state.abilityFour.name} name="abilityFourName" placeholder="Ability Four Name"type="text" />
                        <input onChange={(event) => this.props.handleAbilityChange("abilityFour", "image", event.target.value)} value={this.props.state.abilityFour.image} name="abilityFourName" placeholder="Ability Four Image"type="text" />
                    </div>
                   
                    <div>
                        <label>Damage Points</label>
                        <button id={this.props.state.abilityFour.damage} onClick={(event) => this.props.handleDamageClick('+', 'abilityFour', 'damage', event)}>+</button>
                        <span id="abilityFourDamageSpan" value={this.props.state.abilityFour.damage}>{this.props.state.abilityFour.damage}</span>
                        <button id={this.props.state.abilityFour.damage} onClick={(event) => this.props.handleDamageClick('-', 'abilityFour', 'damage', event)}>-</button>
                    </div>

                </div>
                <input type="submit" value="Submit" className={styles.submit}/>
            </form>
            </React.Fragment>
        )
    }

}

export default CombatantForm