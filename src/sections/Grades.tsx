import React from 'react';
import grades from '@/mock/grades.json';
import StudentGrades from '@/components/CustomCards/StudentGrades';
import TeacherGrades from '@/components/CustomCards/TeacherGrades';

const userType: string = 'Teacher'; // Change to 'Teacher' for testing the teacher view
const currentStudentID = 'STU#001'; // Current student ID (for testing)

const Grades = ({ classCode }: any) => {
  const studentGrades = grades.find(
    item => item.studentID === currentStudentID
  );

  return (
    <>
      {userType === 'Student' && (
        <StudentGrades classCode={classCode} studentGrades={studentGrades} />
      )}
      {userType === 'Teacher' && (
        <TeacherGrades classCode={classCode} allGrades={grades} />
      )}
    </>
  );
};

export default Grades;
