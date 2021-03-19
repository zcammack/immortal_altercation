import React from 'react';
import CombatContainer from './combat_page/combat_container'
import SelectionContainer from './selection_page/selection_container'
import styling from 'styled-components'

const Background = styling.div`
  min-height:100%;
`
class App extends React.Component {

  state = {
    combatants: [],
    selectedCombatant1: null,
    selectedCombatant2: null,
    
  }

 combatantsSelected = () => {
    if(this.state.selectedCombatant1 && this.state.selectedCombatant2){
      
      return <CombatContainer combatantA={this.state.selectedCombatant1} combatantB={this.state.selectedCombatant2} />
    } else {
      return < SelectionContainer combatants={this.state.combatants} combatantA={this.state.selectedCombatant1} combatantB={this.state.selectedCombatant2} selectCombatant={this.selectCombatant} handleDelete={this.handleDelete} handlePost={this.handlePost}/>
    }
  }




  componentDidMount() {
      fetch('http://localhost:3000/combatants')
          .then(response => response.json())
          .then(data => this.setState({ combatants: data }));
  }

  selectCombatant = (event) => {
    
    let combatant = this.findCombatant(event.target.id)
    if (event.target.innerText === 'Player 1 - Select'){
      this.setState({
        selectedCombatant1: combatant 
      })
    } else if (event.target.innerText === 'Player 2 - Select'){
      this.setState({
        selectedCombatant2: combatant
      })
    }

    
  }

  findCombatant = (id) => {

    let selectedCombatant = this.state.combatants.filter((combatant) => {
      
      return combatant.id === parseInt(id)

    })
    return selectedCombatant[0]
  }

  handlePost = (data) => {
    this.setState({
      combatants: this.state.combatants
    })
  }

  handleDelete = (id) => {
    fetch(`http://localhost:3000/combatants/${id}`, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: 'id'})
    })
    .then(rsp => rsp.json())
    .then(res => this.setState({
        combatants: res
    }) )
}



  render() {
    console.log(this.state)
    return (
      <Background>


        <div>
        
        {this.combatantsSelected()}

        </div>

      </Background>
    );
  }
}
export default App;