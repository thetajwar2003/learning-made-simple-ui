import React from "react";
import Header from "@/components/Header";
import Link from "next/link";

// Example resource data - replace with real data
const resources = [
  {
    title: "Educational Best Practices",
    description:
      "A comprehensive guide on modern educational techniques and strategies.",
    link: "/resources/educational-best-practices",
  },
  {
    title: "E-learning Tools and Software",
    description:
      "Reviews and comparisons of various e-learning tools and software.",
    link: "/resources/e-learning-tools",
  },
  {
    title: "Curriculum Development Tips",
    description:
      "Expert advice on developing engaging and effective curriculums.",
    link: "/resources/curriculum-development",
  },
  // ...add more resources as needed
];

export default function Resources() {
  return (
    <>
      <main className=" bg-black text-white p-24 mb-96">
        <div className="container mx-auto">
          <h1 className="title-font text-4xl md:text-7xl mb-8 font-medium text-center">
            Resources
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-32">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="flex flex-col bg-gray-800 p-6 rounded-lg"
              >
                <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
                <p className="mb-4">{resource.description}</p>
                <Link href="#" className="text-primary hover:text-secondary">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
