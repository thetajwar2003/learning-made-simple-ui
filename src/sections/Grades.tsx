import React from "react";
import grades from "@/mock/grades.json";
import StudentGrades from "@/components/CustomCards/StudentGrades";
import TeacherGrades from "@/components/CustomCards/TeacherGrades";
import { usePathname } from "next/navigation";
import { extractRole } from "../../utils/extractFromString";

const userType: string = "Student"; // Change to 'Teacher' for testing the teacher view
const currentStudentID = "STU#001"; // Current student ID (for testing)

const Grades = ({ classCode }: any) => {
  const pathname = usePathname();
  const role = extractRole(pathname);

  const studentGrades = grades.find(
    (item) => item.studentID === currentStudentID
  );

  return (
    <>
      {role === "student" && (
        <StudentGrades classCode={classCode} studentGrades={studentGrades} />
      )}
      {role === "teacher" && (
        <TeacherGrades classCode={classCode} allGrades={grades} />
      )}
    </>
  );
};

export default Grades;
