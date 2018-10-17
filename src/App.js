import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import AddBooks from './AddBooks'

class BooksApp extends React.Component {
  state = {
    books : []
  }

  render() {
    return (
      <div className="app">
        <Route path="/addBooks" component={AddBooks} />
        <Route exact path="/" render={() => (
          <ListBooks
            bookshelves={this.state.bookshelves}
          />          
        )}/>
      </div>
    )
  }
}

export default BooksApp
