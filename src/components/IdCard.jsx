function IdCard(props) {
  console.log(props);
  return (
    <div className="id-card">
      <div className="id-card-img">
        <img src={props.info.picture} alt="profile pic" />
      </div>
      <div className="id-card-info">
        <p>
          <b>First name: </b>
          {props.info.firstName}
        </p>
        <p>
          <b>Last name: </b>
          {props.info.lastName}
        </p>
        <p>
          <b>Gender: </b>
          {props.info.gender}
        </p>
        <p>
          <b>Height: </b>
          {props.info.height}
        </p>
        <p>
          <b>Birth: </b>
          {props.info.birth.toString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
