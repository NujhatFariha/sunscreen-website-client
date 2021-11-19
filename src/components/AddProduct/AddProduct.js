import React, { useState } from 'react';
import DashBoardNav from '../DashBoard/DashBoardNav/DashBoardNav';

const AddProduct = () => {
    const [ placeName, setPlaceName] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [description, setDescription] = useState('')

    const handleName = (e) => {
        setPlaceName(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleImageUrl = (e) => {
        setImageUrl(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    
    const AddProduct = () =>{
        const name = placeName
        const image = imageUrl

       const data = { name, price, image, description}

        fetch('https://obscure-reaches-95115.herokuapp.com/addproduct', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId) {
                    alert('Successfully Added')
                }
            })
    
    }

    return (
        <div>
            <DashBoardNav/>
            <h3 className="pt-5 mt-2" style={{color: 'rgb(0, 51, 102)'}}>Add a New Product here</h3>
            <div className='container mt-4 mb-5 pb-5 text-start' style={{maxWidth:'25%'}}>
                <h5 className='mt-3 '>Name:</h5>
                <input onChange={handleName} className='form-control' type="text" name="Name" id="" />

                <h5 className='mt-3'>Image URL:</h5>
                <input onChange={handleImageUrl} className='form-control' type="text" name="Image_URL" id="" />

                <h5 className='mt-3'>Price:</h5>
                <input onChange={handlePrice} className='form-control' type="text" name="text" id="" />

                <h5 className='mt-3'>Description:</h5>
                <input onChange={handleDescription} className='form-control' type="text" name="Description" id="" />

                <button className='btn btn-secondary mt-4 w-100' onClick={AddProduct}>Submit</button>
            </div>
        </div>
    );
};

export default AddProduct;