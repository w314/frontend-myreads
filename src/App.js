import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import AddBooks from './AddBooks'

// BookApp component owns the state of collection of book on the shelves
// uses ListBook component to display the main page with the bookshelves
// uses AddBook component to display the search page
class BooksApp extends React.Component {
  
  state = {
    booksOnShelf : []
  }

  // fetch current books on the shelf from the server
  // update component state
  getBooksOnShelf = () => {
    BooksAPI.getAll()
    .then((booksOnShelf) => {
      this.setState({booksOnShelf})
    })  
  }

  // update a book's shelf on the server
  // update books on the shelf
  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(this.getBooksOnShelf)
  }
  
  // get original bookset on the shelves 
  // after component mounted
  componentDidMount() {
    this.getBooksOnShelf()
  }

  render() {
    return (
      <div className="app">
        {/* search page */}
        <Route path="/search" render={() => (
          <AddBooks
            booksOnShelf={this.state.booksOnShelf}
            onShelfChange={this.changeBookShelf}
          />
        )}/>
        {/* front page */}
        <Route exact path="/" render={() => (
          <ListBooks
            booksOnShelf={this.state.booksOnShelf}
            onShelfChange={this.changeBookShelf}
          />          
        )}/>
      </div>
    )
  }
}

export default BooksApp
