import React, { PropTypes, Component } from 'react'
import { fetchMovie } from '../actions/index.js'

class MovieList extends Component {
	constructor(props) {
		super(props);
		this.onSearch = this.onSearch.bind(this);
	}

	onSearch(event) {
		// ...
		this.props.fetchMovie(event.target.value);
	}

	componentDidMount() {
		// ...
		//fetchMovie();
	}

	render() {
		let movies;
		if(this.props.movies) {
			movies = this.props.movies.map((movie) => {
				return <li key={movie.imdbID}>{movie.Title}</li>
			});
		} else {
			movies = [];
		}
		 

		return (
			<div>
				<input type="text" onChange={this.onSearch}/>
				<h1> Movie List </h1>
				{this.props.requestPending && 				
					<h3> Request Pending </h3>
			 	}

				{!this.props.requestPending && 
					<div>			
						<ul>
							{movies}
						</ul>
					</div>
			 	}
			</div>
		)
	}
}

// MovieList.propTypes = {
// 	onSearchChange: PropTypes.func.isRequired,
// 	movies: PropTypes.array.isRequired,
// 	onDidMount: PropTypes.func
// };

export default MovieList;