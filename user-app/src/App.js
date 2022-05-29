import "./App.css";
import React from "react";
import User from "./User";

const user = {
  name: "Test",
  avatar: "https://joeschmoe.io/api/v1/test",
  email: "test@test.com",
  city: "Odessa",
  dob: "21.01.2000",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <User user={user} />
      </header>
    </div>
  );
}

export default App;
