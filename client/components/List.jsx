import React from 'react';
import ListEntry from './ListEntry.jsx'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return( 

                <ul>
                    {this.props.todos.map( (todo, index) => {
                        return <ListEntry key={index} todo={todo} index={index} deleteItem={this.props.deleteItem}/>
                    }) }
                </ul>

        );
    }
}

export default List;