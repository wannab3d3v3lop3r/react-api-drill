import React, { Component } from 'react'
import './SearchInput.css'

export class SearchInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
    }

    handleSubmit(e){
        e.preventDefault();

        const url = 'https://www.googleapis.com/auth/books';
        const bookSearch = (({input}) => ({input}))(this.state);
        console.log(`input is `,bookSearch);
        const options = {
          method: 'POST',
          body: JSON.stringify(bookSearch),
          header: {
            'Authorizaton': `Bearer ${process.env.API_KEY}`,
            'Content-Type': `application/json`,
            'Access-Control-Allow-Origin': '*'
          },
        }

        fetch(url, options)
        .then(res => {
            console.log(res);
            res.json()
        })
        .then(data => {
            console.log(data)
          this.setState({
            books: data
            })
        })
        .catch(err => {
          this.setState({
            err: err.message
          })
        })
    }

    render() {
        return (
            <div className='search-container'>
                <span>Search:</span>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input 
                        name="search" 
                        id="search" type="text" 
                        placeholder="search for books" 
                        value={this.state.input} 
                        onChange={e => this.setState({input: e.target.value})}/>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchInput
