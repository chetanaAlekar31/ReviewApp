import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', rating: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.rating) return;
    const rating = parseInt(!formData.rating);
    if(rating<1||rating>5){
      alert('Rating must be between 1 and 5');
      return;
    }
    setReviews([...reviews, formData]);
    setFormData({ title: '', description: '', rating: '' });
  };

  const handleDelete = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(index, 1);
    setReviews(updatedReviews);
  };

  return (
    <div className="app">
      <div className="give-review">
        <h2 style={{textAlign:'center',backgroundColor:'black',height:'50px',paddingTop:'20px',color:'white'}}>Give Review</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title*</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
          <label htmlFor="rating">Rating*</label>
          <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleChange} min="1" max="5" required />
          <div className="buttons">
            <button type="submit">Submit</button>
            <button1 type="button" onClick={() => setFormData({ title: '', description: '', rating: '' })}>Reset</button1>
          </div>
        </form>
      </div>
      <div className="reviews">
        <h2 style={{textAlign:'center',backgroundColor:'Brown',height:'50px',paddingTop:'20px',color:'white',}}>Reviews</h2>
        <ul>
          <div className='review-box'>
          {reviews.map((review, index) => (
            <li key={index}>
              <p> <strong>Title : </strong>{review.title}</p>
              <p> <strong>Description : </strong>{review.description}</p>
              <p>
                <strong>Rating:</strong> {[...Array(parseInt(review.rating))].map((_, i) => (
                  <FontAwesomeIcon icon={faStar} key={i} style={{ color: 'Gold' }} />
                ))}
              </p>
              <button2 onClick={() => handleDelete(index)}>Delete</button2>
            </li>
          ))}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default App;
