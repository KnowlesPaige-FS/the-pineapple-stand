import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='App'>
      <main>
        <section>
          <Navigation/>
        </section>

        <section>
          <Routes>
            <Route path='/' ></Route>
          </Routes>
        </section>
      </main>

    </div>
  );
}

export default App;
