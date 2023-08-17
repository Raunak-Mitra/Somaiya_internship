import react from "react";
import StudentData from "../components/studentView/StudentData";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Heading from "../components/heading/Heading";
import './studentSummary.css';

function StudentSummary(){
    return(
        <>
            <Navbar />
            <Heading heading ="Student Heading" />
            
            <StudentData />
            <Footer />
        </>
    )
}

export default StudentSummary;