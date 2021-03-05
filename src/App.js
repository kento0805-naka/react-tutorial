import React from "react";

const App = () => {
  const profiles = [
    { name: "Kento", age: 24 },
    { name: "Nakamura", age: 64 },
    { name: "Ito" },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      Hi, I am {props.name}, and {props.age} years old!!
    </div>
  );
};

User.defaultProps = {
  age: 4,
};

export default App;
