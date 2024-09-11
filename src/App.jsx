import './App.css';
import { Parallax } from 'react-parallax';
import c1 from './image/c1.jpg'
import c4 from './image/c4.webp'
import c3 from './image/c3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='App'>
     
      <Parallax strength={300} style={{innerHeight:'20%',}} bgImage={c1}>
       <div className="content">
        <div className="text-content">Normal parallex</div>
       </div>
       </Parallax>
       <Parallax strength={300} blur={{min:-15,max:15}} bgImage={c3}>
       <div className="content">
        <div className="text-content">Normal parallex</div>
       </div>
       </Parallax>
       <Parallax strength={-300} bgImage={c4}>
       <div className="content">
        <div className="text-content">reverse parallex</div>
       </div>
       </Parallax>
          
    </div>
  )
}

export default App

