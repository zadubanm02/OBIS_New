import React from "react";
import cryptojs from "crypto-js";
import axios from "axios";

export default class Decryption extends React.Component {
  state = {
    message: "",
    key: "",
    decryptedMessage: "",
    _id: "",
    messageForDecryption: "",
    decryptionKey: "",
    isLoading: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  postDataToDatabase = e => {
    e.preventDefault();
    const { message, key, _id } = this.state;
    this.setState({ isLoading: true });
    axios
      .post("/messages", {
        message,
        key
      })
      .then(this.setState({ isLoading: false }))
      .then(response => {
        console.log(response);
        console.log(response.data);
        console.log(response.data._id);
        this.setState({ _id: response.data._id });
        axios.get(`/messages/${this.state._id}`).then(res => {
          console.log(res.data);
          const encryptedData = res.data;
          this.setState({
            decryptedMessage: cryptojs.AES.decrypt(
              encryptedData.message,
              encryptedData.key
            ).toString(cryptojs.enc.Utf8)
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
              <label for="message">Encypted Message</label>
            </div>
            <div class="input-field col s6">
              <input
                id="key"
                type="text"
                name="key"
                onChange={this.handleChange}
              />
              <label for="key">Decryption Key</label>
            </div>
            <label>Kľúc, podľa ktorého sa dešifruje tvoja správa</label>
            <br />
            <input type="submit" value="Dešifrovať" class="btn  waves-light" />
          </form>
        </div>
        <div>
          <div
            class="card-panel grey lighten-5"
            style={{ borderBottom: "1px solid #62BBB1" }}
          >
            Dešifrovaná správa : {decryptedMessage}
          </div>
        </div>
      </div>
    );
  }
}
