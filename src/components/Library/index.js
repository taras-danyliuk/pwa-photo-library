import React, { Component } from "react";
import axios from "axios";
import "./Library.css";


class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      loading: true
    }
  }

  componentDidMount() {
    this.getAllImages();
  }

  getAllImages() {
    axios.get(
      `https://api.cloudinary.com/v1_1/tarasdanyliuk/resources/image/tags/photo-library`,
      {
        auth: {
          username: '476686951152938', password: '8i5H2Iwv6rnpaCTRg9s_k4eOloM'
        }
      },
    ).then((data) => {
        console.log(data);
      })
      .catch((error) => {
        alert("Sorry, we encountered an error uploading your image");
        this.setState({ "uploading": false });
      });
  }




  render() {
    return (
      <div className="library-module">
        library
      </div>
    )
  }
}

export default Library;
