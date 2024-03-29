const render = () => {
  document.getElementById('mountNode').innerHTML = `
  <div>
    Hello HTML
    <input/>
    <pre>${(new Date).toLocaleTimeString()}</pre>
  </div>
  `;

  ReactDOM.render(
    React.createElement(
      "div",
      null,
      "Hello React",
      React.createElement('input', null),
      React.createElement('pre', null, (new Date).toLocaleTimeString()),
    ),
    document.getElementById('mountNode2'),
  ); 
}

//currentTime : (new Date).toLocaleTimeString()
setInterval(render, 1000);
