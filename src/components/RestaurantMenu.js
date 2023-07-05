import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { swiggy_menu_api_URL } from '../constants';
import { IMG_CDN_URL } from '../constants';
import Shimmer from './Shimmer';

export default function RestaurantMenu() {
  const { resid } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(swiggy_menu_api_URL + resid);
      const json = await data.json();
      setRestaurant(json.data);
      console.log(json.data);
    } catch (error) {
      console.log('Error fetching restaurant information:', error);
    }
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <h1>Restaurant id: {resid}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="" />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.costForTwo}</h3>
        <h3>{restaurant?.avgRating}</h3>
      </div>
      <div>
        <ul>
          {Object.values(restaurant.menu.items).map((item) => (
              <li key={item?.id}>{item?.name}</li>
            ))}
        </ul>
      </div>
    </>
  );
}


