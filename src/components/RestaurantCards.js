import React from 'react'
import { IMG_CDN_URL } from '../constants'

export default function RestaurantCards({ name, cuisines, cloudinaryImageId, deliveryTime, veg, promoted, avgRating, costForTwoString }) {

    // const {name,cuisines,deliveryTime} = restaurant.data;

    return (
        <div className="card">
            <div className="img_container">
                <img src={IMG_CDN_URL + cloudinaryImageId} alt="img" />
                {promoted ? <span className="promoted_tag">Promoted</span> : null}
            </div>
            <span className="cost2_tag">{costForTwoString}</span>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{deliveryTime} min from your location <br /> <span>{avgRating}*</span></h4>
            <h4>
                {veg ? (
                    <div
                        style={{
                            backgroundColor: "green",
                            height: "20px",
                            width: "20px",
                            borderRadius: "20px",
                        }}
                    ></div>
                ) : (
                    <div
                        style={{
                            backgroundColor: "red",
                            height: "20px",
                            width: "20px",
                            borderRadius: "20px",
                        }}
                    ></div>
                )}
            </h4>
        </div>
    );

}
