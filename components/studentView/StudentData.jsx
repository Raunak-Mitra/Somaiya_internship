import react, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentTable from './StudentTable';

const StudentData = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Fetch JSON data using Axios when the component mounts
    axios.get("http://127.0.0.1:8000/student/")
      .then((response) => {
        setJsonData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching JSON data:', error);
      });
  }, []);

  return (
    <div>
      {/* <h1>Student Data ulalala</h1> */}
      <StudentTable data={jsonData} />
    </div>
  );
};

export default StudentData;

