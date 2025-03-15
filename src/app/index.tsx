"use client";

import {
  getAllowedFileTypesString,
  handleClientSideFileUpload,
} from "@/_lib/utils";

const FileUpload = () => {
  return (
    <input
      type="file"
      accept={getAllowedFileTypesString()}
      onChange={handleClientSideFileUpload}
    />
  );
};
const Index = () => {
  return (
    <div>
      <FileUpload />
    </div>
  );
};

export default Index;
