import Rating from './Rating';

function DriverCard(props) {
  const { name, rating, img, car } = props;
  return (
    <div className="driver-card">
      <div className="driver-img-div">
        <img src={img} alt={name} />
      </div>
      <div>
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
