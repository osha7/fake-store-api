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

    // pagination = (items, page, itemsPerPage) => {
    //     let trimStart = (page - 1) * itemsPerPage
    //     let trimEnd = trimStart + itemsPerPage

    //     let trimmedData = items.slice(trimStart, trimEnd)

    //     let pages = Math.ceil(items.length / itemsPerPage)
    //     // this.setState({
    //         // pages: pages
    //     // })

    //     return{
    //         'items': trimmedData,
    //         'pages': pages
    //     }
    // }
    


    // pageButtons = (pages) => {
    //     console.log('pageButtons', pages)
    //     // debugger
    //     let wrapper = document.getElementById('pagination-wrapper')
    //     if (wrapper){
    //         wrapper.innerHTML = ''
    //         for (let page = 1; page <= pages; page ++) {
    //             // console.log(page)
    //             wrapper.innerHTML += `<button class="page" value=${page} onClick=pageChange(${page})>${page}</button>`
    //         }
    //     }
    // }

    // pageChange = (pageNumber) => {
    //     console.log('pageChange', pageNumber)

    // }

    render() {
        const {items, currentPage, itemsPerPage, loading} = this.state
        const indexOfLastPost = currentPage * itemsPerPage
        const indexOfFirstPost = indexOfLastPost - itemsPerPage
        const currentItems = items.slice(indexOfFirstPost, indexOfLastPost)
        const paginate = pageNum => this.setState({ currentPage: pageNum })
        const nextPage = () => this.setState({ currentPage: currentPage + 1 })
        const prevPage = () => this.setState({ currentPage: currentPage - 1 })

        // console.log(this.state.items)
        // let data = this.pagination(this.state.items, this.state.page, this.state.itemsPerPage)
        // const itemsArray = this.state.items
        // const itemsArray = data.items
        // console.log('Data:', data)

        if (this.state.items) {
            return(
                <>
                    <h1>Items</h1>
                    <a className="filter" onClick={this.handleOnClick}>Womens Collection</a>
                    {/* <div className='flexbox-container'>
                            {itemsArray.map(item => (
                                // console.log(item),
                                <div key={item.id} className={`flexbox-item flexbox-item-${item.id}`}>
                                    <div className="item-image"><img src={item.image} /></div>

                                    <div className='h5'><h5>{item.title}</h5></div>
                                    https://stackoverflow.com/questions/1726630/formatting-a-number-with-exactly-two-decimals-in-javascript
                                    <div>${item.price.toFixed(2)}</div>
                                </div>
                            ))}
                    </div> */}
                    <div className='flexbox-container'>
                       <Items1 items={currentItems} loading={loading} />
                    </div>
                    <div className="page-button-container">
                        {/* <div id="pagination-wrapper" onLoad={this.pageButtons(data.pages)}></div> */}
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