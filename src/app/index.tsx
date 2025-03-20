"use client";

import {
  getAllowedFileTypesString,
  handleClientSideFileUpload,
} from "@/_lib/utils";
import { FileProvider, useFile } from "@/_contexts/FileContext";
import CustomErrorBoundary from "@/_components/CustomErrorBoundary";

const FileUpload = () => {
  const { file, setFile } = useFile();
  console.log(file);

  return (
    <>
      <input
        type="file"
        accept={getAllowedFileTypesString()}
        onChange={(event) => {
          const currentFile = handleClientSideFileUpload(event);
          if (currentFile) setFile(currentFile);
        }}
      />
    </>
  );
};

const Index = () => {
  return (
    <CustomErrorBoundary>
      <FileProvider>
        <div>
          <FileUpload />
        </div>
      </FileProvider>
    </CustomErrorBoundary>
  );
};

export default Index;
