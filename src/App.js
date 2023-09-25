import './App.css';
import { Routes, Route } from 'react-router-dom';
import Compt from './compons/compt';
import Start from './compons/Start';
import Man from './compons/Man/Man'
import Unics from '../src/compons/Unbix/Unics.jsx';
import  Bisnes  from '../src/compons/Bisnes.jsx'
import { Woumen } from '../src/compons/Kepka.jsx/Woumen';
import Kepk from './compons/Kepka.jsx/Kep';

function App() {
  return (
<>
<Routes>
  <Route path='/' element={<Compt/>}/>
  <Route path='/start' element={<Start/>}/>
  <Route path='/Can' element ={ <Man/> }/>
  <Route path='/Ubut' element ={ <Unics/> }/>
  <Route path='/Bisnes' element ={ <Bisnes/> }/>
  <Route path='/Woumen' element ={ <Woumen/> }/>
  <Route path='/Kepk' element ={ <Kepk/> }/>
</Routes>
    </>
  );
}

export default App;
