import React from 'react'
import Title from '../../pageElements/Title'
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
            fields["title"] = ""
            fields["length"] = ""
            fields["author"] = ""
            fields["genre"] = ""
            this.setState({fields:fields})
            alert("Form submitted")
        }
    }

    validateForm() {
        let fields = this.state.fields
        let errors = {}
        let formIsValid = true

        if (!fields["title"]) {
            formIsValid = false
            errors["title"] = "*Please enter a song title."
        }

        if (typeof fields["title"] !== "undefined") {
            if (!fields["title"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false
                errors["title"] = "*Please enter alphabet characters only."
            }
        }

        if (!fields["length"]) {
            formIsValid = false
            errors["length"] = "*Please enter the songs length."
        }

        if (typeof fields["length"] !== "undefined") {
            if (!fields["length"].match(/^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]*$/)) {
                formIsValid = false
                errors["length"] = "*Please enter a valid time."
            }
        }


        if (!fields["author"]) {
            formIsValid = false
            errors["author"] = "*Please enter the author name."
        }

        if (typeof fields["author"] !== "undefined") {
            if (!fields["author"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false
                errors["author"] = "*Please enter alphabet characters only."
            }
        }

        if (!fields["genre"]) {
            formIsValid = false
            errors["genre"] = "*Please enter the songs genre."
        }

        if (typeof fields["genre"] !== "undefined") {
            if (!fields["genre"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false
                errors["genre"] = "*Please enter alphabet characters only."
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
                    <Title name="Upload Music" title="Here" />
                    <form className="uploadSong" method="post" name="uploadMusicForm" onSubmit= {this.submitUploadMusicForm}>

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
                            <input type="text" name="title" placeholder="Song title.." value={this.state.fields.title} onChange={this.handleChange} />   
                            <div className='errorMessage'>{this.state.errors.title}</div>
                            <br />
                            <br />
                            <br />
                            <input type="text" name="length" placeholder="00:00:00.." value={this.state.fields.length} onChange={this.handleChange} /> 
                            <div className='errorMessage'>{this.state.errors.length}</div> 
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
                            <input type="text" name="author" placeholder="Author name.." value={this.state.fields.author} onChange={this.handleChange} /> 
                            <div className='errorMessage'>{this.state.errors.author}</div> 
                            <br />
                            <br />
                            <br />
                            <input type="text" name="genre" placeholder="Songs genre.." value={this.state.fields.genre} onChange={this.handleChange} />   
                            <div className='errorMessage'>{this.state.errors.genre}</div>
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