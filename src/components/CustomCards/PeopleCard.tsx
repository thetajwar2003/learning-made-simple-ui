import Link from 'next/link'
import React from 'react'


interface PeopleCardProps {
    id: string
    cognitoId: string
    name: string
    dob: string
    email: string
    profilePictureURL: string
    courses: string[]
    classCode: string
}


export default function PeopleCard({ id,cognitoId, name, dob, email, profilePictureURL, courses, classCode }: PeopleCardProps) {
  return (
    <Link href={`/teacher/${classCode}/grade/${id}`} passHref>
        <button className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-primary border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src="https://dummyimage.com/80x80"
            />
            <div className="flex-grow">
              <h2 className="text-white title-font font-medium">{name}</h2>
              <p className="text-gray-400">{id}</p>
              <p className="text-gray-400">{email}</p>
            </div>
          </div>
        </button>
    </Link>
  );
}



