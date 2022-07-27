import React from 'react';
import Products from "../../components/products/Products";


class InputPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            input: ""
        }
    }

    changeInput = (e) => {
        this.setState({...this.state,input:e. target. value})
    }

    addProduct = (e) => {
        this.setState({input: ""})
        this.setState({products: [...this.state.products, this.state.input]});
        console.log(this.state)
    }




    getProducts = () => {
        this.setState({products:["apple", "orange", "potato"]})
    }

    onDelete = () => {
        this.setState({products:[]})
    }


    render() {
        return (
            <div>
                <input type="text"onChange={this.changeInput} value={this.state.input}/>
                <button onClick={this.getProducts}>get product</button>
                <button onClick={this.onDelete}>delete</button>
                <button onClick={this.addProduct}>add products</button>
                <Products product={this.state.products}/>
            </div>
        )
    }
}


export default InputPage;