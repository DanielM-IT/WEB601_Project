import React from 'react'
import PageTitle from '../../pageElements/PageTitle'
import { BtnContainer } from '../../pageElements/Buttons';
import './UploadMusic.css'


export default class UploadMusic extends React.Component {
    // Created constructor method which sets the initial state of the input fields and the errors property.
    constructor() {
        super()
        this.state = {
            fields: {Title: '', Length: '', Author: '', Genre: ''},
            errors: {}
        }
        // Binds the below functions and their parameters to an object that can be used in the field 
        // properties inside the render() function.
        this.handleChange = this.handleChange.bind(this)
        this.submitUploadMusicForm = this.submitUploadMusicForm.bind(this)
    }

    // Method to update the properties state upon any change made by the user to a UI property.
    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({
            fields
        })
    }

    // Method in which if validation passes will create a variable with empty fields. These will then 
    // have their state instructed to change to the current state of the constructors fields.
    submitUploadMusicForm(e) {
        e.preventDefault()
        if (this.validateForm()) {
            let fields = {}
            fields["Title"] = ""
            fields["Length"] = ""
            fields["Author"] = ""
            fields["Genre"] = ""
            this.setState({fields:fields})
            // The request type and controller is then fetched through the following url. The request method is specified
            // along with the content type specified as being converted to json format before being posted into 
            // the database table.
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
            // Finishes with a message which lets the user know that the posting of data was successful.
            alert("Form submitted")
        }
    }

    // This method contains validations for each field to ensure no field is left blank and also to ensure the
    // correct type of data is inserted into each field.
    validateForm() {
        let fields = this.state.fields
        let errors = {}
        let formIsValid = true

        if (!fields["Title"]) {
            formIsValid = false
            errors["Title"] = "*Please enter a song title."
        }

        if (typeof fields["Title"] !== "undefined") {
            if (!fields["Title"].match(/^[a-z A-Z 0-9]*$/)) {
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

    // Here the page is rendered with the needed methods. To the <form> is added an onSubmit={} attribute and called the 
    // method containing the fetching here. In each of the input fields is created three properties. The first is a reference to the 
    // corresponding field, the second a value property which takes the current state of the corresponding field and the third an onChange={} 
    // method which calls the handleChange() method. The change handle will allow the state of each field to be update after every change made 
    // by the user in an input field.
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
                            <label>Length</label>
                        </div>

                        <div className="leftCenterColumn">
                            <input type="text" name="Title" id="Title" ref={(ref) => {this.Title = ref}} placeholder="Song title.." value={this.state.fields.Title} onChange={this.handleChange} />   
                            <div className='errorMessage'>{this.state.errors.Title}</div>
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
                            <label>Genre</label>
                        </div>

                        <div className="rightUploadColumn">
                            <input type="text" name="Author" id="Author" ref={(ref) => {this.Author = ref}} placeholder="Author name.." value={this.state.fields.Author} onChange={this.handleChange} /> 
                            <div className='errorMessage'>{this.state.errors.Author}</div> 
                            <br />
                            <br />
                            <input type="text" name="Genre" id="Genre" ref={(ref) => {this.Genre = ref}} placeholder="Songs genre.." value={this.state.fields.Genre} onChange={this.handleChange} />   
                            <div className='errorMessage'>{this.state.errors.Genre}</div>
                        </div>
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