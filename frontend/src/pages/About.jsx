import React from "react";

const About = () => {
  return (
    <div className="p-4 rounded-lg bg-white dark:bg-gray-800 dark:text-white border-2 border-gray-300 dark:border-gray-700 m-4 shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row items-center mb-4">
        <div className="">
          <p className="text-lg font-semibold">Nikhil Nishad</p>
          <p className="mb-2">
            Full Stack Developer with expertise in MERN stack (MongoDB,
            Express.js, React, Node.js). Proven ability to design and develop
            scalable web applications with a strong focus on user experience and
            performance.
          </p>
          <p className="mb-2">
            Experienced in SEO, social media, and marketing strategies. Seeking
            a challenging role in a growth-driven organization to contribute to
            impactful projects.
          </p>
        </div>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Contact:</p>
        <p>Email: nikhilnishad1801@gmail.com</p>
        <p>Phone: +91 9312340496</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/nikhilnishad/"
            target="_blank"
            className="text-blue-500 dark:text-blue-400"
          >
            linkedin.com/in/nikhilnishad/
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/nikhil-nishad"
            target="_blank"
            className="text-blue-500 dark:text-blue-400"
          >
            github.com/nikhil-nishad
          </a>
        </p>
        <p>
          My Portfolio:{" "}
          <a
            href="https://nikhil-nishad-portfolio.netlify.app/"
            className="text-blue-500 dark:text-blue-400"
          >
            nikhil-nishad-portfolio.netlify.app/
          </a>
        </p>
      </div>
      <div className="mb-4">
        <p className="font-semibold">Education:</p>
        <p>
          Master's in Computer Applications, J.C. Bose University of Science and
          Technology, YMCA, Faridabad, Haryana (2023-2025)
        </p>
        <p>
          Bachelor's in Computer Applications, Maharshi Dayanand University,
          Rohtak, Haryana (2019-2022)
        </p>
      </div>
      <div>
        <p className="font-semibold">Skills:</p>
        <p>
          JavaScript, HTML, CSS, Node.js, React.js, PHP, C++, MySQL, MongoDB,
          Express.js, Laravel, Tailwind CSS, Git, AWS, Bootstrap
        </p>
      </div>
    </div>
  );
};

export default About;
