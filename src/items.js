import React from 'react';

class Items extends React.Component {

    state = {
        items: []
    }
    
    componentDidMount = () => {
        let shopURL = "https://fakestoreapi.com/products"
        fetch(shopURL)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            // json.forEach
            this.setState({
                items: json
            })
        })
    }

    handleOnClick = () => {
        console.log("here")
        // debugger
        setTimeout(() => {  setNewState(); }, 750);
        let setNewState = () => {
            this.setState({
                items: this.state.items.filter(item => item.category.includes("women"))
            })
        }
        console.log(this.state.items)
    }

    render() {
        console.log(this.state.items)
        const itemsArray = this.state.items
        if (this.state.items) {
            return(
                <>
                    <h1>Items</h1>
                    <a className="filter" onClick={this.handleOnClick}>Womens Collection</a>
                    <div className='flexbox-container'>
                        
                            {itemsArray.map(item => (
                                // console.log(item),
                                <div key={item.id} className={`flexbox-item flexbox-item-${item.id}`}>
                                    <div className="item-image"><img src={item.image} /></div>

                                    <div className='h5'><h5>{item.title}</h5></div>
                                    {/* https://stackoverflow.com/questions/1726630/formatting-a-number-with-exactly-two-decimals-in-javascript */}
                                    <div>${item.price.toFixed(2)}</div>
                                </div>
                            ))}
                    </div>
                </>
            )
        }else{
            return( "Not Loaded")
        }
    }
}

export default Items;