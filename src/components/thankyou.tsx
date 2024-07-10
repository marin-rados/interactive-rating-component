import thankYouIcon from "../assets/icons/illustration-thank-you.svg";

type Props = {
  rating: number | null;
};

const ThankYou = ({ rating }: Props) => {
  return (
    <div className="thankyou">
      <img
        src={thankYouIcon}
        alt="Submitted - Thank You Icon"
        className="thankyou__img"
      />
      <p className="thankyou__selected">You selected {rating} out of 5</p>

      <h1 className="thankyou__title">Thank you!</h1>
      <p className="thankyou__description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
