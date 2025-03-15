import { ALLOWED_FILE_TYPES, ALLOWED_MIME_TYPES } from "./constants";

export const getAllowedFileTypesString = (): string =>
  ALLOWED_FILE_TYPES.reduce((acc, curr) => `${acc}, ${curr}`);

export const handleClientSideFileUpload = (
  event: React.ChangeEvent<HTMLInputElement>
): void => {
  const file = event.target.files?.[0];
  if (!file) {
    console.error("fail to import file.");
    return;
  }

  if (!ALLOWED_MIME_TYPES.includes(file.type)) {
    console.log("不支援的檔案格式");
    return;
  }

  console.log(`檔案名稱： ${file.name}`);
  console.log(`檔案類型： ${file.type}`);
  console.log(`檔案大小： ${file.size}`);
};
