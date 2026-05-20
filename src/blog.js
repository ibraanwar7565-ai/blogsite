const blog = {
  title: "My Personal Blog",
  author: "Ibrahim Anwar",
  about: "Welcome to my personal blog! I'm a software developer passionate about web development, React, and building things on the internet. Here I share my thoughts, tutorials, and projects.",
  articles: [
    {
      id: 1,
      title: "Getting Started with React",
      date: "May 1, 2026",
      content:
        "React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components. In this post, we explore the basics of React and how to set up your first project."
    },
    {
      id: 2,
      title: "Understanding Props in React",
      date: "May 8, 2026",
      content:
        "Props are how components talk to each other. When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object — the props. This post dives deep into how props work and best practices for using them."
    },
    {
      id: 3,
      title: "Component Composition Patterns",
      date: "May 15, 2026",
      content:
        "React has a powerful composition model that lets you reuse code between components. In this article we look at containment, specialization, and other patterns that help you build flexible and reusable component trees."
    }
  ]
};

export default blog;
