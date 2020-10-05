import React from 'react';
import './App.css';
import ListItems from './ListsForm/ListItems';
import {library, Library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import FlipMove from 'react-flip-move'

library.add(faTrash)

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items:[],
       currentItem:{
         text:'',
         key:''
       }

    }
  }

  handleInput = e => {
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }

  addItem = (e) => {
    e.preventDefault()
    const newItem = this.state.currentItem
    console.log(newItem)
    if(newItem !== '') {
      const newItems = [...this.state.items,newItem]
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  } 

  deleteItems = key => {
    const filterItems = this.state.items.filter(
      item => item.key !== key)
      this.setState({
        items:filterItems
      })
  }

  setUpdate = (text,key) => {
    const items = this.state.items
    items.map(item => {
      if(item.key ===key){
        item.text = text;
      }
    })
    this.setState({
      items:items
    })
  }

  render() {
    return(
      <div className="App">
          <header>
            <h2>Todo App with React</h2>
              <form id="todo-form" onSubmit={this.addItem}>
                <input type="text" placeholder="Enter text..."
                  value={this.state.currentItem.text} onChange={this.handleInput}
                />
                <button>Add Item</button>
              </form>
          </header>
          <ListItems items={this.state.items} deleteItems={this.deleteItems} 
          setUpdate={this.setUpdate} />
      </div>
    )
  }
}

export default App;
