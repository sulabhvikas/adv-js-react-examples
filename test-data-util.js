const testData = [
  {
    "login": "gaearon",
    "id": 810438,
    "avatar_url": "https://avatars0.githubusercontent.com/u/810438?v=4",
    "name": "Dan Abramov",
    "company": "@facebook "
  },
  {
    "login": "fabpot",
    "id": 47313,
    "avatar_url": "https://avatars3.githubusercontent.com/u/47313?v=4",
    "name": "Fabien Potencier",
    "company": "Symfony/Blackfire"
  },
  {
  "login": "andrew",
  "id": 1060,
  "avatar_url": "https://avatars2.githubusercontent.com/u/1060?v=4",
  "name": "Andrew Nesbitt",
  "company": "@octobox  "
  },
  {
    "login": "taylorotwell",
    "id": 463230,
    "avatar_url": "https://avatars3.githubusercontent.com/u/463230?v=4",
    "name": "Taylor Otwell",
    "company": "Laravel"
  },
  {
    "login": "egoist",
    "id": 8784712,
    "avatar_url": "https://avatars2.githubusercontent.com/u/8784712?v=4",
    "name": "EGOIST",
    "company": null
  }
  
];


class Card extends React.Component {
  render() {
    return(
      <div style={{margin: '1rem'}}>
        <img src="https://placehold.it/75"/>
        <div style={{display: 'inline-block', marginLeft: 10}}>
          <div style={{fontSize: '125%'}}>Name Here....</div>
          <div style={{fontSize: '95%'}}>Company Here....</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.title}</div>
        <Card/>
      </div>
    );
  }
}

//const App = ({title}) => (
//	<div className="header">{title}</div>
//	);

ReactDOM.render(
	<App title="The GitHub Cards App" />,
	mountNode,
);