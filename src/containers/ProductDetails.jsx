import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';

const ProductDetails = () => {
    const product = useSelector((state)=> state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(productId)

    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
            console.log(err);
        })

        dispatch(selectedProduct(response.data))
    };

    useEffect(() => {
        if(productId && productId !== ""){
            fetchProductDetails();
        }
    }, [productId])

    return(
        <div className="ui grid container">
            <div className="ui placeholder segment">
                <div className=""></div>
            </div>
        </div>
    );
}

export default ProductDetails;