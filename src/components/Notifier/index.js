import React, { Component } from "react";
import "./Notifier.css";
import classnames from 'classnames';

class Notifier extends Component {
  render() {
    const notifyclass = classnames('notify', {
      danger: this.props.offline
    });

    let text = null;
    if (this.props.offline) {
      text = (
        <p><em>
          CloudyCam is offline! Your images will be saved now and then uploaded to
          your Cloudinary Media Library once your internet connection is back up.
        </em></p>
      )
    }

    return (
      <div className={notifyclass}>
        { text }
      </div>
    );
  }
}

export default Notifier;
