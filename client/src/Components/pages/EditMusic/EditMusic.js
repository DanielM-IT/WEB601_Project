import React from 'react'
import PageTitle from '../../pageElements/PageTitle'
import EditSongCard from '../../data/EditSongCard'


export default class EditMusic extends React.Component {
    
    constructor(props) {
        super(props)
            this.state = ({
                isFetching: false,
                songs: []
            })
    }

    componentDidMount() {
        this.getSongs()
    }

    getSongs() {
        fetch('http://localhost:4200/api/songs')
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
            <div className="myMusicWrapper">
                <div className='contentColumn'>
                    <PageTitle name="Edit" title="Music" />
                    <EditSongCard songs={this.state.songs}/>              
                </div>
            </div>
        )
    }
}
