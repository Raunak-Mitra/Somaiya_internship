// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function GetData(){
//     const [data , setData] = useState([])
//     useEffect(()=> {
//         axios.get('http://127.0.0.1:8000/student/')
//         .then(res => setData(res.data))
//         .catch(err => console.log(err));
//     },[])
//     return(
//         <div className="container">
//             <div className="mt-3">
//                 <h3>GetData From AN API</h3>
//                 <table>
//                     <thead>
//                         <tr>
//                         <th>Name</th>
//                         <th>Roll No.</th>
//                         <th>Branch</th>
//                         <th>Proctor</th>
//                         <th>Student Email Id</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             data.map((user , index) => {
//                                 return <tr key={index}>
//                                     <td>{user.student_name}</td>
//                                     <td>{user.Roll_number}</td>
//                                     <td>{user.student_branch.branch_name}</td>
//                                     <td>{user.Proctor_Abbreviation.faculty_name}</td>
//                                     <td>{user.email}</td>
//                                 </tr>
//                             })
//                         }
//                     </tbody>
            
//                 </table>
//             </div>
//         </div>
//     )
// }
// export default GetData;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from './DataTable';

const GetData = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Fetch JSON data using Axios when the component mounts
    axios.get('http://127.0.0.1:8000/student/')
      .then((response) => {
        setJsonData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching JSON data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Student Data</h1>
      <DataTable data={jsonData} />
    </div>
  );
};

export default GetData;

