import React from 'react';
import Paginate from './components/paginate'
import Items1 from './components/items1'

class Items extends React.Component {

    state = {
        items: [],
        loading: false,
        currentPage: 1,
        itemsPerPage: 5,
    }
    
    componentDidMount = () => {
        this.setState({ loading: true })
        let shopURL = "https://fakestoreapi.com/products"
        fetch(shopURL)
        .then(resp => resp.json())
        .then(json => {
            // console.log(json)
            // json.forEach
            this.setState({
                items: json
            })
        })
        this.setState({ loading: false })
        // console.log("cdm", this.state)
    }

    handleOnClick = () => {
        // console.log("here")
        // debugger
        setTimeout(() => {  setNewState(); }, 750);
        let setNewState = () => {
            this.setState({
                items: this.state.items.filter(item => item.category.includes("women"))
            })
        }
        // console.log(this.state.items)
    }

    render() {
        const {items, currentPage, itemsPerPage, loading} = this.state
        const indexOfLastPost = currentPage * itemsPerPage
        const indexOfFirstPost = indexOfLastPost - itemsPerPage
        const currentItems = items.slice(indexOfFirstPost, indexOfLastPost)
        const paginate = pageNum => this.setState({ currentPage: pageNum })
        const nextPage = () => this.setState({ currentPage: currentPage + 1 })
        const prevPage = () => this.setState({ currentPage: currentPage - 1 })

        if (this.state.items) {
            return(
                <>
                    <h1>Items</h1>
                    <a className="filter" onClick={this.handleOnClick}>Womens Collection</a>
    
                    <div className='flexbox-container'>
                       <Items1 items={currentItems} loading={loading} />
                    </div>
                    <div className="page-button-container">
                        <h1>React Pagination</h1>
                        <Paginate itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} currentPage={currentPage} />
                    </div>
                </>
            )
        }else{
            return( "Unable to Load Items At This Time")
        }
    }
}

export default Items;