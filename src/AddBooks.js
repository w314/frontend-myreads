import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ShowBook from './ShowBook'

// component handles the search
// owns the state for the query string
// and the books returned by the search
// uses ShowBook component to display the books
class AddBooks extends React.Component {

	static propTypes = {
		booksOnShelf: PropTypes.array.isRequired,
		onShelfChange: PropTypes.func.isRequired
	}

	state = {
		query : '',
		books : []
	}

	filterBooks = (query) => {
		this.setState({query})
		BooksAPI.search(query)
		.then((books) => {
			// if search comes back with a set of books
			// update state
			if (books && !books.hasOwnProperty('error')) {
				this.setState({books})
			// if search comes back with empty query error
			// due to query string being an invalid filter term
			// or comes back as undefined 
			// due to an empty query string
			// set state.books = []
			} else {
				this.setState({books: []})
			}	
		})
	}



	render () {
		return (
			<div className="search-books">
			  <div className="search-books-bar">
			    <Link
			    	to="/"
			    	className="close-search"
			    >Close</Link>
			    <div className="search-books-input-wrapper">
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
		    				key={book.id}
		    				booksOnShelf={this.props.booksOnShelf}
			    			book={book}
			    			onShelfChange={this.props.onShelfChange}
			    		/>
			    	)}								    
			    </ol>
			  </div>
			</div>
		)
	}
}

export default AddBooks

