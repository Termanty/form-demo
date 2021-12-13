import { Component } from "react";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "Teacher",
    message: "",
    showPopup: false,
    messages: [],
  };

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  popupHandler = (event) => {
    event.preventDefault();
    this.setState({ showPopup: true });
  };

  componentDidMount() {
    fetch("http://localhost:3001/messages")
      .then((res) => res.json())
      .then((data) => this.setState({ messages: data }));
  }

  render() {
    const messageList = this.state.messages.map((e) => (
      <p className="message" key={e.id}>
        {`${e.message} by ${e.role} ${e.firstname} ${e.lastname}`}
      </p>
    ));
    return (
      <div className="main">
        <div className="form-and-view">
          <Form change={this.inputHandler} submit={this.popupHandler} />
          <View {...this.state} />
          {this.state.showPopup && <Popup {...this.state} />}
        </div>
        {messageList}
      </div>
    );
  }
}

export default App;
