import react from "react";
import StudentData from "../components/studentView/StudentData";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Heading from "../components/heading/Heading";
import './studentResult.css';
import AcademicYear from "../components/academicYear/AcademicYear";


function StudentResult(){
    return(
        <>
            <Navbar />
            <Heading heading = "Student Result"/>
            <div className = "content">
                <StudentData />
                <AcademicYear />
            </div>
            <Footer />
        </>
    )
}

export default StudentResult;