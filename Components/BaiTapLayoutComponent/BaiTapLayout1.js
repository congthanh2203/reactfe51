import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Slider'
import ProductList from './ProductList'
import Footer from './Footer'

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div className="">
                <Header />
                <Carousel />
                <ProductList />
                <Footer />
            </div>
        )
    }
}
