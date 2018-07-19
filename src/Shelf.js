import React from 'react';
import Book from './Book';

class Shelf extends React.Component {

    sendShelfChange(book,shelf){
        this.props.sendShelfChange(book, shelf)
    }
    
    render(){
        const { books } = this.props
        if (this.props.books.length === 0) {
            return null;
        }
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title }</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
               {
                  books.length > 0 &&
                   books.map((item) => (
						<li key={item.id}>
							<Book
                                book={item}
                                authors={ item.authors }
                                title={ item.title }
                                imageLinks={ item.imageLinks }
                                sendShelfChange={(book, shelf) => { this.sendShelfChange(book, shelf)}}
                              
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
