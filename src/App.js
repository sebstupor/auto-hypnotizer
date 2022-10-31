import logo from './logo.svg';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Alert show={show} variant="warn">
      <Alert.Heading>Success!</Alert.Heading>
      <p>Congrats! The app is working!</p>
    </Alert>
  );
}

export default App;
