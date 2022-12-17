import { Route, Routes, Navigate } from "react-router-dom";
import {
  Introduction,
  Greeting,
  EducationGoal,
  History,
  Contacts,
  Member,
  Professor,
  Faculty,
  Enterprise,
  Committee,
  Office,
  Undergraduate,
  Education,
  Curriculum,
  GraduationRequirement,
  Activity,
  Club,
  Capstone,
  Contest,
  ProgrammingCamp,
  Community,
  Board,
  Notice,
  Employment,
  MainPage,
  NotFound,
} from "./components/Pages.js";

const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />

    <Route path="/intro/*" element={<Introduction />}>
      <Route path="" element={<Greeting />} />
      <Route path="greeting" element={<Greeting />} />
      <Route path="education-goal" element={<EducationGoal />} />
      <Route path="history" element={<History />} />
      <Route path="contacts" element={<Contacts />} />
    </Route>

    <Route path="" element={<Member />}>
      <Route path="" element={<Faculty />} />
      <Route path="faculty" element={<Faculty />} />
      <Route path="enterprise" element={<Enterprise />} />
      <Route path="committee" element={<Committee />} />
      <Route path="office" element={<Office />} />
    </Route>

    <Route path="/undergraduate/*" element={<Undergraduate />}>
      <Route path="" element={<Education />} />
      <Route path="education" element={<Education />} />
      <Route path="curriculum" element={<Curriculum />} />
      <Route
        path="graduation-requirement"
        element={<GraduationRequirement />}
      />
    </Route>

    <Route path="/activity/*" element={<Activity />}>
      <Route path="" element={<Club />} />
      <Route path="club" element={<Club />} />
      <Route path="capstone" element={<Capstone />} />
      <Route path="contest" element={<Contest />} />
      <Route path="programming-camp" element={<ProgrammingCamp />} />
    </Route>

    <Route path="/community/*" element={<Community />}>
      <Route path="" element={<Board />} />
      <Route path="board" element={<Board />} />
      <Route path="notice" element={<Notice />} />
      <Route paht="employment" elemnet={<Employment />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);
export default App;
