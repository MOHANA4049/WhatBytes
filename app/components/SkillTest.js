// import React from 'react';

// const SkillTest = () => {
//   return (
//     <section className="bg-gray-100 p-4 rounded-md shadow-md">
//       <h3 className="text-lg font-bold mb-2">Skill Test</h3>
//       <div className="flex justify-between items-center">
//         <p>Questions: 08 | Duration: 15 mins</p>
//         <p className="text-gray-500">Submitted on 5 June 2021</p>
//       </div>
//       <div className="mt-4">
//         <span className="text-sm mr-2">HTML Tools, Forms, History</span>
//       </div>
//     </section>
//   );
// };

// export default SkillTest;
import React from 'react';
import 'C:/Users/mohan/Downloads/tasks/app/components/skill.css'
const SkillTest = () => {
  return (
    <section className="skill-test bg-gray-100 p-4 rounded-md shadow-md grid grid-cols-1 gap-4">
      <div className="title-container">
        <h3>Skill Test</h3>
        <button className="view-details">Update</button>
      </div>
      <h1>Hyper Text MarkUp Language</h1>
      <p>Questions: 08|Duration: 15 mins|Submitted on 5 June 2021</p>
    </section>
  );
};

export default SkillTest;


