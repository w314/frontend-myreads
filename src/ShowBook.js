import React from 'react'
import PropTypes from 'prop-types'


function ShowBook (props) {

	const { booksOnShelf, book } = props

	console.log(booksOnShelf)

	return (

		<li key={book.id}>
		  <div className="book">
		    <div className="book-top">
			}
{/*
TODO: 
			show which shelf book is on
*/}
		      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
		      <div className="book-shelf-changer">
		        <select defaultValue={booksOnShelf.includes(book) ? book.shelf : 'none'}>
		          <option value="move" disabled>Move to...</option>
		          <option value="currentlyReading">Currently Reading</option>
		          <option value="wantToRead">Want to Read</option>
		          <option value="read">Read</option>
		          <option value="none">None</option>
		        </select>

		      </div>
		    </div>
		    <div className="book-title">{book.title}</div>
		    <div className="book-authors">
		    	{book.authors.map((author) => 
		    		<p key={`${book.id}_${author}`}>{author}</p> 
		  		)}
		  	</div>
		  </div>
		</li>

	)
}

ShowBook.propTypes = {
	book : PropTypes.object.isRequired,
	booksOnShelf : PropTypes.array.isRequired
}

export default ShowBook