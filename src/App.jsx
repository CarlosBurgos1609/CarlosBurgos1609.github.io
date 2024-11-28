import { Route, Routes } from 'react-router-dom';
import Layout from './Front/layout';
import Home from './Front/home';
import Languages from './Front/languages';
import Aplicactions from './Front/applications';
import Certificates from './Front/certificates';
import Works from './Front/works';
import Contacts from './Front/contacts';
import SocialNetworks from './Front/socialNetworks';
import Playlists from './Front/playlists';
import NotFound from './Front/404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="languages" element={<Languages />} />
        <Route path="aplicactions" element={<Aplicactions />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="works" element={<Works />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="socialNetworks" element={<SocialNetworks />} />
        <Route path="playlists" element={<Playlists />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
