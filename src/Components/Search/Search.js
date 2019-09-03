import React from 'react';
import './Search.css';

const Search = (props) => {
    return (
        <div className = "container">
            <div className = "row">
                <section className = "col s4 offst-s4">
                    <form onSubmit = {props.handleSubmit}>
                        <div className = "input-field">
                            <input placeholder = "Search..." type = "text" onChange = {props.handleChange}/>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Search;