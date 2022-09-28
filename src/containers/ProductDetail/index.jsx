import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AppContext from '../../context/AppContext'

function ProductDetail(){
    const { products } = useContext(AppContext)
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()
    const findProduct = () => {
        const res = products.find( prod => prod.attributes.uid === id)
        setProduct(res.attributes)
    }
    const handleOnClick = () => {
        navigate(-1)
    }
    useEffect(() => {
        findProduct()
    },[])
    return(
        <>
            <button type="button" onClick={handleOnClick}>Volver</button>
            <h2>Detalle de Producto</h2>
            <p>{product.title}</p>
            <p>Valor : ${product.price}</p>
            <p>{product.description}</p>
        </>
        
    )
}
export default ProductDetail