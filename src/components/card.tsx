import { useState } from "react";
import starIcon from "../assets/icons/icon-star.svg";
import { ratingsData } from "../data/ratings";
import ThankYou from "./thankyou";

const Card = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = () => {
    const main = document.querySelector(".rating");
    const rated = document.querySelector(".thankyou");

    if (rating === null) {
      alert("Please select a rating before submitting!");
      return;
    }

    if (main && rated) {
      main.classList.add("hide");
      rated.classList.remove("hide");
    }

    setIsSubmitted(true);
  };

  const handleRatingClick = (rating: number) => {
    setRating(rating);
  };

  return (
    <div className="card">
      {!isSubmitted ? (
        <div className="rating">
          <div className="rating__star">
            <img
              src={starIcon}
              alt="Icon of a star"
              className="rating__star__img"
            />
          </div>

          <h1 className="rating__title">How did we do?</h1>
          <p className="rating__description">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <div className="ratings">
            {ratingsData.map((item) => (
              <div
                key={item.rating}
                className={`ratings__item ${
                  rating === item.rating ? "active" : ""
                }`}
                onClick={() => handleRatingClick(item.rating)}
              >
                <p className="ratings__item__value">{item.rating}</p>
              </div>
            ))}
          </div>

          <button onClick={handleSubmit} className="rating__button">
            SUBMIT
          </button>
        </div>
      ) : (
        <ThankYou rating={rating} />
      )}
    </div>
  );
};

export default Card;
