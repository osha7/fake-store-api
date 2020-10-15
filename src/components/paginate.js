import React, { PureComponent } from 'react';

class Paginate extends PureComponent {

    render() {
        const { itemsPerPage, totalItems, paginate, nextPage, prevPage, currentPage} = this.props
        const pageNumbers = []
        for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
            pageNumbers.push(i)
        }
        console.log(currentPage)
        return(
            
            <nav>
                <div className="pagination">
                    {currentPage > 1 ? <button onClick={() => prevPage()} className="page-link" href="#">Prev</button> : null}  
                    {pageNumbers.map(num => (
                    <button key={num} onClick={() => paginate(num)} className="page-link" href="#">{num}</button>
                    ))}
                    <button onClick={() => nextPage()} className="page-link" href="#">Next</button>
                </div>
            </nav>
        )
    }
}

export default Paginate;