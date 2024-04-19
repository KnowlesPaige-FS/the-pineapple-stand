import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Articles from './pages/Articles';
// import Blog from './components/Blog';

function App() {
  return (
    <div className='App'>
      <main style={styles.main}>
        <section>
          <Navigation/>
        </section>

        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/articles' element={<Articles />} />
          </Routes>
        </section>
      </main>

    </div>
  );
}

export default App;

const styles = {
  main: {

  }
}