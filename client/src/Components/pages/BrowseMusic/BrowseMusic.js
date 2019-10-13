import React from 'react'
import Title from '../../pageElements/Title'
import './BrowseMusic.css'
import Song from '../../data/BrowseSongs'


export default class BrowseMusic extends React.Component {
    
    constructor(props) {
        super(props)
            this.state = ({
                isFetching: false,
                songs: []
            })
    }

    componentDidMount() {
        this.getSongs()
        //this.timer = setInterval(() => this.GetUserBooks(), 10000);
        //setTimeout(function() {console.log(this.state.books)}, 8000)
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
            <div className="container">
                <div className="categoryColumn">
                    <h3>Categories</h3>
                    <ul>
                        <li>Category 1</li>
                        <li>Category 2</li>
                        <li>Category 3</li>
                        <li>Category 4</li>
                        <li>Category 5</li>
                        <li>Category 6</li>
                        <li>Category 7</li>
                        <li>Category 8</li>
                        <li>Category 9</li>
                    </ul>
                </div>
                <div className='contentColumn'>
                    <Title name="Browse" title="Music" />
                    <Song songs={this.state.songs}/>              
                </div>
            </div>
        )
    }
}