import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { projectStorage } from "../firebase/config.js";
import { addUrl } from "../utils/be-utils.js";
const types = ["image/png", "image/jpeg"];

export default class UploadForm extends Component {
  state = {
    file: null,
    error: null,
    url: null,
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.file !== this.state.file) {
      await this.uploadHandler();
      await addUrl(this.state.url);
      // try {
      //   await addUrl(this.state.url);
      // } catch (error) {
      //   this.setState({ error });
      // }
      await this.props.fetchUrls();
    }
  }
  uploadHandler = async () => {
    const { file } = this.state;
    const storageRef = projectStorage.ref(file.name);

    await storageRef.put(file);
    const url = await storageRef.getDownloadURL();
    this.setState({ url });
  };

  fileHandler = (e) => {
    let file = e.target.files[0];
    if (file && types.includes(file.type)) {
      this.setState({ file });
      this.setState({ error: "" });
    } else {
      this.setState({ file: null });
      this.setState({ error: "Please select a valid file type" });
    }
  };
  render() {
    return (
      <>
        <Form>
          <Form.Group>
            <Form.File
              onChange={this.fileHandler}
              id="form-image-upload"
              label="upload image"
            />
          </Form.Group>
        </Form>
      </>
    );
  }
}
