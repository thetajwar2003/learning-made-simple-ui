import React from 'react'
import grades from '@/mock/grades.json';


const currentStudentID = 'STU#001';
const classCode = 'stu001'
export default function  StudentIdPage() {
    const studentGrades = grades.find(
        item => item.studentID === currentStudentID
      );
    
      return (
        <div className='p-2 w-full'>
          <div className='w-full p-4 rounded-lg border-2 border-secondary flex flex-col relative overflow-hidden'>
            <div className='flex items-center justify-between'>
              <div className='flex-grow'>
                <h2 className='text-white title-font text-[1.5rem] mb-2'>
                  Grades for course: {classCode}
                </h2>
                <table className='w-full'>
                  <thead>
                    <tr>
                      <th className='text-left'>Assignment</th>
                      <th className='text-left'>Description</th>
                      <th className='flex justify-center'>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentGrades &&
                      studentGrades.grades.map((grade: any, index) => (
                        <tr key={index}>
                          <td className='py-2'>{grade.title}</td>
                          <td className='py-2'>{grade.description}</td>
                          <td className='py-2 flex justify-center'>
                            {grade.grade}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
}
