import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { LandingPage } from './pages/LandingPage';
import { AboutUs } from './pages/AboutUs';
import { ProgramOverview } from './pages/ProgramOverview';
import { LittleCreator } from './pages/LittleCreator';
import { JuniorCreator } from './pages/JuniorCreator';
import { TeenCreator } from './pages/TeenCreator';
import { TechAcademy } from './pages/TechAcademy';
import { Robotics } from './pages/Robotics';
import { GameDev } from './pages/GameDev';
import { WebDev } from './pages/WebDev';

import { SchoolPartnership } from './pages/SchoolPartnership';
import { HolidayCamp } from './pages/HolidayCamp';
import { Events } from './pages/Events';
import { StudentProjects } from './pages/StudentProjects';
import { ContactUs } from './pages/ContactUs';
import { Blog } from './pages/Blog';
import { EventDetail } from './pages/EventDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="programs" element={<ProgramOverview />} />
          
          <Route path="programs/little-creator" element={<LittleCreator />} />
          <Route path="programs/junior-creator" element={<JuniorCreator />} />
          <Route path="programs/teen-creator" element={<TeenCreator />} />
          <Route path="programs/tech-academy" element={<TechAcademy />} />
          <Route path="programs/robotics" element={<Robotics />} />
          <Route path="programs/game-development" element={<GameDev />} />
          <Route path="programs/web-development" element={<WebDev />} />
          <Route path="school-partnership" element={<SchoolPartnership />} />
          <Route path="holiday-camp" element={<HolidayCamp />} />
          <Route path="events" element={<Events />} />
          <Route path="student-projects" element={<StudentProjects />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="events/detail" element={<EventDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}
