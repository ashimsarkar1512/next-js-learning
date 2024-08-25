import React from 'react';

const page = ({params}) => {

            const {title,description}=blogs.find(blog=>blog.slug==params.slug)
            return (
                        <div className='h-screen'>
                            <h5>{title}</h5>
                            <h5>{description}</h5>
                        </div>
            );
};
const  blogs=[
            {
              "slug": "introduction-to-javascript",
              "title": "Introduction to JavaScript",
              "description": "Learn the basics of JavaScript, the programming language of the web."
            },
            {
              "slug": "react-hooks-overview",
              "title": "React Hooks Overview",
              "description": "An in-depth look at React Hooks, a powerful feature for managing state and side effects in functional components."
            },
            {
              "slug": "nodejs-express-tutorial",
              "title": "Node.js and Express.js Tutorial",
              "description": "A comprehensive guide to building web applications using Node.js and Express.js."
            },
            {
              "slug": "mongodb-database-introduction",
              "title": "Introduction to MongoDB",
              "description": "Explore the basics of MongoDB, a popular NoSQL database for modern web applications."
            },
            {
              "slug": "tailwind-css-styling",
              "title": "Styling with Tailwind CSS",
              "description": "Learn how to style your web applications using Tailwind CSS, a utility-first CSS framework."
            },
            {
              "slug": "nextjs-server-side-rendering",
              "title": "Server-Side Rendering with Next.js",
              "description": "An introduction to server-side rendering in Next.js, a popular React framework."
            },
            {
              "slug": "responsive-web-design",
              "title": "Responsive Web Design",
              "description": "Master the principles of responsive web design to create web pages that look great on any device."
            },
            {
              "slug": "git-version-control",
              "title": "Version Control with Git",
              "description": "Learn how to manage your code using Git, the most widely used version control system."
            },
            {
              "slug": "api-development-with-express",
              "title": "API Development with Express",
              "description": "Build RESTful APIs using Express.js, a fast and minimalist web framework for Node.js."
            },
            {
              "slug": "introduction-to-cloud-computing",
              "title": "Introduction to Cloud Computing",
              "description": "Understand the fundamentals of cloud computing and its impact on modern software development."
            }
          ]


export default page;