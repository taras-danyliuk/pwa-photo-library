import React, { Component } from "react";
import "./App.css";
import ClCamera from "./components/ClCamera";
import Library from "./components/Library";
import Notifier from "./components/Notifier";


class App extends Component {
  constructor() {
    super();
    this.state = {
      offline: false
    }
  }

  componentDidMount() {
    window.addEventListener("online", () => {
      this.setState({ offline: false });
    });

    window.addEventListener("offline", () => {
      this.setState({ offline: true });
    });
  }

  componentDidUpdate() {
    let offlineStatus = !navigator.onLine;
    if (this.state.offline !== offlineStatus) {
      this.setState({ offline: offlineStatus });
    }
  }

  render() {
    return (
      <div className="App">
        <Notifier offline={this.state.offline}/>

        <header className="App-header">
          <h1 className="App-title">Photo Library</h1>
        </header>

        { this._renderCamera() }
      </div>
    );
  }

  _renderCamera() {
    return <ClCamera offline={this.state.offline}/>
  }
}

export default App;
