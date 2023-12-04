export function extractFileName(fullFileName: string) {
  // Split the string by the underscore character
  const parts = fullFileName.split("_");

  // Assume the actual file name starts from the second part
  // and rejoin the remaining parts back into a string
  const fileName = parts.slice(1).join("_");

  return fileName;
}

export function extractRole(path: string) {
  // Split the path by '/'
  const parts = path.split("/");

  // The role (teacher or student) should be in the second part of the array
  const role = parts[1];

  // Check if the role is either 'teacher' or 'student'
  if (role === "teacher" || role === "student") {
    return role;
  } else {
    return "Invalid role"; // or handle this case as you see fit
  }
}
