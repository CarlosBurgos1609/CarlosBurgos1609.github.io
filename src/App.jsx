import { Route, Routes } from 'react-router-dom';
import Layout from './Front/layout';
import Home from './Front/home'
import Languages from './Front/languages'
import Aplicactions from './Front/applications'
import Certificates from './Front/certificates'
import Works from './Front/works'
import Contacts from './Front/contacts'
import SocialNetworks from './Front/socialNetworks'
import PlayLists from './Front/playlists'
import Error from './Front/404'


function App() {

  return (
    <div>
      <Router basename="/carlosburgos1609.github.io/build">
      <Routes>
        <Route path="/build" element={<Layout />}>
          <Route path="/build" element={<Home />} />
          <Route path="Languages" element={<Languages />} />
          <Route path="Aplicactions" element={<Aplicactions />} />
          <Route path="Certificates" element={<Certificates />} />
          <Route path="Works" element={<Works />} />
          <Route path="Contacts" element={<Contacts />} />
          <Route path="SocialNetworks" element={<SocialNetworks />} />
          <Route path="PlayLists" element={<PlayLists />} />
          <Route path="*" element={<Error />} />
        </Route>

      </Routes>
      </Router>
    </div>
  );
}

export default App;
