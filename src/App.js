import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './HomePage';
import Search from './Search';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state =
   {
        books: []
   }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    const { books } = this.state;

    return (
  
      <div className="app">
        <Route exact path='/' render={() => (
          <HomePage
              books={ books }
              changeShelf={this.changeShelf}
            />
         )}
        />
          
        <Route path='/search' render={() => (
          <Search />
          )}
        />
      </div>
    );
 }
}

export default BooksApp
