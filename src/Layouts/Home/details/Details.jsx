import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {


    const { id } = useParams()

    const [detail, setDetail] = useState([]);
    const [findData, setFindData] = useState([]);

    const loaderdata = useLoaderData()



    useEffect(() => {

        const details = loaderdata?.find((item, idx) => item.id == id)
        setFindData(details)
    }, [loaderdata])


    const { name, image, price, description, details_img, button } = findData || {};
  

    return (
        <div className="hero min-h-screen bg-red-200 my-10 rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <img src={details_img} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{description}</p>
            <button className="btn btn-success">{price}</button>
          </div>
        </div>
      </div>
    );
};

export default Details;