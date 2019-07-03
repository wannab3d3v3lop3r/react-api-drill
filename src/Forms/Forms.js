import React, { Component } from 'react'
import Filter from '../Filter/Filter'
import SearchInput from '../SearchInput/SearchInput'

export class Forms extends Component {
    render() {
        return (
            <div>
                <SearchInput />
                <Filter />
            </div>
        )
    }
}

export default Forms
