import { useEffect, useState } from "react";

const Owner = ({ name, Designation }) => {
  // Creating State Variable inside the Functional Component
  const [count1, setCount1] = useState(0);
  const [count2] = useState(1);

  // How to Update the State Variable
  const incrementCount1 = () => {
    setCount1(count1 + 1);
  };

  // How to Update the State Variable
  const DecrementCount1 = () => {
    setCount1(count1 - 1);
  };

  // It is Used to Make API Calls
  useEffect(() => {
  }, [])
  return (
    <div className="owner-card">
      {/* <img src= alt={`${owner.name}'s photo`} className="owner-photo" /> */}
      <h2 className="owner-name">{Designation}</h2>
      <h2 className="owner-name"> {name}</h2>
      <p className="owner-Location">Mumbai</p>
      <p className="owner-mail">Himanshukr0007@gmail.com</p>
      <p className="owner-phone">+91 8207797439</p>
      {/* Using State Variable */}
      <p className="owner-State">
        Funcitonal Component State Variable Count 1 - {count1}
      </p>
      <p className="owner-State">
        Funcitonal Component State Variable Count 2 - {count2}
      </p>
      <button onClick={incrementCount1}>Increment Count 1</button>
      <button onClick={DecrementCount1}>Decrement Count 1</button>
    </div>
  );
};

export default Owner;
