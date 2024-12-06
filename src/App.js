import './styles/global.scss';
import { Header } from './components';
import { Home, AboutMe, Skills, Projects, ContactMe, LearningPath } from './layouts';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Home />
        <AboutMe />
        <LearningPath/>
        <Skills />
        <Projects />
        <ContactMe />
      </main>
    </div>
  );
}



export default App;
