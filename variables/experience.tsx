import { JSX } from "react";

export type PositionType = {
  title: string;
  from: string;
  to: string;
  isPresent: boolean;
  description: JSX.Element;
  media: string[];
};

export type ExperienceType = {
  company: string;
  img: string;
  type: "Full Time" | "Freelance";
  positions: PositionType[];
};

const experiences: ExperienceType[] = [
  {
    company: "Sekolah.mu",
    img: "sekolahmu.png",
    type: "Full Time",
    positions: [
      {
        title: "Frontend Engineer",
        from: "07/2025",
        to: "",
        isPresent: true,
        description: (
          <div className="text-muted-foreground text-justify">
            <p className="mb-2">
              After transitioning from my previous full stack role, I&apos;ve
              shifted my focus to frontend development, contributing to a
              large-scale rewrite of our core platform into a modular super app
              designed for scalability and flexibility.
            </p>
            <p className="mb-2">My key contributions include:</p>
            <ul className="!list-disc pl-8 mb-2">
              <li>
                Playing a major role in developing a modular frontend
                architecture, enabling independent deployment and maintenance of
                platform features.
              </li>
              <li>
                Implementing responsive and accessible UI components based on
                detailed Figma designs provided by the design team.
              </li>
              <li>
                Coordinating with backend engineers, product managers, and
                designers to ensure alignment on technical specifications,
                usability, and delivery timelines.
              </li>
              <li>
                Supporting the refinement and application of our internal design
                system, promoting UI consistency across modules including (but
                not limited to) Nuxt Layers, State Management, strict type
                checking, etc.
              </li>
            </ul>
            <p>
              This position builds on my previous full stack experience and
              allows me to apply my broader product understanding to create
              better-aligned and more efficient frontend solutions using Nuxt 3,
              TypeScript, and modern web practices.
            </p>
          </div>
        ),
        media: [],
      },
      {
        title: "Full Stack Engineer",
        from: "09/2022",
        to: "07/2025",
        isPresent: false,
        description: (
          <div className="text-muted-foreground text-justify">
            <p className="mb-2">
              I am responsible for the end-to-end development, implementation,
              and maintenance of features within an online assessment management
              platform. My work has directly contributed to the success of
              high-profile clients like Bank Indonesia, helping to generate over
              €1.4M in revenue in 2024.
            </p>
            <p className="mb-2">My key contributions include:</p>
            <ul className="!list-disc pl-8 mb-2">
              <li>
                Spearheaded end to end development, including the creation of a
                reusable design system that improved team efficiency and ensured
                UI consistency.
              </li>
              <li>
                Developing and maintaining an internal NPM package for reusable
                assets, streamlining development workflows across multiple
                repositories.
              </li>
              <li>
                Integrating Google Gemini AI to automate video transcription,
                significantly improving platform accessibility.
              </li>
              <li>
                Working closely with product managers and designers to have a
                more efficient sprint planning and feature delivery.
              </li>
            </ul>
            <p>
              This work was built on a strong technical foundation using PHP
              Laravel, Golang, Nuxt 3, TypeScript, MySQL, and AWS S3.
            </p>
          </div>
        ),
        media: [
          "https://dthfdbabbttkfwqxlpqv.supabase.co/storage/v1/object/public/assets/sekolahmu-fs-1.png",
          "https://dthfdbabbttkfwqxlpqv.supabase.co/storage/v1/object/public/assets/sekolahmu-fs-2.png",
          "https://dthfdbabbttkfwqxlpqv.supabase.co/storage/v1/object/public/assets/sekolahmu-fs-3.png",
          "https://dthfdbabbttkfwqxlpqv.supabase.co/storage/v1/object/public/assets/sekolahmu-fs-4.png",
        ],
      },
    ],
  },
  {
    company: "Sumber Cahaya (Local Automotive Garage)",
    img: "sc.png",
    type: "Freelance",
    positions: [
      {
        title: "Full Stack Engineer",
        isPresent: false,
        from: "10/2023",
        to: "01/2024",
        description: (
          <div className="text-muted-foreground text-justify">
            <p className="mb-2">
              I developed a full-featured web application for a local car repair
              shop, handling everything from backend architecture to frontend
              interface. The system supports end-to-end management of
              transactions, products, and customer data with built-in access
              control and reporting features.
            </p>

            <p className="mb-2">
              Key features and my responsibilities include:
            </p>
            <ul className="!list-disc pl-8 mb-2">
              <li>
                Built complete CRUD functionality for managing transactions,
                products, and customers, with Role-Based Access Control (RBAC).
              </li>
              <li>
                Integrated automated invoice generation and printing to
                streamline day-to-day operations.
              </li>
              <li>
                Created interactive charts to visualize transaction trends and
                business insights.
              </li>
              <li>
                Designed and developed the application from scratch using
                Node.js, Fastify, TypeScript, MikroORM, Next.js, Redux, MySQL,
                and SCSS.
              </li>
            </ul>
          </div>
        ),
        media: [],
      },
    ],
  },
  {
    company: "Feedloop.io",
    img: "feedloop.png",
    type: "Full Time",
    positions: [
      {
        title: "Backend Engineer",
        isPresent: false,
        from: "06/2021",
        to: "09/2022",
        description: (
          <div className="text-muted-foreground text-justify">
            <p className="mb-2">
              As a backend engineer, I led the backend development team for
              Qore, a low-code platform inspired by frameworks like Hasura and
              Supabase. I was responsible for designing and maintaining
              scalable, secure systems using modern backend technologies, while
              also contributing to enterprise readiness and client success.
            </p>

            <p className="mb-2">My key contributions include:</p>
            <ul className="!list-disc pl-8 mb-2">
              <li>
                Designed and maintained the backend system using Node.js,
                Fastify, TypeScript, and Mikro ORM, with PostgreSQL managing
                tables, views, triggers, and functions.
              </li>
              <li>
                Implemented Row-Level Security (RLS) and Role-Based Access
                Control (RBAC) policies in PostgreSQL to enforce fine-grained
                access control.
              </li>
              <li>
                Contributed to securing enterprise deals worth up to €115,000 by
                supporting security assessments and addressing client data
                protection requirements.
              </li>
              <li>
                Utilized a modern backend stack including REST APIs, Redis, and
                PostgreSQL to deliver reliable and performant services.
              </li>
              <li>
                Maintained the CI/CD pipeline using GitHub Actions and Google
                Cloud Compute Engine.
              </li>
            </ul>
          </div>
        ),
        media: [],
      },
    ],
  },
  {
    company: "Government of Indonesia",
    img: "govt.png",
    type: "Freelance",
    positions: [
      {
        title: "Full Stack Engineer",
        isPresent: false,
        from: "04/2021",
        to: "06/2021",
        description: (
          <div className="text-muted-foreground text-justify">
            <p className="mb-2">
              I built a custom web application for managing administrative
              workflows across departments, focusing on document handling,
              automation, and ease of use. The project was designed and
              developed entirely from scratch.
            </p>

            <p className="mb-2">
              Key features and my responsibilities include:
            </p>
            <ul className="!list-disc pl-8 mb-2">
              <li>
                Implemented full CRUD functionality for managing administrative
                records and documents.
              </li>
              <li>
                Integrated the Google Drive API to securely store and retrieve
                uploaded documents.
              </li>
              <li>
                Developed automated PDF invoice generation and printing features
                to streamline administration.
              </li>
              <li>
                Built the entire application using Node.js, Express.js,
                PostgreSQL, React, and Redux.
              </li>
            </ul>
          </div>
        ),
        media: [],
      },
    ],
  },
];

export default experiences;
