import './App.css';
import FirstHero from './sections/FirstHero';
import Header from './sections/Header'
import Steps from './sections/Steps';
import Stars from './sections/Stars';
import Extras from './sections/Extras';
import Payment from './sections/Payment';

function App() {
  return (
    <div className="App" style={{
      // height:'400vh',
      overflowX:'hidden'
    }}>
      <Header />
      <FirstHero />
      <Steps />
      <Stars />
      <Extras />
      <Payment />
    </div>
  );
}

export default App;
