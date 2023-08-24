import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Componets/pages/Home';
import Empresa from './Componets/pages/Empresa';
import Contato from './Componets/pages/Contato';
import NovoProjeto from './Componets/pages/NovoProjeto';
import Container from './Componets/layout/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/empresa'>Empresa</Link>
        <Link to='/contato'>Contato</Link>
        <Link to='/novoprojeto'>Novo Projeto</Link>
      </div>
      <Container customClass="min_height">
      <Routes>    
        <Route exact path='/' element={ <Home/> } />
        <Route path='/empresa' element={ <Empresa/> } />
        <Route path='/contato' element={ <Contato/> } />
        <Route path='/novoprojeto' element={ <NovoProjeto/> } />
      </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
