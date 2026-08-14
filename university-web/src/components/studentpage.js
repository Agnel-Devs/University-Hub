import React from "react";
import Header from "./Header";
import StudentCard from "./StudentCard";
import StudentList from "./StudentList";
import Counter from "./Counter";
import TitleUpdater from "./titleupdater";
import Clock from "./Clock";
import UserGreeting from "./Greeting";
import LiveStudentList from "./LiveStudentList";

const boxStyle = {
  flex: "1 1 200px",
  padding: "16px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  textAlign: "center",
};

function studentpage() {
  return (
    <div>
      <UserGreeting isloggedIn={true} />
      {/*<UserGreeting isloggedIn={false}/> */}
      <Header />
      {/* <h2 style={{ textAlign: "center" }}>Current Students</h2>
      <StudentCard
        name="Cristiano Ronaldo"
        studentId="7"
        major="forward" />
      <StudentCard
        name="Bruno Fernandes"
        studentId="18"
        major="Midfield" /><br></br>
      <h2 style={{ textAlign: "center" }}>Courses</h2> */}

      <br></br>
      <div>
        <h2>Student Data(API Simulation)</h2>
        <LiveStudentList/>
        <div style={boxStyle}>
          <Counter />
        </div>
        <div style={boxStyle}>
          <StudentList />
        </div>
        <div style={boxStyle}>
          <h3 style={{ margin: 0 }}>UPDATOR</h3>
          <TitleUpdater />
        </div>
        <div style={boxStyle}>
          <h3 style={{ margin: 0 }}>TIME</h3>
          <Clock />
        </div>
      </div>
    </div>
  );
}
export default studentpage;