import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

const StudentGrades = ({ classCode, studentGrades }: any) => {
  const chartOptions = {
    scales: {
      x: {
        display: true, // Display the x-axis
        ticks: {
          color: 'white', // X-axis labels color
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // X-axis grid line color
        },
      },
      y: {
        display: true, // Display the y-axis
        ticks: {
          color: 'white', // Y-axis labels color
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Y-axis grid line color
        },
      },
      x1: {
        display: false, // Hide the second x-axis if it exists
      },
      y1: {
        display: false, // Hide the second y-axis if it exists
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // Legend text color
        },
      },
    },
  };

  // Function to convert letter grades to numerical values
  type Grade =
    | 'A+'
    | 'A'
    | 'A-'
    | 'B+'
    | 'B'
    | 'B-'
    | 'C+'
    | 'C'
    | 'C-'
    | 'D+'
    | 'D'
    | 'D-'
    | 'F';

  const convertGradeToNumber = (grade: Grade): number => {
    switch (grade) {
      case 'A+':
        return 4.0;
      case 'A':
        return 3.8;
      case 'A-':
        return 3.7;
      case 'B+':
        return 3.5;
      case 'B':
        return 3.0;
      case 'B-':
        return 2.7;
      case 'C+':
        return 2.3;
      case 'C':
        return 2.0;
      case 'C-':
        return 1.7;
      case 'D+':
        return 1.3;
      case 'D':
        return 1.0;
      case 'D-':
        return 0.7;
      case 'F':
        return 0.0;
      default:
        return 0.0; // Or some default value
    }
  };

  // Prepare data for the bar chart (individual assignment grades)
  const barChartData = {
    labels: studentGrades?.grades.map((grade: any) => grade.title),
    datasets: [
      {
        label: 'Grades',
        data: studentGrades?.grades.map((grade: any) =>
          convertGradeToNumber(grade.grade)
        ),
        backgroundColor: 'rgb(117,254,255)',
      },
    ],
  };

  // Prepare data for the line chart (grade trend)
  const lineChartData = {
    labels: studentGrades?.grades.map(
      (_: any, index: any) => `Assignment ${index + 1}`
    ),
    datasets: [
      {
        label: 'Grade Trend',
        data: studentGrades?.grades.map((grade: any) =>
          convertGradeToNumber(grade.grade)
        ),
        fill: false,
        borderColor: 'rgb(117,254,255)',
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <div className='p-2 w-full flex m-2'>
        <div className='w-1/2 p-4'>
          <Bar data={barChartData} options={chartOptions} />
        </div>
        <div className='w-1/2 p-4'>
          <Line data={lineChartData} options={chartOptions} />
        </div>
      </div>

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
                    studentGrades.grades.map((grade: any, index: any) => (
                      <tr
                        key={index}
                        className='hover:bg-gray-700 cursor-pointer rounded-lg'
                      >
                        <td className='py-2 px-4'>
                          <a href='#' className='block text-white'>
                            {grade.title}
                          </a>
                        </td>
                        <td className='py-2 px-4'>
                          <a href='#' className='block text-white'>
                            {grade.description}
                          </a>
                        </td>
                        <td className='py-2 px-4 flex justify-center'>
                          <a href='#' className='block text-white'>
                            {grade.grade}
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentGrades;
