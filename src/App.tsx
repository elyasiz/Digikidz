/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { CourseDetails } from './pages/CourseDetails';
import { Playground } from './pages/Playground';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="course/:id" element={<CourseDetails />} />
          <Route path="playground" element={<Playground />} />
        </Route>
      </Routes>
    </Router>
  );
}

