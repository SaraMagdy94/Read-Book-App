import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class HomePage extends Component {
  
  state =
    {
      books: []
    }
  hanelShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(item => item.id !== book.id).concat([book])
        }))
      })
  }
    render() {
       const { books } = this.props;

        return(
            <div className="list-books">
            <div className="list-books-title">
              <img src="./2.png" alt="logo" height="120px"/>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf
                  name="Currently Reading"
                  title='Currently Reading'
                  books={books.filter(item => item.shelf === 'currentlyReading')}
                  sendShelfChange={(book,shelf) => {this.hanelShelfChange(book,shelf)}}
                />
              
                <Shelf
                 title='Want to Read' 
                 name='Want to Read'
                  books={books.filter(item => item.shelf === 'wantToRead')}
                  sendShelfChange={(book, shelf) => { this.hanelShelfChange(book, shelf) }}
                />

                <Shelf
                   title='Read' 
                   name='Read'         
                  books={books.filter(item => item.shelf === 'read')}
                  sendShelfChange={(book, shelf) => { this.hanelShelfChange(book, shelf) }}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search"> Add a book </Link>
            </div>
          </div>
        );
    }
}

export default HomePage
