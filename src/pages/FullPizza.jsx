import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const FullPizza = () => {
  const [pizza, setPizza] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://6696c8b10312447373c3b593.mockapi.io/items/${id}`,
        );
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получении пиццы!');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return 'Загрузка...';
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₴</h4>
    </div>
  );
};

export default FullPizza;
