import React from "react";
import cryptojs from "crypto-js";
import axios from "axios";

export default class Encryption extends React.Component {
  state = {
    message: "",
    key: "",
    encryptedMessage: "",
    decryptedMessage: "",
    isLoading: false,
    isLoaded: false,
    _id: "",
    messageForDecryption: "",
    decryptionKey: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  postDataToDatabase = e => {
    e.preventDefault();
    const { message, key, _id } = this.state;
    this.setState({ isLoading: true });
    axios
      .post("messages", { message, key })
      .then(this.setState({ isLoading: false }))
      .then(response => {
        console.log(response);
        console.log(response.data);
        console.log(response.data._id);
        this.setState({ _id: response.data._id });
        axios.get(`messages/${this.state._id}`).then(res => {
          console.log(res.data);
          const encryptedData = res.data;
          this.setState({
            encryptedMessage: cryptojs.AES.encrypt(
              encryptedData.message,
              encryptedData.key
            ).toString()
          });
        });
      });
  };

  render() {
    const { encryptedMessage, decryptedMessage, _id } = this.state;
    return (
      <div>
        <div className="card-panel grey lighten-5">
          <form onSubmit={this.postDataToDatabase}>
            <div class="input-field col s6">
              <input
                id="message"
                type="text"
                name="message"
                onChange={this.handleChange}
              />
              <label for="message">Message</label>
            </div>
            <div class="input-field col s6">
              <input
                id="key"
                type="text"
                name="key"
                onChange={this.handleChange}
              />
              <label for="key">Key</label>
            </div>
            <label>Kľúč, podľa ktorého sa zašifruje tvoja správa</label>
            <br />
            <input
              type="submit"
              value="Zašifrovať"
              class="btn  waves-light"
              style={{ backgroundColor: "#EE6E73" }}
            />
          </form>
        </div>
        <div>
          <div
            class="card-panel grey lighten-5"
            style={{ borderBottom: "1px solid #EE6E73" }}
          >
            Zašifrovaná správa : {encryptedMessage}
          </div>
        </div>
      </div>
    );
  }
}
