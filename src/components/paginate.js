import React, { PureComponent } from 'react';

class Paginate extends PureComponent {

    render() {
        const { itemsPerPage, totalItems, paginate, nextPage, prevPage, currentPage} = this.props
        const pageNumbers = []
        const pages = Math.ceil(totalItems / itemsPerPage)
        for (let i = 1; i <= pages; i++) {
            pageNumbers.push(i)
        }
        console.log(pages)
        return(
            
            <nav>
                <div className="pagination">
                    {currentPage > 1 ? <button onClick={() => prevPage()} className="page-link" href="#">Prev</button> : null}  
                    {pageNumbers.map(num => (
                    <button key={num} onClick={() => paginate(num)} className="page-link" href="#">{num}</button>
                    ))}
                    {/* {console.log(currentPage, pages)} */}
                    {currentPage !== pages ? <button onClick={() => nextPage()} className="page-link" href="#">Next</button> : null}
                </div>
            </nav>
        )
    }
}

export default Paginate;