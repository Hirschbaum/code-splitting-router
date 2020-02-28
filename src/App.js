import { Route, BrowserRouter as Router } from 'react-router-dom';
import React, { Suspense } from 'react'; //you also have to import Suspense
import './App.css';
import { Helmet } from 'react-helmet';

//so import u the components:
const Home = React.lazy(() => 
import('./Home'));

const About = React.lazy(() =>
import('./About'));

const Contact = React.lazy(() => 
import('./Contact'));

function App() {
  return (
    <div>

    {/*In Suspense component you have to place your components */}
      <Suspense fallback={<div style={{textAlign: 'center', fontWeight: '700'}}>Loading...</div>}>

        <div className='app'>
          <Helmet>
            <title>Cool Company</title>
          </Helmet>
          <Router>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Router>
        </div>

      </Suspense>

    </div>
  );
}

export default App;
