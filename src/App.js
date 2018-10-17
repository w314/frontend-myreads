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

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    console.log('after getting books')
    console.log(this.state.books)
    return (
      <div className="app">
        <Route path="/addBooks" component={AddBooks} />
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
          />          
        )}/>
      </div>
    )
  }
}

export default BooksApp
