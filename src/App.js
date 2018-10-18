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

  componentDidMount() {
    BooksAPI.getAll().then((booksOnShelf) => {
      this.setState({booksOnShelf})
    })
  }

  render() {
    console.log('after getting books')
    console.log(this.state.booksOnShelf)
    return (
      <div className="app">
        <Route path="/addBooks" render={() => (
          <AddBooks
            booksOnShelf={this.state.booksOnShelf}
          />
        )}/>
        <Route exact path="/" render={() => (
          <ListBooks
            booksOnShelf={this.state.booksOnShelf}
          />          
        )}/>
      </div>
    )
  }
}

export default BooksApp
