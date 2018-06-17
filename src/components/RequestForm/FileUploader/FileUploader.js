import React from "react";
import "./FileUploader.css";
import { Icon, Upload, message } from "antd";
const Dragger = Upload.Dragger;

const uploadProps = {
  name: "file",
  multiple: true,
  action: "//jsonplaceholder.typicode.com/posts/",
  onChange(info) {
    const status = info.file.status;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
};

const FileUploader = () => {
  return (
    <Dragger {...uploadProps}>
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">
        (Coming Soon) Click or drag file(s) this area to upload
      </p>
    </Dragger>
  );
};

export default FileUploader;
