import React from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import AddBooks from './AddBooks'

class BooksApp extends React.Component {
  state = {
    bookshelves : [
      {
        'id': 0, 
        'name': 'Currently Reading',
        'books': [
          {
            'title': 'To Kill a Mockingbird',
            'author': 'Harper Lee',
            'img': 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
          },
          {
            'title': 'Ender\'s Game',
            'author': 'Orson Scott Card',
            'img': 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'
          }
        ]
      },
      {
        'id': 1, 
        'name': 'Want to Read',
        'books': [
        ]
      },
      {
        'id': 2,
        'name': 'Read',
        'books': [
        ]
      }
    ],

    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
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
