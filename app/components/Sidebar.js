import React from 'react';
import 'C:/Users/mohan/Downloads/tasks/app/components/side.css';
import Header from 'C:/Users/mohan/Downloads/tasks/app/components/Header.js';
import SkillTest from 'C:/Users/mohan/Downloads/tasks/app/components/SkillTest.js';
import Internship from 'C:/Users/mohan/Downloads/tasks/app/components/Internship.js';
import Stat from 'C:/Users/mohan/Downloads/tasks/app/components/Stat.js';
import Syllabus from 'C:/Users/mohan/Downloads/tasks/app/components/Syllabus.js';
const Sidebar = () => {
//   return (
//     <div className="fixed top-0 left-0 h-screen w-64 overflow-y-auto bg-white p-4">
//       <ul className="space-y-2">
//         <li>
//           <a href="#" className="text-gray-700 hover:text-blue-500 font-medium block py-2 px-4">
//             Dashboard
//           </a>
//         </li>
//         <li>
//           <a href="#" className="text-gray-700 hover:text-blue-500 font-medium block py-2 px-4">
//             Skill Test
//           </a>
//         </li>
//         <li>
//           <a href="#" className="text-gray-700 hover:text-blue-500 font-medium block py-2 px-4">
//             Internships
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };
return(
  <div id="viewport">
  {/* Sidebar */}
  <div id="sidebar">
    {/* <header>
      <a href="#">WhatBytes</a>
    </header> */}
      <h1 className="text-xl font-bold">WhatBytes</h1>
    <ul className="nav">
      <li>
        <a href="#">
          <i className="zmdi zmdi-view-dashboard" />Dashboard
        </a>
      </li>
      <li>
        <a href="#">
          <i className="zmdi zmdi-link" /> SkillTest
        </a>
      </li>
      <li>
        <a href="#">
          <i className="zmdi zmdi-widgets" />Internships
        </a>
      </li>
    </ul>
  </div>
  <div id="content"> 
    <Header/>
    <SkillTest/>
    <Stat/>
    <Syllabus/>
    {/* <Internship/> */}
  </div>
</div>

);}

export default Sidebar;
