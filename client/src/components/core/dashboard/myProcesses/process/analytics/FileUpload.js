import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadStatus: false
        };
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload(ev) {
        console.log(ev);
        ev.preventDefault();
        console.log('testi');
        const data = new FormData();
        console.log(data);
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);
        console.log(data);

        axios
            .post('http://localhost:3000/upload', data)
            .then(function(response) {
                console.log(data);
                this.setState({
                    uploadStatus: true
                });
            })
            .catch(function(error) {
                console.log(error);
            });
        console.log(this.filename);
        console.log('test2');
        console.log(data);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleUpload}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            ref={ref => {
                                this.uploadInput = ref;
                            }}
                            type="file"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            className="form-control"
                            ref={ref => {
                                this.fileName = ref;
                            }}
                            type="text"
                            placeholder="Optional name for the file"
                        />
                    </div>

                    <button className="btn btn-success" type="text">
                        Upload
                    </button>
                </form>
            </div>
        );
    }
}

export default FileUpload;
