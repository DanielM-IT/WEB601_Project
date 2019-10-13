import React from 'react'
import './UploadMusic.css'
import { BtnContainer } from '../../pageElements/Buttons';


export default class UploadMusic extends React.Component {
    render() {
        return(
            <div className="container">
                    <div className="uploadBackground">                    

                        <div className="uploadItem">
                            <h2>Upload music here</h2>
                            <BtnContainer>
                                Browse PC
                            </BtnContainer>
                            <BtnContainer>
                                UploadMusic
                            </BtnContainer>
                        </div>
                    </div>
            </div> 
        )
    }
}