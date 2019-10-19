import React from 'react'
import {Link} from 'react-router-dom'
import './EditSongCard.css'


export default class MySongs extends React.Component {
    // Constructor to construct the initial state of the component on load.
    constructor() {
        super()
        this.state = {
            fields: {Title: '', Length: '', Author: '', Genre: ''},
            errors: {}
        }
        // Binds the below functions and their parameters to an object that can be used in the field 
        // properties inside the render() function.
        this.handleChange = this.handleChange.bind(this)
        this.editSong = this.editSong.bind(this)
    }

    // Method to update the properties state upon any change made by the user to a UI property.
    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({
            fields
        })
    }

    // The request type and controller is fetched through the following url along with a parameter to pass through a SongId to edit a single record.
    // The request method is specified along with the content type specified as being converted to json format before updated the record in the database table.
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
        // Finishes with a message which lets the user know that the posting of data was successful.
        alert("Song has been updated.")
    }


    // Here the page is rendered with the needed methods. In each of the input fields is created three properties. The first is a reference to the 
    // corresponding field, the second a value property which takes the current state of the corresponding field and the third an onChange={} 
    // method which calls the handleChange() method. The change handle will allow the state of each field to be update after every change made 
    // by the user in an input field.
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
