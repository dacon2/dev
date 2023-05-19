import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'

const ProductCard = ({ products = [] }) => {
  return (
    <section className="text-gray-600 body-font" style={{backgroundColor:"rgba(0,0,0,0.6)"}}>
      <div className="container px-5 py-24 mx-auto" >
        <div className="flex flex-wrap -m-4 ">
          {
            products.map((product) => {
              console.log(product, 'product')
              const { id, title, price, category, image } = product;
              return (
                <Link to={`/products/${id}`} className="lg:w-[23%] md:w-1/2 p-4 w-full mb-4 cursor-pointer rounded-fill shadow ml-4 onHover"  style={{backgroundColor:"rgba(0,0,0,0.1)"}}>
                  <a href className="block relative h-48 rounded overflow-hidden">
                    <img alt={title} className=" object-contain object-center w-full h-full block rounded-fill" src={image} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
                    <h2 className="text-gray-100 title-font text-lg font-medium">{title}</h2>
                    <p className="mt-1 text-md font-bold text-white">${price}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default ProductCard