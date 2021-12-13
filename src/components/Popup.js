function Popup(props) {
  const closeHandler = () => {
    window.location.reload();
  };

  const acceptHandler = () => {
    console.log(props);
    const data = {
      firstname: props.firstname,
      lastname: props.lastname,
      phonenumber: props.phonenumber,
      role: props.role,
      message: props.message,
    };
    fetch("http://localhost:3001/messages", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      window.location.reload();
    });
  };

  return (
    <div>
      <div className="overlay"></div>
      <div className="popup">
        <h2>Your note:</h2>
        <p>
          First name: <span>{props.firstname}</span>
        </p>
        <p>
          Last name: <span>{props.lastname}</span>
        </p>
        <p>
          Phonenumber: <span>{props.phonenumber}</span>
        </p>
        <p>
          Message: <span>{props.message}</span>
        </p>
        <p>
          Role: <span>{props.role}</span>
        </p>
        <div>
          <button onClick={acceptHandler}>Yes, I am sure</button>
          <button onClick={closeHandler}>Nope, I don't want to post it</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
