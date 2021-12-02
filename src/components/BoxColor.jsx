export default function BoxColor(props) {
  const { r, g, b } = props;
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
    height: '50px',
    border: '1px solid black',
  };
  return (
    <div style={divStyle}>
      rgb({r},{g},{b})
    </div>
  );
}
