export type LoginInputs = {
  email: string;
  password: string;
};

export interface StudentLoginType {
  name: string;
  dob: string; // "2000-01-01"
  email: string;
  password: string;
  school: string;
  profilePic: FileList;
}

export type TeacherLoginType = {
  email: string;
  password: string;
  school: string;
  department: string;
  profilePic: FileList;
};

export type UserLoginType = {
  email: string;
  password: string;
};
