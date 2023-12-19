import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './js/Blog';
const About = () => <div>소개 페이지</div>; /*return 형식과 같음 */

const App = () =>{
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to ="/about">소개</Link>
            </li>
          </ul>
        </nav>
        <hr /> {/* 밑줄*/}
        <Routes>{/*그룹화하겠다. */}
          <Route path='/' element={<Blog />}/>
          <Route path='/about' element={<About/>}/>
        </Routes> 
      </div>
    </Router>
  )
}
export default App;