import React from 'react'
import PropTypes from 'prop-types'


function ShowBook (props) {

	const { booksOnShelf, book, onShelfChange } = props

	/* 
	 * To get the correct shelf I have too see if the book is on the bookshelf.
	 * If it is the booksOnShelf will give the shelf.
	 * If not shelf should be 'none'
	 * By filtering bookOnShelf by the Id of the book I can determine if it's on 
	 * the shelf. If the array is empty it is not. 
	*/
	const bookOnShelf = booksOnShelf.filter((bookOnShelf) => bookOnShelf.id === book.id )

	return (

		<li key={book.id}>
		  <div className="book">
		    <div className="book-top">
		      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
		      <div className="book-shelf-changer">
		      	{/* if bookOnShelf is empty bookshelf should be none 
		      			otherwise bookOnShelf knows its shelf*/}
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
	booksOnShelf : PropTypes.array.isRequired,
	onShelfChange : PropTypes.func.isRequired
}

export default ShowBook