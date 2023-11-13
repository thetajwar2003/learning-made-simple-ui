# High Level Component Diagram

---

The client-side components are represented by Next.js and Amplify, serving as the user interface and front-end logic. These clients interact with the back-end services hosted on Amazon Web Services (AWS). AWS Cognito is employed for user authentication, ensuring secure access to the application. The API Gateway acts as a centralized entry point, managing and routing requests from the clients to the corresponding AWS Lambda functions. Lambdas, in turn, are serverless functions that execute specific business logic, providing a scalable and event-driven architecture. DynamoDB serves as the NoSQL database, storing and retrieving data for the application. This component diagram illustrates the seamless flow of data and functionalities between the client-side components and the AWS services, demonstrating a robust and scalable architecture for the application.

![component-diagram](./public/component-diagram.jpeg)

# Entity Diagram

---

This entity-relationship diagram outlines a comprehensive schema for an educational platform. The "Cognito" table manages user authentication with email and password attributes. The "Teacher" table includes a Cognito ID, personal details like name and date of birth, and an array of courses they teach. Similarly, the "Student" table features a Cognito ID, personal information, and an array of enrolled courses. The "Course" table encompasses essential details such as course code, name, term, teacher, class time, and arrays for students, posts, classwork, and homework. The "Post" table captures information about user-generated posts, including post ID, data posted, user ID, and submission links. Classwork and homework tables store details like file URLs, providing a structured framework for managing and associating academic materials within the platform.

![er-diagram](./public/entity-diagram.png)

# Flow Chart

---

LMS starts with a landing page that guides individuals to a secure login process. Once authenticated, users are prompted to specify their role as either a student or teacher. For students, there is a personalized dashboard, with an enrollment modal for course registration. The dashboard lists all the courses a student is currently taking. Each course has pages with tabs for posts, homework, classwork, a list of classmates. Teachers has a similar dashboard with a course creation modal. The teacher dashboard lists all courses/sections a teacher is currently teaching along with tabs for posts, classwork, homework, and a comprehensive students list. The students lists for each course allows the teacher to individually select a student and gain insights into their academic performance.

![flow-chart](./public/flow-chart.png)
