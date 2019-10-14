import React from 'react'
import PageTitle from '../../pageElements/PageTitle'
import { BtnContainer } from '../../pageElements/Buttons';
import './UploadMusic.css'


export default class UploadMusic extends React.Component {

    constructor() {
        super()
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this)
        this.submitUploadMusicForm = this.submitUploadMusicForm.bind(this)
    }

    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({
            fields
        })
    }

    submitUploadMusicForm(e) {
        e.preventDefault()
        if (this.validateForm()) {
            let fields = {}
            fields["Title"] = ""
            fields["Length"] = ""
            fields["Author"] = ""
            fields["Genre"] = ""
            this.setState({fields:fields})
            fetch('http://localhost:4200/api/songs', {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    "Title": this.Title.value,
                    "Length": this.Length.value,
                    "Author": this.Author.value,
                    "Genre": this.Genre.value,
                })
            })
            console.log("Song has been added")
            alert("Form submitted")
        }
    }

    validateForm() {
        let fields = this.state.fields
        let errors = {}
        let formIsValid = true

        if (!fields["Title"]) {
            formIsValid = false
            errors["Title"] = "*Please enter a song title."
        }

        if (typeof fields["Title"] !== "undefined") {
            if (!fields["Title"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false
                errors["Title"] = "*Please enter alphabet characters only."
            }
        }

        if (!fields["Length"]) {
            formIsValid = false
            errors["Length"] = "*Please enter the songs length."
        }

        if (typeof fields["Length"] !== "undefined") {
            if (!fields["Length"].match(/^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]*$/)) {
                formIsValid = false
                errors["Length"] = "*Please enter a valid time."
            }
        }


        if (!fields["Author"]) {
            formIsValid = false
            errors["Author"] = "*Please enter the author name."
        }

        if (typeof fields["Author"] !== "undefined") {
            if (!fields["Author"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false
                errors["Author"] = "*Please enter alphabet characters only."
            }
        }

        if (!fields["Genre"]) {
            formIsValid = false
            errors["Genre"] = "*Please enter the songs genre."
        }

        if (typeof fields["Genre"] !== "undefined") {
            if (!fields["Genre"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false
                errors["Genre"] = "*Please enter alphabet characters only."
            }
        }

        this.setState({
            errors: errors
        })
        return formIsValid
    }


    render() {
        return(
            <div className="uploadMusicWrapper">
                <div className="uploadMusicBackground"> 
                    <PageTitle name="Upload Music" title="Here" />
                    <form className="uploadSong" name="uploadMusicForm" onSubmit= {this.submitUploadMusicForm}>

                        <div className="leftUploadColumn">
                            <label>Title</label> 
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <label>Length</label>
                        </div>

                        <div className="leftCenterColumn">
                            <input type="text" name="Title" id="Title" ref={(ref) => {this.Title = ref}} placeholder="Song title.." value={this.state.fields.Title} onChange={this.handleChange} />   
                            <div className='errorMessage'>{this.state.errors.Title}</div>
                            <br />
                            <br />
                            <br />
                            <input type="text" name="Length" id="Length" ref={(ref) => {this.Length = ref}} placeholder="00:00:00.." value={this.state.fields.Length} onChange={this.handleChange} /> 
                            <div className='errorMessage'>{this.state.errors.Length}</div> 
                        </div>

                        <div className="rightCenterColumn">
                            <label>Author</label> 
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <label>Genre</label>
                        </div>

                        <div className="rightUploadColumn">
                            <input type="text" name="Author" id="Author" ref={(ref) => {this.Author = ref}} placeholder="Author name.." value={this.state.fields.Author} onChange={this.handleChange} /> 
                            <div className='errorMessage'>{this.state.errors.Author}</div> 
                            <br />
                            <br />
                            <br />
                            <input type="text" name="Genre" id="Genre" ref={(ref) => {this.Genre = ref}} placeholder="Songs genre.." value={this.state.fields.Genre} onChange={this.handleChange} />   
                            <div className='errorMessage'>{this.state.errors.Genre}</div>
                        </div>
                        <br />
                        <br />
                        <br />

                        <div className="uploadButtons">
                            <BtnContainer>
                                Browse PC
                            </BtnContainer>
                            <BtnContainer>
                                Upload Music                            
                            </BtnContainer>
                        </div>
                    </form>
                </div>
            </div> 
        ) 
    }
}