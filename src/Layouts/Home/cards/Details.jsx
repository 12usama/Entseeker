import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
    const {id}= useParams()
    const [detail,setDetail] =useState([]);
    useEffect(()=>{
        fetch('file.json')
        .then(res => res.json())
        .then(data => setCards(data));
    },[])
    const { id, name, image, price, description, details_img, button } = data;
    return (
        <div>
            
        </div>
    );
};

export default Details;