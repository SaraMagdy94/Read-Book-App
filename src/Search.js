import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends React.Component {
    state = {
        query: '',
        books: []
    }
      updateQuery = (query) => {
        this.setState({ query: query.trim() })
        if(query)
       {
          BooksAPI.search(query, 30).then((books) =>
          {
              if(books.length > 0)
              {
                  this.setState({ books: books })
              }
              else
              {
                  this.setState({ books: [] })
              }
          })

          // if query is empty => reset state to default
      }
      else
      {
          this.setState({books: [] })
          this.setState({ query: '' })
      }
      }
      
      render() {
        const { query,books } = this.state;
        const { changeShelf } = this.props
      
        return (
            <div className="search-books">

                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close search</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={ query }
                            onChange={ (event) => this.updateQuery(event.target.value) }
                            />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                      {
                        books.map((book) => (
                            <li key={ book.id }>
                                <Book
                                    id={ book.id }
                                    shelf={ book.shelf }
                                    authors={ book.authors }
                                    title={ book.title }
                                    imageLinks={ book.imageLinks }
                                    changeShelf={ changeShelf }
                                />
                            </li>
                        ))
                      }
                    </ol>
                </div>
            </div>
        )
    }
}


export default Search;