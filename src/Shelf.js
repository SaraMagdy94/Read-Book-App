import React from 'react';
import Book from './Book';

class Shelf extends React.Component {
    render(){
        const { books,changeShelf } = this.props
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{ this.props.name }</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
               {
                   books.map((book) => (
						<li key={book.id}>
							<Book
                                book={book}
                                authors={ book.authors }
                                title={ book.title }
                                imageLinks={ book.imageLinks }
                                shelf={ book.shelf }
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
export default Shelf;