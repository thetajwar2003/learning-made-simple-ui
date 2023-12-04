export function extractFileName(fullFileName: string) {
  // Split the string by the underscore character
  const parts = fullFileName.split("_");

  // Assume the actual file name starts from the second part
  // and rejoin the remaining parts back into a string
  const fileName = parts.slice(1).join("_");

  return fileName;
}
