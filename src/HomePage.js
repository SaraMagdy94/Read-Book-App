import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class HomePage extends Component {

    render() {
       const { changeShelf,books } = this.props;

        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MY Reads </h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf
                  name="Currently Reading"
                  title='Currently Reading'
                  books={books.filter(book => book.shelf === 'currentlyReading')}
                  changeShelf={changeShelf}
                />
              
                <Shelf
                 title='Want to Read' 
                 name='Want to Read'
                  books={books.filter(book => book.shelf === 'wantToRead')}
                  changeShelf={changeShelf}
                />

                <Shelf
                   title='Read' 
                   name='Read'         
                    books={books.filter(book => book.shelf === 'read')}
                    changeShelf={changeShelf}
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
