import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ShowBook from './ShowBook'

{/*									.map((book) => <p>{book.title}</p>) */}
function ListBooks (props) {
	
	const bookshelves = [
		{	id: 'wantToRead',	name: 'Want To Read' },
		{	id: 'currentlyReading',	name: 'Currently Reading'	},
		{	id: 'read', name: 'Read' }
	]

	const { booksOnShelf } = props

	return (
		<div className="list-books">
			
			{/* Page title */}
		  <div className="list-books-title">
		    <h1>MyReads</h1>
		  </div>
		  
		  {/* Bookshelves */}
			<div className='list-books-content'>
				{bookshelves.map((bookshelf) => 
					<div key={bookshelf.id} className={bookshelf.name}>
						<h2 className='bookshelf-title'>{bookshelf.name}</h2>
						<div className="bookshelf-books">
							<ol className="books-grid">
							{console.log(booksOnShelf)}
								{booksOnShelf
									.filter((book) =>( book.shelf === bookshelf.id))
									.map((book) => <ShowBook key={book.id} booksOnShelf={booksOnShelf} book={book} />)
								}
							</ol>	
						</div>
					</div>
				)}
			</div>

			{/* Search Button */}
			<div className="open-search">
			  <Link
			  	to='/addBooks'
			  >Add a book</Link>
			</div>

		</div>
	)
}

ListBooks.propTypes = {
	booksOnShelf: PropTypes.array.isRequired
}

export default ListBooks