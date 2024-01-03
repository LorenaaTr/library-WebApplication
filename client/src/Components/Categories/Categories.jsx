import React from 'react'
import './categories.css'

const Categories = () => {
  return (
    <>
      <div className="book-categories">
        <div className="category">
            <i className="fas fa-book icon fiction-icon"></i>
            <p className="category-title">FICTION</p>
        </div>

        <div className="category">
            <i className="fas fa-history icon non-fiction-icon"></i>
            <p className="category-title">NON-FICTION</p>
        </div>

        <div className="category">
            <i className="fas fa-scroll icon classics-icon"></i>
            <p className="category-title">CLASSICS</p>
        </div>

        <div className="category">
            <i className="fas fa-child icon children-icon"></i>
            <p className="category-title">CHILDREN'S BOOK</p>
        </div>

        <div className="category">
            <i className="fas fa-utensils icon cook-icon"></i>
            <p className="category-title">COOK BOOK</p>
        </div>

        <div className="category">
            <i className="fas fa-globe icon travel-icon"></i>
            <p className="category-title">TRAVEL GUIDES</p>
        </div>

        <div className="category">
            <i className="fas fa-cross icon religious-icon"></i>
            <p className="category-title">RELIGIOUS AND SPIRITUAL BOOKS</p>
        </div>

        <div className="category">
            <i className="fas fa-mask icon comics-icon"></i>
            <p className="category-title">COMICS</p>
        </div>

        <div className="category">
            <i className="fas fa-graduation-cap icon crime-philosophy-icon"></i>
            <p className="category-title">PHILOSOPHY</p>
        </div>

        <div className="category">
            <i className="fas fa-magnifying-glass icon academic-icon"></i>
            <p className="category-title">ACADEMIC BOOKS</p>
        </div>

        <div className="category">
            <i className="fas fa-film  icon crime-fantasy-icon"></i>
            <p className="category-title">TRUE CRIME AND FANTASY</p>
        </div>

        <div className="category">
            <i className="fas fa-gamepad  icon crime-entertainment-icon"></i>
            <p className="category-title">ENTERTAINMENT BOOKS</p>
        </div>
        </div>
    </>
  )
}

export default Categories