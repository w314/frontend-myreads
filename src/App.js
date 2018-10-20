import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import AddBooks from './AddBooks'

class BooksApp extends React.Component {
  
  state = {
    booksOnShelf : []
  }

  getBooksOnShelf = () => {
    BooksAPI.getAll()
    .then((booksOnShelf) => {
      this.setState({booksOnShelf})
    })  
  }

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((result) => console.log(result))
    .then(this.getBooksOnShelf)
    .then(console.log('bookshelf downloaded after change'))
    .then(console.log(this.state))
  }
  

  componentDidMount() {
    this.getBooksOnShelf()
  }

  render() {
    return (
      <div className="app">
        <Route path="/addBooks" render={() => (
          <AddBooks
            booksOnShelf={this.state.booksOnShelf}
            onShelfChange={this.changeBookShelf}
          />
        )}/>
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
