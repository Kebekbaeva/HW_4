import React from 'react';


function Products(props) {
    console.log(props)
    return (
        <div>
            <ul>
                {props.product.map((product,key)=> <li key={key}>{product}</li>)}
            </ul>
        </div>
    );
}

export default Products;