import courses from '../../mock/courses.json';

function Courses() {
  return (
    <div className='p-4 sm:ml-64'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
        {courses.map((course, index) => (
          <div
            key={index}
            className='max-w-sm bg-white border border-gray-200 rounded-lg shadow'
          >
            <a href='#'>
              <img
                className='rounded-t-lg'
                src={course.bannerURL}
                alt={course.courseName}
              />
              <div className='p-4'>
                <h3 className=' text-2xl font-bold tracking-tight text-gray-900'>
                  {course.courseName}
                </h3>
                <p className='text-gray-700 font-bold'>{course.courseCode}</p>
                <p className='text-gray-700'>{course.teacher}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;