import React, { Component } from 'react';

class Paginate extends Component {

    render() {
        const { items, loading } = this.props
        if (loading) {
            return(<h2>...Loading</h2>)
        }
        return (
            <>
                {items.map(item => (
                    // console.log(item),
                    <div key={item.id} className={`flexbox-item flexbox-item-${item.id}`}>
                        <div className="item-image"><img src={item.image} /></div>

                        <div className='h5'><h5>{item.title}</h5></div>
                        {/* https://stackoverflow.com/questions/1726630/formatting-a-number-with-exactly-two-decimals-in-javascript */}
                        <div>${item.price.toFixed(2)}</div>
                    </div>
                ))}
            </>
        )
    }
}

export default Paginate;