import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface TeacherGradesProps {
  classCode: string;
  allGrades: any[];
}

const TeacherGrades = ({ classCode, allGrades }: TeacherGradesProps) => {
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

  const calculateAverageGrades = (): any[] => {
    const assignmentGrades: any = {};

    allGrades.forEach((student: any) => {
      student.grades.forEach((grade: any) => {
        if (!assignmentGrades[grade.assignmentID]) {
          assignmentGrades[grade.assignmentID] = {
            title: grade.title,
            description: grade.description,
            total: 0,
            count: 0,
          };
        }
        const numericGrade = convertGradeToNumber(grade.grade);
        assignmentGrades[grade.assignmentID].total += numericGrade;
        assignmentGrades[grade.assignmentID].count += 1;
      });
    });

    return Object.values(assignmentGrades).map((assignment: any) => ({
      ...assignment,
      average: (assignment.total / assignment.count).toFixed(2),
    }));
  };

  const averageGrades = calculateAverageGrades();

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

  // Prepare data for the bar chart (average grades)
  const barChartData = {
    labels: averageGrades.map(grade => grade.title),
    datasets: [
      {
        label: 'Average Grades',
        data: averageGrades.map(grade => grade.average),
        backgroundColor: 'rgb(117,254,255)',
      },
    ],
  };

  // Prepare data for the line chart (grade trend)
  const lineChartData = {
    labels: averageGrades.map((_, index) => `Assignment ${index + 1}`),
    datasets: [
      {
        label: 'Grade Trend',
        data: averageGrades.map(grade => grade.average),
        fill: false,
        borderColor: 'rgb(117,254,255)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <div className='p-2 w-full flex m-2'>
        <div className='w-1/2 p-4'>
          <Bar data={barChartData} options={chartOptions} />
        </div>
        <div className='w-1/2 p-4'>
          <Line data={lineChartData} options={chartOptions} />
        </div>
      </div>

      <div className='w-full p-4 rounded-lg border-2 border-secondary flex flex-col relative overflow-hidden'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='text-left'>Assignment</th>
              <th className='text-left'>Description</th>
              <th className='flex justify-center'>Average Grade</th>
            </tr>
          </thead>
          <tbody>
            {averageGrades.map((grade, index) => (
              <tr
                key={index}
                className='hover:bg-gray-700 cursor-pointer rounded-lg'
              >
                <td className='py-2 px-4'>{grade.title}</td>
                <td className='py-2 px-4'>{grade.description}</td>
                <td className='py-2 px-4 flex justify-center'>
                  {grade.average}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherGrades;
