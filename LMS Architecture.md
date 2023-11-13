# High Level Component Diagram

---

The client-side components are represented by Next.js and Amplify, serving as the user interface and front-end logic. These clients interact with the back-end services hosted on Amazon Web Services (AWS). AWS Cognito is employed for user authentication, ensuring secure access to the application. The API Gateway acts as a centralized entry point, managing and routing requests from the clients to the corresponding AWS Lambda functions. Lambdas, in turn, are serverless functions that execute specific business logic, providing a scalable and event-driven architecture. DynamoDB serves as the NoSQL database, storing and retrieving data for the application. This component diagram illustrates the seamless flow of data and functionalities between the client-side components and the AWS services, demonstrating a robust and scalable architecture for the application.

![component-diagram](./public/component-diagram.jpeg)

# Flow Chart

---

LMS starts with a landing page that guides individuals to a secure login process. Once authenticated, users are prompted to specify their role as either a student or teacher. For students, there is a personalized dashboard, with an enrollment modal for course registration. The dashboard lists all the courses a student is currently taking. Each course has pages with tabs for posts, homework, classwork, a list of classmates. Teachers has a similar dashboard with a course creation modal. The teacher dashboard lists all courses/sections a teacher is currently teaching along with tabs for posts, classwork, homework, and a comprehensive students list. The students lists for each course allows the teacher to individually select a student and gain insights into their academic performance.

![flow-chart](./public/flow-chart.png)
