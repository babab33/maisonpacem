import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MediumCircularRevealHeadingDemo } from './components/demo';
import { CatalogPage } from './components/CatalogPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <MediumCircularRevealHeadingDemo />
        </div>
      } />
      <Route path="/catalog" element={<CatalogPage />} />
    </Routes>
  );
}

export default App;
