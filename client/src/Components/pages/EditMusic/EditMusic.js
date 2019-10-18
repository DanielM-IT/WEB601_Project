import React from 'react'
import PageTitle from '../../pageElements/PageTitle'
import EditSongCard from '../../data/EditSongCard'
import './EditMusic.css'


export default class EditMusic extends React.Component {
    
    constructor(props) {
        super(props)
            this.state = ({
                isFetching: false,
                songs: []
            })
    }

    componentDidMount() {
        this.getSong()
    }

    getSong() {
        fetch('http://localhost:4200/api/songs/1')
		.then(res => res.json())
		.then(data => {
			if(data.code === '404') { 
				this.setState({
					isFetching: false,
				})
			} else {
                this.setState({
                isFetching: true,
                songs: data, 
            })
            }
		})
		.catch(error => {
		   console.log(error)
        })	
    }


    render() {
        return(
            <div className="editContainer">
                <PageTitle name="Edit" title="Song" />
                <div className='editContent'>
                    <EditSongCard songs={this.state.songs}/>              
                </div>
            </div>
        )
    }
}
