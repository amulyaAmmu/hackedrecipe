import React from "react";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import clock from "../assets/Icons/Icon feather-clock.png";
import heart from "../assets/Icons/Icon feather-heart.png";

const RecipeCard = ({ item, search }) => {

  return (
    <>
    <Link to={`/${item.id}`}>
    <div className="card">
      <div className="card-top">
        <img src={item.image} alt="" />
  <span className='category-label'>{item.id % 2 == 0 ? 'In Pizzas' : 'In Noodles'}</span>
      </div>
      <div className="card-bottom">
        <div className="card-bottom-container">
            <h3 className='card-head'>{item.name}</h3>
            <div className='disp'>
            <div className="card-left">
            <div className='time-img'>
              <img src={clock} alt="time"></img>
            </div>
            <span>20 mins</span>
          </div>
          <div className="card-right">
            <img src={heart}></img>
          </div>
          </div>
          <div className='card-para'>
  <p >{item.description}</p>
  </div>
        </div>
        
      </div>
    </div>
    </Link>
    </>
  );
};

export default RecipeCard;
