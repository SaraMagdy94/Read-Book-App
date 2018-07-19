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
      this.setState({ books: books });
    });
  }

  hanelShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      book.shelf=shelf;
      this.setState(state =>({
        books:state.books.filter(item=> item.id !== book.id).concat([book])
     }))
    })
  }
  
 
  render() {

    const { books } = this.state;
    if(books.length === 0){
      return null
    }

    return (
  
      <div className="app">
        <Route exact path='/' render={({history}) => (
          <HomePage
              books={ books }
             sendShelfChange={(book, shelf) => { this.hanelShelfChange(book, shelf) }}
            />
         )}
        />
          
        <Route path='/search' render={({history}) => (
          <Search
            sendShelfChange={(book, shelf) => { this.hanelShelfChange(book, shelf) }}
            shelfBooks={this.state.books}
           />
          )}
        />
      </div>
    );
 }
}

export default BooksApp
