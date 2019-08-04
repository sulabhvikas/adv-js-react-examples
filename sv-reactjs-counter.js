function Button(props) {
  //const [counter, setCounter] = useState(0);
  //const handleClick = () => setCounter(counter+1);
  return (
    <button onClick={props.onClickFucntion}>
      +1
    </button>
  );
}

function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

function App() {
  const [counter, setCounter] = useState(42);
  const incrementCounter = () => setCounter(counter+1);
  return (
    <div>
      <Button onClickFucntion = {incrementCounter}/>
      <Display message={counter}/>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('mountNode'),
);