import { useState } from "react";

export default function Resume(){
  return (
    <div className="resume bg-white m-10 h-5/6 w-full">
      <div className="m-10">
        <h1 className="text-black text-4xl font-bold mb-4">Keenan Aldridge</h1>
        <p>Aiea, Hawaii (Open to Remote) | (404) 576-8138 | kmantan@gmail.com</p>
        <a className="text-black m-0" href="linkedin.com/in/keenanaldridge">linkedin.com/in/keenanaldridge   |</a>
        <a className="text-black ml-2" href="github.com/kmantan">github.com/kmantan</a>
        <h2 className="resume-h2">TECHNICAL SKILLS</h2>
        <p><strong>Front End</strong> | JavaScript (ES5 and ES6/Modern JS), React, TailwindCSS, NextJS, HTML5, CSS3, TypeScript, jQuery</p>
        <p><strong>Back End</strong> | Node.js, Express, PostgreSQL, MongoDB, MySQL, RESTful API Development</p>
        <p><strong>Testing/Deployment</strong> | Jest, Mocha, Chai, AWS: EC2 / RDS / S3, K6, loader.io, NewRelic, CICD, NGINX, Docker</p>
        <p><strong>Developer Tools</strong> | Vim, Git, npm, Webpack, Agile Methodology</p>
        <h2 className="resume-h2">SOFTWARE ENGINEERING APPLICATIONS</h2>
        <div className="resume-item">
          <p><strong>Full Stack Engineer</strong> | My Health Coach | https://github.com/kmantan/charmander-front-end</p>
          <p>2023</p>
        </div>
        <p className="text-black"><em>Fitness and Nutrition tracking application</em> | Express / PostgreSQL / EC2 / TailwindCSS / TypeScript / Docker</p>
        <ul className="list-disc ml-10 mr-10">
          <li>Designed and built database for storing/returning nutritional information and user food diaries utilizing PostgreSQL and Docker</li>
          <li>Integrated nutritional API for food search functionality</li>
          <li>Created food diary that allows users to add foods, edit portion sizes, and relay total daily calorie counts</li>
          <li>Utilized Github CICD with testing for deployment to Amazon EC2</li>
        </ul>
        <div className="resume-item">
          <p><strong>Back End Engineer</strong> | Atelier API Extension | https://github.com/rpp2204-sdc-caprese/product-overview</p>
          <p>2022</p>
        </div>
        <p className="text-black"><em>Back End for Refactored Atelier Store</em> | Express / PostgreSQL / EC2 / NGINX / K6 / loader.io / NewRelic</p>
        <ul className="list-disc ml-10 mr-10">
          <li>Transformed CSVs with millions of rows of product data (ETL pipeline) and imported to PostgreSQL</li>
          <li>Implemented RESTful API that shaped product data to be returned to customer</li>
          <li>Horizontally scaled EC2 service with load balancing by increasing instances and cached with NGINX based on
            loader.io and NewRelic bottleneck data which increased throughput by 78% while maintaining the same response
            time</li>
          <li>Delivered product data to user at over 3725RPS at {'<'} 97ms with a 0% error rate</li>
        </ul>
        <div className="resume-item">
          <p><strong>Front End Engineer</strong> | Project Atelier | https://github.com/kmantan/Atelier</p>
          <p>2022</p>
        </div>
        <p className="text-black"><em>Refactored Legacy Front-End for e-commerce store</em> | React / Express / Jest / Node.js</p>
        <ul className="list-disc ml-10 mr-10">
          <li>Built ratings and reviews widget that allowed users to upload photos and give feedback on products</li>
          <li>Designed reusable scorecard that displayed average ratings and customer reviews using React and React Hooks</li>
          <li>Created reporting system for helpful or inappropriate reviews</li>
        </ul>
        <h2 className="resume-h2">PROFESSIONAL EXPERIENCE</h2>
        <div className="resume-item">
          <p><strong>Call Center Coordinator</strong> | DTRIC</p>
          <p>2013-2023</p>
        </div>
        <ul className="list-disc ml-10 mr-10">
          <li>Quality Control (Audit endorsements, Review calls and renewals)</li>
          <li>Train 4 new hires/year and provide continuous training for staff</li>
          <li>Maintain tracking logs and performance spreadsheets to identify areas of improvement and develop personalized
            growth plans.</li>
        </ul>
        <div className="resume-item">
          <p><strong>Crew</strong> | Tropical Ocean Sports</p>
          <p>2012-2013</p>
        </div>
        <ul className="list-disc ml-10 mr-10">
          <li>Instructed 50+ Japanese customers daily of activities and safety guidelines in Japanese</li>
          <li>Led 50+ snorkel excursions with customers, showed points of interest while maintaining safe operating
            procedures</li>
          <li>Planned snorkeling activities and installed lifeguard station to ensure operations ran safely and enjoyably</li>
        </ul>
        <h2 className="resume-h2">EDUCATION</h2>
        <div className="resume-item">
          <p><strong>Certificate in Advanced Software Engineering,</strong> Hack Reactor</p>
          <p>2023</p>
        </div>
        <div className="resume-item">
          <p><strong>Coursework in Liberal Studies,</strong> Windward Community College</p>
          <p>2012</p>
        </div>
        <ul className="list-disc ml-10 mr-10">
          <li>Two years of Japanese language (reading, writing and speaking)</li>
        </ul>
      </div>
    </div>
      )
};