import React, { Component } from "react";
import UploadForm from "../components/UploadForm.js";
import Image from "../components/Image.js";
import { getUrls } from "../utils/be-utils.js";
export default class Gallery extends Component {
  state = {
    urls: [],
  };
  componentDidMount() {
    this.fetchUrls();
  }
  fetchUrls = () => {
    getUrls().then((urls) => this.setState({ urls: urls || [] }));
  };

  render() {
    return (
      <>
        <div>gallery</div>
        <UploadForm fetchUrls={this.fetchUrls} />
        {this.state.urls.length === 0 && <div>Nothing here...</div>}
        {this.state.urls.map((url) => {
          return <Image url={url.url} />;
        })}
      </>
    );
  }
}
