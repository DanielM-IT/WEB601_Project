import React from 'react'
import './SongCard.css'


export default class MySongs extends React.Component {

    constructor() {
        super()
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this)
        // this.updateSong = this.updateSong.bind(this)
    }

    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({
            fields
        })
    }


    // updateSong(SongId) {
    //     let fields = {}
    //     fields["Title"] = ''
    //     fields["Length"] = ''
    //     fields["Author"] = ''
    //     fields["Genre"] = ''
    //     this.setState({fields:fields})

    //     fetch('http://localhost:4200/api/songs/' + SongId, {
    //         method: 'patch',
    //         headers: {'Content-Type':'application/json'},
    //         body: JSON.stringify({
    //             "Title": this.Title.value,
    //             "Length": this.Length.value,
    //             "Author": this.Author.value,
    //             "Genre": this.Genre.value,

    //         })
    //     })
    // }

    
    render() {
        return(
            <div className="songGrid">
            {this.props.songs.map((Song) => (
               <div className="song" key={Song.SongId}>
                    <h2>Title:</h2> <input type="text" name="Title" id="Title" placeholder={Song.Title} value={this.state.fields.Title} onChange={this.handleChange} />  
                    <br/> 
                    <h2>Author:</h2> <input type="text" name="Author" id="Author" placeholder={Song.Author} value={this.state.fields.Author} onChange={this.handleChange} />  
                    <br/> 
                    <h2>Genre:</h2> <input type="text" name="Genre" id="Genre" placeholder={Song.Genre} value={this.state.fields.Genre} onChange={this.handleChange} />   
                    <br/> 
                    <h2>Length:</h2> <input type="text" name="Length" id="Length" placeholder={Song.Length} value={this.state.fields.Length} onChange={this.handleChange} />   

                    <button className="editButton" /*onClick={this.updateSong.bind(this,Song.SongId)}*/>
                        Edit Song
                    </button>
               </div> 
            ))}
            </div>
        )
    }
}
