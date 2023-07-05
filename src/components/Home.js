import React, { useState, useEffect } from 'react';
import RestaurantCards from './RestaurantCards';
import Shimmer from './Shimmer';
import { swiggy_api_URL } from '../constants';
import useOnline from './useOnline';
import { Link } from 'react-router-dom';

const Home = () => {
  // State variables
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRestaurant();
  }, []);

  // Fetch restaurant data from API
  async function getRestaurant() {
    try {
      const data = await fetch(swiggy_api_URL);
      const json = await data.json();
      console.log(json);
      setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  // Event handler for search input
  function updateSearch(e) {
    setSearchText(e.target.value);
  }

  // Function to filter restaurant based on search text
  function filterRestaurant(searchText, restaurantData) {
    const filteredData = restaurantData.filter((restaurant) => {
      return restaurant.data.name.toLowerCase().includes(searchText.toLowerCase());
    });
    return filteredData;
  }

  const isOnline = useOnline();
  if(!isOnline){
    return <h1>Oh Snap ! Seems You lost your Internet Connections</h1>
  }


  // Event handler for search button click
  function handleSearch() {
    const filteredData = filterRestaurant(searchText, allRestaurant);
    setFilteredRestaurant(filteredData);
  }

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <>
      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search Your Favourite Restaurants"
          value={searchText}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button" onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      {/* Render restaurant cards or "No Restaurants Found" */}
      {filteredRestaurant.length === 0 ? (
        <h1>No Restaurants Found</h1>
      ) : (
        <div className="restaurant_list">
          {filteredRestaurant.map((restaurant) => {
            return (
            // <RestaurantCards key={restaurant.data.id} {...restaurant.data} />
            // -------------------------------------------------------------------
            <Link
            to={`/restaurant/${restaurant.data.id}`}
            key={restaurant.data.id}
          >
            <RestaurantCards {...restaurant.data} />
          </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
