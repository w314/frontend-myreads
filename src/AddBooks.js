import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ShowBook from './ShowBook'

class AddBooks extends React.Component {

	state = {
		query : '',
		books : []
	}


	filterBooks = (query) => {
		this.setState({query})
		BooksAPI.search(query)
		.then((books) => this.setState({books}))
	}


	render () {
		console.log(this.state)
		console.log(this.props)
		return (
			<div className="search-books">
			  <div className="search-books-bar">
			    <Link
			    	to="/"
			    	className="close-search"
			    >Close</Link>
			    <div className="search-books-input-wrapper">
			      {/*
			        NOTES: The search from BooksAPI is limited to a particular set of search terms.
			        You can find these search terms here:
			        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

			        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
			        you don't find a specific author or title. Every search is limited by search terms.
			      */}
			      <input 
			      	type="text"
			      	value={this.state.query} 
			      	placeholder="Search by title or author"
			      	onChange={(event) => this.filterBooks(event.target.value)}
			      />
			    </div>
			  </div>

			  <div className="search-books-results">
			    <ol className="books-grid">
		    		{this.state.books.map((book) => 
		    			<ShowBook 
		    				booksOnShelf={this.props.booksOnShelf}
			    			book={book} 
			    		/>
			    	)}
									    
			    </ol>
			  </div>
			</div>
		)
	}
}

export default AddBooks

