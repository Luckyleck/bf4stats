import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Search from './components/Search';
import Stats from './components/Stats';
import './App.css';


function App() {

  console.log('in app')
  return (
    <Router>
      <Routes>
        <Route element={<Outlet />}>
          <Route index element={<Search />} />
          <Route path="/stats/:playerName" element={<Stats />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
