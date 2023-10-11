

const Card = ({ card }) => {
    const { name, image, price, description, details_img, button } = card;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="w-[75%] lg:w-full h-[300px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{button}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;