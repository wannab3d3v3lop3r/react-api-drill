import React, { Component } from 'react'
import Booklists from './Booklists/Booklists'
import Forms from './Forms/Forms'
import './App.css'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: [],
      err: null
    }
  }

  renderBooks = data => {
    this.setState({books: data})
  }

  render() {
    return (
      <div>
        <div className='container'>
          <h1 className='google-title'>Google Book Search</h1>
        </div>
        <Forms />
        <Booklists />
      </div>
    )
  }
}

export default App
