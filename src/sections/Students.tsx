import React from 'react'
import students from "../mock/student.json"
import PeopleCard from '@/components/CustomCards/PeopleCard'
export default function Students() {
  return (
    <>
    {students.map((s,index)=>(<PeopleCard key={index} {...s}/>))}
    </>
  )
}
