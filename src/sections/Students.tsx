import React from 'react'
import students from "../mock/student.json"
import PeopleCard from '@/components/CustomCards/PeopleCard'


interface CourseProps {
    classCode: string;
  }

export default function Students({ classCode }: CourseProps) {
  return (
    <>
    {students.map((s,index)=>(<PeopleCard key={index} {...s} classCode={classCode}/>))}
    </>
  )
}
