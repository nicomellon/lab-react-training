function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props.card;
  const style = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    width: '30em',
  };
  return (
    <div className="credit-card" style={style}>
      <div>
        <p>{type}</p>
      </div>
      <div>
        <p>**** **** **** {number.slice(-4)}</p>
      </div>
      <div>
        <p>
          Expires {expirationMonth}/{expirationYear} {bank}
          <br />
          {owner}
        </p>
      </div>
    </div>
  );
}

export default CreditCard;
