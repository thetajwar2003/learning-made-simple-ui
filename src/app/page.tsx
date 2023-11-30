import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          {/* SECTION: Title */}
          <div className="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left items-center text-center">
            <h1
              className="title-font sm:text-4xl md:text-7xl mb-4 font-medium text-white"
              id="landing-title"
            >
              Where you can find all your classroom needs
            </h1>
            <p className="mb-8 leading-relaxed" id="brief-bio">
              A comprehensive learning management system that combines the best
              features of Blackboard, Google Classroom, Pupil Path, and
              Microsoft Teams into a single, user-friendly interface
            </p>
            <Link
              href="/login"
              className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg "
              id="login-button"
            >
              Log In
            </Link>
          </div>
          {/* SECTION: Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
              id="large-logo"
            />
          </div>
        </div>
      </main>
    </>
  );
}
