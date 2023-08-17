import React from "react";
import './academicYear.css';

function AcademicYear(){
    return(
        <>
        <div className = "addCourse">
            <h5>Add Course</h5>
            <select placeholder> 
            <option value="" disabled selected>Select Year</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
            </select>
        </div>

        </>
    )
}

export default AcademicYear;