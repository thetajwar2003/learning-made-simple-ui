export type LoginInputs = {
  email: string;
  password: string;
};

export type StudentLoginType = {
  email: string;
  password: string;
  school: string;
  major: string;
  guardianName: string;
  guardianNumber: string;
};

export type TeacherLoginType = {
  email: string;
  password: string;
  school: string;
  department: string;
};
