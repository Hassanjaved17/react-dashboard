import React from 'react';
import { useParams } from 'react-router-dom';



const productsList = [
    {
        id: "1",
        name: "Product 1",
        description: "This is description",
        imgSrc: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

    {
        id: "2",
        name: "Product 2",
        description: "This is description",
        imgSrc: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }


]



const ProductDetail = () => {
    const { id } = useParams();

    const product = productsList.find(product => product.id === id);

    return (
        <div className="product-details container mt-5">
            <div className="row">
                <div className="col-lg-4">
                    <div className="shadow-sm card">
                        <img
                            src={product.imgSrc}
                            alt={product.name}
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text text-[#818181]">
                                {product.description}
                            </p>
                            <p className="font-bold"></p>
                                Back to Products
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
