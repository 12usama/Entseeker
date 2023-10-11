import { useEffect, useState } from "react";
import Card from "../card/Card";

const Cards = () => {
    const [cards, setCards] =useState([])
    
    useEffect(() =>{
        fetch('file.json')
        .then(res => res.json())
        .then(data => setCards(data));
    },[])

    return (
        <div className="max-w-6xl mx-auto mt-16">
            <h1 className="text-center text-4xl font-medium mb-8">Our <span className="font-bold text-blue-500">Services</span> You Gonna be <span className="font-bold text-violet-500">Enjoy!!!</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center ml-12 lg:ml-0">
                {
                    cards.map(card => <Card key={cards.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;