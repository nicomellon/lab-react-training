function Rating(props) {
  const rating = Math.round(Number(props.children));
  return (
    <div>
      <p>{'★★★★★'.slice(0, rating).padEnd(5, '☆')}</p>
    </div>
  );
}

export default Rating;
