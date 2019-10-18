import React from 'react'
import {Link} from 'react-router-dom'
import './EditSongCard.css'


export default class MySongs extends React.Component {

    constructor() {
        super()
        this.state = {
            fields: {Title: '', Length: '', Author: '', Genre: ''},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this)
        this.editSong = this.editSong.bind(this)
    }

    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({
            fields
        })
    }

    editSong(SongId) {
        fetch('http://localhost:4200/api/songs/' + SongId, {
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "Title": this.Title.value,
                "Length": this.Length.value,
                "Author": this.Author.value,
                "Genre": this.Genre.value,
            })
        })
        console.log("Song has been edited.")
        alert("Song has been updated.")
    }


    render() {
        return(
            <div className="songGrid">
            {this.props.songs.map((Song) => (
               <div className="song" key={Song.SongId}>
                    <h2>{Song.Title}</h2>  
                    <input type="text" name="Title" id="Title" ref={(ref) => {this.Title = ref}} value={this.state.fields.Title} onChange={this.handleChange} />   
                    <h2>{Song.Length}</h2>
                    <input type="text" name="Length" id="Length" ref={(ref) => {this.Length = ref}} value={this.state.fields.Length} onChange={this.handleChange} /> 
                    <h2>{Song.Author}</h2>
                    <input type="text" name="Author" id="Author" ref={(ref) => {this.Author = ref}} value={this.state.fields.Author} onChange={this.handleChange} /> 
                    <h2>{Song.Genre}</h2>
                    <input type="text" name="Genre" id="Genre" ref={(ref) => {this.Genre = ref}} value={this.state.fields.Genre} onChange={this.handleChange} />   
                    <br/>
                    <input type="submit" className="editBtn" value="Edit Song" onClick={this.editSong.bind(this,Song.SongId)}/> 
                    <Link to="/MyMusic">
                        <input type="button" className="cancelBtn" value="Cancel" />
                    </Link>
               </div> 
            ))}
            </div>
        )
    }
}
