export default function Greetings(props) {
  let hello = '';
  switch (props.lang) {
    case 'de':
      hello = 'Hallo';
      break;
    case 'en':
      hello = 'Hello';
      break;
    case 'es':
      hello = 'Hola';
      break;
    case 'fr':
      hello = 'Bonjour';
      break;
    default:
      hello = 'Hello';
      break;
  }

  return (
    <div className="greeting">
      <p>
        {hello} {props.children}
      </p>
    </div>
  );
}
