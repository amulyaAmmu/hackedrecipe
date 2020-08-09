import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import img from "../assets/Images/Img1.jpg";
import star from "../assets/Icons/Icon awesome-star.png";
import heart from "../assets/Icons/Icon feather-heart-color.png";


const RecipeDetails = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`http://starlord.hackerearth.com/recipe`);
      setItems(result.data);
    };
    fetchItems();
  }, []);


  return (
    <div className='recipe-details-container'>
      <section className='video'>
        <Link className='link' to='/'>- Go Back</Link>
        <div className='cover-image'>
        <img src={img}></img>
        </div>
        <h4>Ingredients</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>

        <h4>How to Prepare</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
      </section>
      <section className='video-details'>
        <span>RECIPE</span>
        <h1>Cheese Burst</h1>
        <div className='star-group'>
        <img src={star}></img>
        <img src={star}></img>
        <img src={star}></img>
        <img src={star}></img>
        </div>
        <span>DESCRIPTION</span>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
        <div className='circles'>
          <span>6</span>
          <span>220</span>
          <span>25</span>
        </div>
        <div className='fav-recipe'>
          <p>Favorite this recipe</p>
          <div>
          <img src={heart}></img>
          </div>
        </div>
        <hr></hr>
        <h4>ANY COMMENTS</h4>
        <textarea placeholder='Type something here...'></textarea>
        <button>ADD COMMENT</button>
      </section>
    </div>
  )
}



export default RecipeDetails
