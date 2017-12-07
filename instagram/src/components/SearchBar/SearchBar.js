import React, { Component } from 'react';

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerm:props.searchTerm,
            active:undefined,
            links:[]
        }
    }
    doSearch(event) {
        event.preventDefault();
    }
    getSearchResults(event) {
        console.log(event);
    }
    render() {
        return(
            <nav className="SearchBar">
                <div className="SearchBar__BrandImage--light" >
                    <img src="//placehold.it/64X64/pink/red" alt="Brand or Logo File"/>
                </div>
                <div className="SearchBar__Title">
                    <h3>Hello World</h3>
                </div>
                <div className="SearchBar__Form--mini">
                    <form method="post" onSubmit={this.doSearch}>
                        <input type="text" name="searchTerm" value={this.state.searchTerm} />
                        <button onClick={this.getSearchResults}>Search</button>
                    </form>
                </div>
            </nav>
        );
    }
};