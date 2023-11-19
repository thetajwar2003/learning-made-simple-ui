# High Level Component Diagram

---

The system architecture integrates client-side components, primarily Next.js and Amplify, with Amazon Web Services (AWS) to create a robust and scalable application framework. These front-end elements provide the user interface and logic, seamlessly interacting with the back-end services hosted on AWS.

User authentication managed is by AWS Cognito, ensuring protected access. Requests from the client applications are funneled through the API Gateway, which acts as a centralized entry point. This setup allows efficient management and routing of requests to the appropriate AWS Lambda functions. These Lambdas are serverless computing elements, executing specific business logic in an event-driven manner, contributing to the system's scalability and efficiency.

At the core of the data management is DynamoDB, Amazon's NoSQL database service. It handles data storage and retrieval, underpinning the application with a flexible and highly available data layer. The overall system architecture, as depicted in the component diagram, showcases the seamless integration and flow of data and functionalities between the client-side components and the AWS services. This integration highlights the system's capability to support a dynamic, efficient, and scalable application environment.

![component-diagram](./public/component-diagram.jpeg)

# Entity Diagram

The entity-relationship diagram for the educational platform presents a detailed schema that integrates various interconnected entities: Cognito, Teacher, Student, Course, Post, Classwork, and Homework. Central to this structure is the 'Cognito' table, which underpins user authentication, defined by attributes such as email and password. This table is integral to the identification of both 'Teacher' and 'Student' entities.

The 'Teacher' entity, linked through the Cognito ID, encompasses personal details like name and date of birth, along with an array of associated courses they instruct. This mirrors the 'Student' entity, which also includes a Cognito ID and personal information, but instead focuses on an array of courses in which the student is enrolled.

The 'Course' table is a critical component, detailing elements such as course code, name, term, teacher, class time, and arrays categorizing students, posts, classwork, and homework. Each course acts as a nexus, connecting teachers, students, and various academic materials.

Further detailing the platform's functionality, the 'Post' table captures the essence of user-generated content, recording data like post ID, date posted, user ID, and submission links. This parallels the structure of the 'Classwork' and 'Homework' tables, which store specific academic details, including file URLs, to manage and link academic materials effectively within the platform.

Overall, this ER diagram intricately illustrates the complex and multifaceted relationships and attributes that constitute the educational platform, showcasing how each entity plays a pivotal role in creating a comprehensive and organized educational environment.

![er-diagram](./public/entity-diagram.png)

# Flow Chart

The Learning Management System (LMS) is designed to offer an intuitive and efficient user experience for both students and teachers. It begins with a welcoming landing page that leads users to a secure login process. Upon successful authentication, users are given the choice to identify their role - either as a student or a teacher, shaping their subsequent journey within the platform.

For students, the LMS presents a personalized dashboard equipped with an enrollment modal, enabling them to register for courses. This dashboard is the central hub, listing all the courses in which the student is currently enrolled. Each course is further detailed on its own page, featuring tabs for posts, homework, classwork, and a list of classmates, thus creating a comprehensive and organized learning environment.

On the other hand, teachers are greeted with a similar yet distinct dashboard that includes a course creation modal, essential for managing different sections and curricula. The teacher’s dashboard meticulously lists all the courses they are teaching, complete with tabs for posts, classwork, homework, and a detailed student list. This student list is particularly pivotal, as it allows teachers to select individual students to monitor and assess their academic performance, providing a crucial tool for personalized education management.

Overall, the LMS is structured to facilitate a seamless and user-friendly experience, tailored to the specific needs and roles of students and teachers. This thoughtful design ensures that each user can navigate the platform effectively, engaging with the educational content and tools in a way that enhances their learning or teaching experience.

![flow-chart](./public/flow-chart.png)
