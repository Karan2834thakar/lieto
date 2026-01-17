import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderingProcess from './pages/OrderingProcess';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ordering-process" element={<OrderingProcess />} />
      </Routes>
    </Router>
  );
}

export default App;
