import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather defaultCity="Amsterdam"/>
            <footer>
              This project was coded by Anastasiia Shumeiko and is {" "}
            <a href="https://github.com/AnastasiaCodeGirl/react-weather-app" target="_blank" rel="noreferrer">open-sourced on GitHub</a> 
            
            </footer>
            </div>
    </div>

  );
}

export default App;
