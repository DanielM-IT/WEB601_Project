import React from 'react'
import AudioPlayer from "react-h5-audio-player"
import './PromotionsCard.css'


export default class Promotion extends React.Component {

    render() {
        return(
            // Maps each song from the song array to a specific record. This then takes the SongId as its key.
            // Following this each value from the selected record is placed into a header to be displayed.
            <div className="promotionGrid">
                {this.props.songs.map((Promotion) => (
               <div className="promotionSong" key={Promotion.SongId}>
                    <div className="titleContainer">
                        <h2>{Promotion.Title}</h2> 
                    </div> 
                    <AudioPlayer
                            src={Promotion.AudioFile}
                            onPlay={e => console.log("onPlay")}
                        />
                    <div className='promotionSongDetails'>
                    <strong><pre>Author:   {Promotion.Author}
                        <br/>
                        Genre:   {Promotion.Genre}</pre></strong>
                    </div>
                    <audio /> 
               </div> 
            ))}
            </div>
        )
    }
}
