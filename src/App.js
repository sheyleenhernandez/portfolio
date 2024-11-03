import './styles/global.scss';
import { Header } from './components';
import { Home, AboutMe, Skills, Projects, ContactMe } from './layouts';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
      </main>
    </div>
  );
}

export default App;
