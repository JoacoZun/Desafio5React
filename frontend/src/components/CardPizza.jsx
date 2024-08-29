import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const CardPizza = ({ name, price, ingredients, img, desc }) => {
  const [showDesc, setShowDesc] = useState(false);

  const handleToggleDesc = () => {
    setShowDesc(!showDesc);
  };

  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
        <hr />
        <strong>Ingredientes:</strong>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>
        {showDesc && (
          <>
            <hr />
            <div className="description">{desc}</div>
          </>
        )}
        <hr />
        <div className="card-price">Precio: ${price.toLocaleString()}</div>
        <Button variant="outline-dark" onClick={handleToggleDesc}>
          {showDesc ? "Ocultar 👀" : "Ver Más 👀"}
        </Button>
        <Button variant="secondary" className="ms-5">Añadir 🛒</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
