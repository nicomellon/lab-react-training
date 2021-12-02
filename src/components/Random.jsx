export default function Random(props) {
  const { max, min } = props;
  const randomNum = Math.floor(Math.random() * (max - min) + min);
  return (
    <div>
      Random value between {min} and {max} => {randomNum}
    </div>
  );
}
