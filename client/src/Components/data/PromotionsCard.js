import React from 'react'
import Slider from 'react-rangeslider'
import './PromotionsCard.css'


export default class Promotion extends React.Component {

    constructor (props, context) {
        super(props, context)
        this.state = {
          value: 10
        }
      }

      handleChangeStart = () => {
        console.log('Change event started')
      }
    
      handleChange = value => {
        this.setState({
          value: value
        })
      }
    
      handleChangeComplete = () => {
        console.log('Change event completed')
      }


    render() {
        const { value } = this.state
        return(
            <div className="promotionGrid">
                {this.props.songs.map((Promotion) => (
               <div className="song" key={Promotion.SongId}>
                    <h2>{Promotion.Title}</h2>  

                    <div className='details'>
                        <pre><img src='../../icons/musical-notes-symbols.png' alt="musicIcon" className="songIcon"/>  
                        <div>
                            <Slider 
                                className="sliderBox"
                                min={0}
                                max={100}
                                value={value}
                                onChangeStart={this.handleChangeStart}
                                onChange={this.handleChange}
                                onChangeComplete={this.handleChangeComplete}
                            />
                        </div>
                        <h3>{Promotion.Author}    •   {Promotion.Genre}</h3></pre>
                    </div>
                    <div className='songLength'>
                        <pre><h3>{Promotion.Length}</h3></pre>
                    </div>
               </div>
            ))}
            </div>
        )
    }
}
