import React from 'react';
import List from './List.jsx'
import AddListEntry from './AddListEntry.jsx'

// var App = () => {
//     return( 
//         <div id="mainApp" className="center vertical">
//             <div className="title">Hello Where would you like to travel??</div>
//             <List todo={['China','Europe', 'Icepole']} />
//         </div> 
//     );
// }


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ['China','Europe', 'Icepole']
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    addItem(item) {
        console.log('Adding item',item)
        var currentTodos = [...this.state.todos];
        currentTodos.push(item);
        this.setState({
            
        })
    }

    deleteItem(index) {
        console.log('Attemping to delete');
        var currentTodos = [...this.state.todos];
        currentTodos.splice (index, 1);
        this.setState({
            todos: currentTodos
        })
    }

    render () {
        return(
            <div id="mainApp" className="center vertical">
            <div className="title">Hello Where would you like to travel??</div>
            <AddListEntry addItem/>
            <List todos={this.state.todos} deleteItem={this.deleteItem}/>
        </div> 
        )
    }
}
export default App;