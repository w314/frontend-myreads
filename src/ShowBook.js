import React from 'react'
import PropTypes from 'prop-types'

// component is used to display a book
function ShowBook (props) {

	const { booksOnShelf, book, onShelfChange } = props

	const bookOnShelf = booksOnShelf.filter((bookOnShelf) => bookOnShelf.id === book.id )

	return (

		<li key={book.id}>
		  <div className="book">
		    <div className="book-top">
		    	{/* check for imagesLinks before using them as sometimes they are missing */}
		      <div className="book-cover" style={
		      	(book.imageLinks) ?
		      		{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}
		      	: { width: 128, height: 193 }
		      	}>
		      </div>

		      <div className="book-shelf-changer">
		      	{/* if bookOnShelf is empty bookshelf should be none 
		      			otherwise booksOnShelf knows its shelf*/}
	       		<select 
	       			defaultValue={ bookOnShelf.length === 1 ? bookOnShelf[0].shelf : 'none'}
	       			onChange={(event) => onShelfChange({ id : book.id }, event.target.value)} 
	       		>
		          <option value="move" disabled>Move to...</option>
		          <option value="currentlyReading">Currently Reading</option>
		          <option value="wantToRead">Want to Read</option>
		          <option value="read">Read</option>
		          <option value="none">None</option>
		        </select>

		      </div>
		    </div>
		    <div className="book-title">{book.title}</div>
			  {/* check for authors before displaying as sometimes they are missing */}
		    {(book.authors) && (
			    <div className="book-authors">
			    	{book.authors.map((author) => 
			    		<p key={`${book.id}_${author}`}>{author}</p> 
			  		)}
			  	</div>
		  	)}
		  	
		  </div>
		</li>

	)
}

ShowBook.propTypes = {
	book : PropTypes.object.isRequired,
	booksOnShelf : PropTypes.array.isRequired,
	onShelfChange : PropTypes.func.isRequired
}

export default ShowBook