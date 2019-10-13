import React from 'react'
import './MySongs.css'


export default class MySongs extends React.Component {

    render() {
        return(
            <div className="songGrid">
            {this.props.songs.map((Song) => (
               <div className="song" key={Song.ID}>
                    <h2>{Song.Title}</h2>  

                    <div className='details'>
                        <pre><h3>{Song.Author}    •   {Song.Genre}</h3></pre>
                    </div>
                    <div className='songLength'>
                        <pre><h3>{Song.Length}</h3></pre>
                    </div>
                    <button className="editButton" /*onClick={}*/>
                        Edit Song
                    </button>
                    <button className="deleteButton" /*onClick={}*/>
                        Delete Song
                    </button>
               </div>
            ))}
            </div>
        )
    }
}
