import './App.css';
import AboutEssay from './components/AboutEssay';
import BuisnessGirl from './components/BuisnessGirl';
import EssayContent from './components/EssayContent';
import FooterComponent from './components/FooterComponent';
import IntrestsContent from './components/IntrestsContent';
import IntrestsEssay from './components/IntrestsEssay';
import LinkButtons from './components/LinkButtons';
import SecondHeader from './components/SecondHeader';
import UserName from './components/UserName';
import WebsiteName from './components/WebsiteName';

function App() {
  return (
    <div className="App">
      <section className='container'>
        <BuisnessGirl />
        <UserName />
        <SecondHeader />
        <WebsiteName />
        <LinkButtons />
        <AboutEssay />
        <EssayContent />
        <IntrestsEssay />
        <IntrestsContent />
        <FooterComponent />
      </section>
    </div>
  );
}

export default App;
