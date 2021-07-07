import { useState } from 'react';
import './App.css';

function App() {
  const [domain, setDomain] = useState('');


  const updateDomain = (event) => {
    event.preventDefault();
    setDomain(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  }

  const fetchData = () => {
    fetch(`https://otx.alienvault.com/otxapi/indicator/domain/whois/${domain}`)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" className="input-box" value={domain} onChange={updateDomain}/>
        <button type="submit">Get me domain results!</button>
      </form>
    </div>
  );
}

export default App;
