import {Routes, Route} from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Articles from './pages/Articles';
import PostOne from './pages/PostOne';
import PostTwo from './pages/PostTwo';
import PostThree from './pages/PostThree';
import PostFour from './pages/PostFour';
import PostFive from './pages/PostFive';
import PostSix from './pages/PostSix'

import { Buffer } from 'buffer';
window.Buffer = Buffer;


function App() {
  return (
    <div className='App'>
      <ScrollToTop />
      <main style={styles.main}>
        <section>
          <Navigation/>
        </section>
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/postone' element={<PostOne />} />
            <Route path='/posttwo' element={<PostTwo />} />
            <Route path='/postthree' element={<PostThree />} />
            <Route path='/postfour' element={<PostFour />} />
            <Route path='/postfive' element={<PostFive />} />
            <Route path='/postsix' element={<PostSix />} />
          </Routes>
        </section>
      </main>

    </div>
  );
}

export default App;

const styles = {

}
