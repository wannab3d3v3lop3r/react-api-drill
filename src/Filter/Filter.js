import React, { Component } from 'react'
import './Filter.css'

export class Filter extends Component {
    render() {
        return (
            <div className='filter-container'>
                <form>
                    <label htmlFor="print-type">Print Type: </label>
                    <select id="print-type">
                        <option>All</option>
                    </select>
                    <label htmlFor="book-type">Book Type:</label>
                    <select id="book-type">
                        <option>No Filter</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Filter
