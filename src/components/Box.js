import { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const array = [
  {
    name: "Test 1",
    id: "s1",
  },
  {
    name: "Test 2",
    id: "s2",
  },
  {
    name: "Test 3",
    id: "s3",
  },
];

function Box() {
  const [toggled, setToggled] = useState([]);

  const handleClick = (id) => {
    setToggled(
      toggled.indexOf(id) === -1
        ? [...toggled, id]
        : toggled.filter((x) => x !== id)
    );
  };
  return (
    <div className="container">
      {array.map((arr) => {
        return (
          <div className="item2" key={arr.id}>
            <h4>{arr.name}</h4>
            {toggled.indexOf(arr.id) === -1 ? (
              <div className="item">
                <FontAwesomeIcon icon={faCoffee} size="xs" />
                <button onClick={() => handleClick(arr.id)}>Widac</button>
              </div>
            ) : (
              <button onClick={() => handleClick(arr.id)}>Nie Widac</button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Box;
// import React, { useState } from "react";
// import "../App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// function Box(props) {
//   const [isOpen, setIsOpen] = useState(true);
//   const handleOnClick = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <div className="container">

//         <div className="item2">
//           <button onClick={handleOnClick}>{props.children}</button>
//           {isOpen && (
//             <span {...props}>
//               <h2>
//                 <FontAwesomeIcon icon={faCoffee} size="xs" />
//               </h2>
//             </span>
//           )}
//         </div>

//     </div>
//   );
// }

// export default Box;

// import React, { useState } from "react";
// import "../App.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// function Box() {
//   const [checked1, setChecked1] = useState(false);
//   const [checked2, setChecked2] = useState(false);
//   const [checked3, setChecked3] = useState(false);

//   const toggleIsLoading1 = () => {
//     setChecked1((current) => !current);
//   };

//   const toggleIsLoading2 = () => {
//     setChecked2((current) => !current);
//   };

//   const toggleIsLoading3 = () => {
//     setChecked3((current) => !current);
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="item2">
//           {checked1 && (
//             <h2>
//               <FontAwesomeIcon icon={faCoffee} size="xs" />
//             </h2>
//           )}
//         </div>
//         <div className="item2">
//           {checked2 && (
//             <h2>
//               <FontAwesomeIcon icon={faCoffee} size="xs" />
//             </h2>
//           )}
//         </div>
//         <div className="item2">
//           {checked3 && (
//             <h2>
//               <FontAwesomeIcon icon={faCoffee} size="xs" />
//             </h2>
//           )}
//         </div>
//       </div>
//       <div class="container">
//         <div className="item" onClick={toggleIsLoading1}>
//           Kliknij
//         </div>
//         <div className="item" onClick={toggleIsLoading2}>
//           Kliknij
//         </div>
//         <div className="item" onClick={toggleIsLoading3}>
//           Kliknij
//         </div>
//       </div>
//     </>
//   );
// }

// export default Box;
