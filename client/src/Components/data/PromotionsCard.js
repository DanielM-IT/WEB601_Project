import React from 'react'
import './PromotionsCard.css'


export default class Promotion extends React.Component {

    render() {
        return(
            // Maps each song from the song array to a specific record. This then takes the SongId as its key.
            // Following this each value from the selected record is placed into a header to be displayed.
            <div className="promotionGrid">
                {this.props.songs.map((Promotion) => (
               <div className="song" key={Promotion.SongId}>
                    <h2>{Promotion.Title}</h2>  
                    <div className='promotionSongLength'>
                        <img src='../../icons/musical-notes-symbols.png' alt="musicIcon" className="songIcon"/>  
                        <input className="promotionSongSlider" type="range" />
                        <pre><p>{Promotion.Length}</p></pre>
                    </div>
                    <div className='promotionSongDetails'>
                        <pre><p><strong>{Promotion.Author}    •   {Promotion.Genre}</strong></p></pre>
                    </div>
               </div> 
            ))}
            </div>
        )
    }
}
