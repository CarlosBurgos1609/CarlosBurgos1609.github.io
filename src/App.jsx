import { Route, Routes } from 'react-router-dom';
import Layout from './Front/layout';
import Home from './Front/home'
import Languages from './Front/languages'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="Languages" element={<Languages />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
