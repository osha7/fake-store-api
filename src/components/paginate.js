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
                <ul className="pagination">
                    {currentPage > 1 ? <li className="page-item"><a onClick={() => prevPage()} className="page-link" href="#">Prev</a></li> : null}  
                    {pageNumbers.map(num => (
                    <li className="page-item" key={num}>
                        <a onClick={() => paginate(num)} className="page-link" href="#">{num}</a>
                        </li>
                    ))}
                    <li className="page-item">
                        <a onClick={() => nextPage()} className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Paginate;