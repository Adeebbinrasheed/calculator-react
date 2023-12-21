import React from "react";
import { useState } from "react";
const App = () => {
  const [values, setValues] = useState("");
  // console.log(values);

  const click = (event) => {
    // const typing = [...values].concat(event.target.value).join('');
    const typing = values + event.target.value;
    setValues(typing);
  };
  const submit = (e) => {
    const submit = eval(values);
    setValues(submit);
  };
  const remove = () => {
    setValues("");
  };
  const Delete = () => {
    setValues(values.slice(0, -1));
  };

  return (
    <div className="container">
      <div className="calci">
        <div className="main">
          <input type="text" value={values} className="display" />
          <div className="buttons">
            <button value="7" onClick={click} className="aa">
              7
            </button>
            <button value="8" onClick={click} className="aa">
              8
            </button>
            <button value="9" onClick={click} className="aa">
              9
            </button>
            <button value="+" onClick={click} className="aa">
              +
            </button>
            <button value="4" onClick={click} className="aa">
              4
            </button>
            <button value="5" onClick={click} className="aa">
              5
            </button>
            <button value="6" onClick={click} className="aa">
              6
            </button>
            <button value="-" onClick={click} className="aa">
              -
            </button>
            <button value="1" onClick={click} className="aa">
              1
            </button>
            <button value="2" onClick={click} className="aa">
              2
            </button>
            <button value="3" onClick={click} className="aa">
              3
            </button>
            <button value="*" onClick={click} className="aa">
              *
            </button>
            <button value="0" onClick={click} className="aa">
              0
            </button>
            <button value="." onClick={click} className="aa">
              .
            </button>
            <button value="=" onClick={submit} className="equal">
              =
            </button>
            <button value="/" onClick={click} className="aa">
              /
            </button>
            <button onClick={remove} className="clear">
              AC
            </button>
            <button onClick={Delete} className="aa">
              <i class="fa-solid fa-delete-left"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
