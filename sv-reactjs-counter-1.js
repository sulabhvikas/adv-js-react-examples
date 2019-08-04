function Button(props) {
  //const [counter, setCounter] = useState(0);
  const handleClick = () => props.onClickFucntion(props.increment);
  return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
  return (
    <div>
      <Button onClickFucntion = {incrementCounter} increment={1}/>
      <Button onClickFucntion = {incrementCounter} increment={5}/>
      <Button onClickFucntion = {incrementCounter} increment={10}/>
      <Button onClickFucntion = {incrementCounter} increment={50}/>
      <Button onClickFucntion = {incrementCounter} increment={100}/>
      <Display message={counter}/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('mountNode'),
);