import '../../reports/loadProfileReport/utils/task.css';
import Dropdown from './MeterMasterpage/MeterMaster';

import Search from './components/Search';
import { Route, Routes } from 'react-router-dom';
import BasicTabs from './components/BasicTabs';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
     <NavBar />
      <Routes>
          <Route path="/" element={<Dropdown />} />
          <Route path="/search" element={<Search />} />
          <Route path="/newmeter" element={<BasicTabs/>} />
        </Routes>
    </>
  );

}
export default App;
