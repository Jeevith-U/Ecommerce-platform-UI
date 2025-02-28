import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductViewModel from "./ProductViewModel";

const ProductCard = ({
              productId,
              productName,
              image,
              description,
              quantity,
              price,
              discount,
              specialPrice
}) => {

    const[openProductViewModel, setOpenProductViewModel] = useState(false) ;
    const btnLoader = false ;
    const[selectedViewProduct, setSelectedViewProduct] = useState("") ;
    const isAvailable = quantity && Number(quantity) > 0 ;

    const handelProductView = (product) =>{
        setOpenProductViewModel(true) ;
        setSelectedViewProduct(product) ;
    }

    return(
            <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
                <div onClick={() => {
                    handelProductView({
                        productId,
                        productName,
                        image,
                        description,
                        quantity,
                        price,
                        discount,
                        specialPrice
                    });
                }} className="w-full overflow-hidden aspect-[3/2]">
                    <img src={image} alt={productName} className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105" />
                </div>

                <div className="p-4">
                    <h2 onClick={() => {
                        handelProductView({
                            productId,
                            productName,
                            image,
                            description,
                            quantity,
                            price,
                            discount,
                            specialPrice
                        });
                    }}
                        className="text-lg font-semibold mb-2 cursor-pointer">
                        {productName}
                    </h2>
                </div>

                <div className="min-h-20 max-h-20 ml-1">
                    <p className="text-gray-600 text-s">{description}</p>
                </div>
                <div className="flex items-center justify-between">
                    {specialPrice?(
                        <div className="flex flex-col">
                            <span className="text-gray-400 line-through">
                                ${Number(price).toFixed(2)}
                            </span>
                            <span className="text-xl font-bold text-slate-700">
                                ${Number(specialPrice).toFixed(2)}
                            </span>
                    </div>
                    ):(
                        <span className="text-xl font-bold text-slate-700">
                            {"  "}
                            ${Number(price).toFixed(2)}
                        </span>
                    )}

                    <button
                    disabled = {!isAvailable || btnLoader}
                    onClick={() => {}}
                    className={`flex justify-center bg-blue-500 ${isAvailable ? "opacity-100 hover:bg-blue-600" : "opacity-70"}
                    text-white py-2 px-3 rounded-lg items-center transition-colors duration-300 w-36`}>
                        <FaShoppingCart className="mr-2"/>
                        {isAvailable ? "Add to Cart" : "Stock out"}
                    </button>
                </div>
                <ProductViewModel 
                    open = {openProductViewModel}
                    setOpen = {setOpenProductViewModel}
                    product = {selectedViewProduct}
                    isAvailable = {isAvailable}
                />
                
            </div>          
        )
}
 
export default ProductCard ;