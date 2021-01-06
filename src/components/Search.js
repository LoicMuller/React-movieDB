import React from 'react'

export default function Search({ handleInput, search }) {
    return (
        <section className="searchbox-wrap">
            <div className="form-group p-4 text-center">
                <input onChange={handleInput} onKeyPress={search}
                className="searchbox form-control-lg w-75" 
                type="text" placeholder="Search for a movie, serie, anime..."/>
            </div>
          </section>
    )
}
