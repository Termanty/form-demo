function View(props) {
  return (
    <div className="container">
      <h2>Check your input</h2>
      <div className="notebook">
        <div className="noterow">
          <div className="note-start"> </div>
          <p className="note-end">
            <span>F</span>irst name{" "}
            <span className="hand"> {props.firstname}</span>
          </p>
        </div>
        <div className="noterow">
          <div className="note-start"> </div>
          <p className="note-end">
            <span>L</span>ast name{" "}
            <span className="hand">{props.lastname}</span>
          </p>
        </div>
        <div className="noterow">
          <div className="note-start"> </div>
          <p className="note-end">
            <span>P</span>honenumber{" "}
            <span className="hand">{props.phonenumber}</span>
          </p>
        </div>
        <div className="noterow">
          <div className="note-start"> </div>
          <p className="note-end">
            <span>M</span>essage <span className="hand">{props.message}</span>
          </p>
        </div>
        <div className="noterow">
          <div className="note-start"> </div>
          <p className="note-end">
            <span>R</span>ole <span className="hand">{props.role}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default View;
