'use client'
import React, { useState } from 'react'

export default function Tabs() {
    const [currentTab, setCurrentTab] = useState("posts")

    const handleTab = (tab: string) => {
        switch (tab) {
            case "assignments":
                setCurrentTab("assignments")
                break;

            case "students":
                setCurrentTab("students")
                break;

            case "grades":
                setCurrentTab("grades")
                break;
            default:
                setCurrentTab("posts")
                break;
        }
    }
    const highlighted = "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider border-indigo-500 bg-gray-800 text-white rounded-t"
    const normal = "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-800 hover:text-white tracking-wider"

    return (
        <>
            <div className="flex mx-auto flex-wrap mb-20">
                <button onClick={() => { handleTab("posts") }} className={currentTab == "posts" ? highlighted : normal}>
                    Posts
                </button>
                <button onClick={() => { handleTab("assignments") }} className={currentTab == "assignments" ? highlighted : normal}>
                    Assignments
                </button>
                <button onClick={() => { handleTab("students") }} className={currentTab == "students" ? highlighted : normal}>
                    Students
                </button>
                <button onClick={() => { handleTab("grades") }} className={currentTab == "grades" ? highlighted : normal}>
                    Grades
                </button>
            </div>
        </>
    )
}
