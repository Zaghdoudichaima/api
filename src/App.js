import { Route, Routes } from 'react-router-dom';
import './App.css';
import ListUser from './components/ListUser';

function App() {
  return (
    <div className="App">
<Routes>
  <Route path='/' element={<ListUser/>}/>
</Routes>
    </div>
  );
}

export default App;
