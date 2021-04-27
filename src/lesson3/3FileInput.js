import React from 'react'
class FileInput extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('提交的名字' + this.fileInput.current.files[0].name);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Upload file:
                    <input type="file" ref={this.fileInput} />
                </label>
                <button type="submit">Submit</button>

            </form>
        )
    }
}

export default FileInput