import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
    const { id, name, image, price, description, details_img, button } = card;
    const navigate = useNavigate()
    return (
        <div className="card card-compact w-96 bg-pink-100 shadow-xl p-2">
            <figure><img className="w-[75%] lg:w-full h-[300px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-center">
                    <button onClick={()=>{navigate(`details/${id}`)}} className="btn btn-primary">{button}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;