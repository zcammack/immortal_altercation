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

                <div className={styles.AbilityTwo}>

                    <label>Ability Two</label>

                    <div>
                        <input onChange={(event) => this.props.handleAbilityChange("AbilityTwo", "name", event.target.value)} value={this.props.state.AbilityTwo.name} placeholder="Ability Two Name"type="text" name="AbilityTwoName" />
                        <input onChange={(event) => this.props.handleAbilityChange("AbilityTwo", "image", event.target.value)} value={this.props.state.AbilityTwo.image} placeholder="Ability Two Image"type="text" name="AbilityTwoImage" />
                    </div>
                    
                    <div>
                        <label>Damage Points </label>
                        <button id={this.props.state.AbilityTwo} onClick={(event) => this.props.handleDamageClick('+','AbilityTwo','damage', event)}>+</button>

                        <span id="AbilityTwoDamageSpan" value={this.props.state.AbilityTwo.damage}>{this.props.state.AbilityTwo.damage}</span>

                        <button id={this.props.state.AbilityTwo} onClick={(event) => this.props.handleDamageClick('-', 'AbilityTwo', 'damage', event)}>-</button>
                    </div>

                </div>

                <div className={styles.AbilityThree}>

                    <label>Ability Three</label>
                    
                    <div>
                        <input onChange={(event) => this.props.handleAbilityChange("AbilityThree", "name", event.target.value)} value={this.props.state.AbilityThree.name} placeholder="Ability Three Name"type="text" name="AbilityThreeName" />
                        <input onChange={(event) => this.props.handleAbilityChange("AbilityThree", "image", event.target.value)} value={this.props.state.AbilityThree.image} placeholder="Ability Three Image"type="text" name="AbilityThreeImage" />
                    </div>
                    
                    <div>
                        <label>Damage Points </label>
                        <button id={this.props.state.AbilityThree.damage} onClick={(event) => this.props.handleDamageClick('+','AbilityThree','damage', event)}>+</button>
                        <span id="AbilityThreeDamageSpan" value={this.props.state.AbilityThree.damage}>{this.props.state.AbilityThree.damage}</span>
                        <button id={this.props.state.AbilityThree.damage} onClick={(event) => this.props.handleDamageClick('-', 'AbilityThree', 'damage', event)}>-</button>
                    </div>

                </div>

               

                <div className={styles.AbilityFour}>

                    <label>Ability Four</label>
                   
                    <div>
                        <input onChange={(event) => this.props.handleAbilityChange("AbilityFour", "name", event.target.value)} value={this.props.state.AbilityFour.name} placeholder="Ability Four Name"type="text" name="AbilityFourName" />
                        <input onChange={(event) => this.props.handleAbilityChange("AbilityFour", "image", event.target.value)} value={this.props.state.AbilityFour.image} placeholder="Ability Four Image"type="text" name="AbilityFourImage" />
                    </div>
                   
                    <div>
                        <label>Damage Points</label>
                        <button id={this.props.state.AbilityFour.damage} onClick={(event) => this.props.handleDamageClick('+', 'AbilityFour', 'damage', event)}>+</button>
                        <span id="AbilityFourDamageSpan" value={this.props.state.AbilityFour.damage}>{this.props.state.AbilityFour.damage}</span>
                        <button id={this.props.state.AbilityFour.damage} onClick={(event) => this.props.handleDamageClick('-', 'AbilityFour', 'damage', event)}>-</button>
                    </div>

                </div>
                <input type="submit" value="Submit" className={styles.submit}/>
            </form>
            </React.Fragment>
        )
    }

}

export default CombatantForm