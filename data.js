export const bio = [
    "Hello! I'm Shapon Sheikh, a passionate developer with over six years of experience in backend development, cloud architecture, DevOps practices, and data engineering, I am on the lookout for challenging opportunities that allow me to push the boundaries of backend development. My eagerness to delve deep into complex problems and extract valuable insights from data drives my professional journey.",
];

export const skills = [
    {
        title: "Languages",
        skillName: "Python, JavaScript, Golang",
    },
    {
        title: "Backend Frameworks",
        skillName: "FastAPI, Django, Flask, AWS Lambda, Langchain",
    },
    {
        title: "Databases",
        skillName: "PostgreSQL, MongoDB, Redis, DynamoDB, MySQL, Aurora",
    },
    {
        title: "Big Data Frameworks",
        skillName: "Apache Spark, Kafka",
    },
    {
        title: "Control system & documentation",
        skillName: "GitHub, JIRA, Bitbucket, Confluence",
    },
    {
        title: "Cloud Services",
        skillName: "Serverless, Eventbridge, API Gateway, Lambda, Cognito, S3, SNS, CloudFront, VPC",
    },
    {
        title: "Containerization",
        skillName: "Docker, ECS, Fargate",
    },
    {
        title: "Workflow Management",
        skillName: "Airflow, Step Functions",
    },
    {
        title: "IaC",
        skillName: "CDK, SAM, Terraform",
    },
    {
        title: "Web Development",
        skillName: "Ajax, HTML, CSS, Bootstrap",
    },
    {
        title: "Dashboarding Tools",
        skillName: "Apache Superset, Kibana, Grafana",
    },
];

export const projects = {
    softwareProjects: [
        {
            projectName: "Pizza Ordering ChatBot",
            image: "images/pizzaorderchatbot.png",
            summary:
                "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
            preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
            techStack: ["Dailogflow", "Firebase"],
        }
    ],
    freelanceProjects: [
        {
            projectName: "SnylloAir.com",
            image: "images/snylloair.png",
            summary:
                "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
            preview: "https://www.snylloair.com/",
            techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
        }
    ],
};

export const experience = [
    {
        title: "Python Backend Engineer",
        duration: "June 2023 – May 2024",
        subtitle: "ICS Inc. (via Upwork contract)",
        details: [
            `Developed a scalable data processing pipeline using Apache Spark and Azure Data Lake for real-time data ingestion, batch processing, and stream analytics.`,
            `Integrated Twilio APIs for SMS and voice calls, managed webhooks and events and used FastAPI for backend integration.`,
            `Leveraged Apache Spark to process large datasets in Azure Data Lake, enabling scalable data analytics and transformation.`,
            `Enhanced data security and compliance during sensitive information processing with Apache Spark and Azure Data Lake.`,
            `Optimized PostgreSQL database design, including schema modifications, indexing strategies, and performance tuning, using Jupyter Notebook for data manipulation and analysis.`,
            `Guided high-traffic environments and background job processing using Redis for caching and Celery with RabbitMQ for efficient asynchronous task execution.`
        ],
        tags: [
            "Python", "Data Engineering", "FastAPI", "PostgreSQL", "Redshift", "AWS", "Apache Spark", "Azure Data Lake"
        ],
        icon: "briefcase",
    },
    {
        title: "Senior Software Developer (Backend, Python)",
        duration: "Feb 2022 – Sep 2023",
        subtitle: "Yo Tech Ltd.",
        details: [
            `Designed and developed scalable, efficient backend systems with Python, Django, and FastAPI frameworks.`,
            `Mentored and trained junior developers in best practices for software development, code quality, and project management with Git code checking and merging to the core branch.`,
            `Evaluated and adopted new technologies and tools to improve system performance, maintainability, and scalability.`,
            `Handled queues and background tasks and utilized prioritization techniques and proper handling of DLQs.`,
            `Implemented Apache Spark jobs to run on Azure Databricks, optimizing data processing workflows by utilizing the robust storage capabilities of Azure Data Lake for improved performance and reliability.`,
            `Collaborated with DevOps engineers to manage infrastructure and ensure high availability and reliability of backend systems.`
        ],
        tags: [
            "Python",
            "MongoDB",
            "Optimization",
            "Django",
            "FastAPI",
            "Azure"
        ],
        icon: "briefcase",
    },
    {
        title: "Sr. Executive in IT",
        duration: "April 2018 – Sep 2021",
        subtitle: "Profile Ltd.",
        details: [
            `Spearheaded the design, deployment, and optimization of serverless applications on AWS, leveraging the platform's capabilities for scalable and efficient solutions.`,
            `Demonstrated coding proficiency by developing Python scripts for serverless functions and integrations, enhancing the functionality and responsiveness of services. `,
            `Excelled in monitoring and troubleshooting, quickly addressing system issues to maintain optimal performance and reliability. `,
            `Crafted secure and scalable cloud architectures, ensuring solutions are resilient and adaptable to changing business needs. `,
            `Committed to thorough documentation, keeping detailed records of infrastructure designs and deployment procedures to support clarity and continuity.`,
            `Dedicated to continuous learning and keeping abreast of the latest DevOps practices, trends, and tools to drive innovation and improve deployment strategies.`
        ],
        tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
        icon: "briefcase",
    },
    {
        title: "Web Application Developer",
        duration: "Feb 2016 – March 2018",
        subtitle: "Trade Corporation",
        details: [
            `Fostered cross-functional collaboration, engaging with diverse teams to clarify project requirements and deliver superior solutions.`,
            `Proactively evaluated and integrated new technologies and tools, driving system enhancements and fostering innovation.`,
            `Spearheaded performance optimization, employing various strategies to boost application efficiency.`,
            `Engaged in agile development practices, contributing to daily standups, sprint planning, and retrospectives, promoting team agility and continuous improvement.`,
            `Vigilantly monitored system performance, diagnosing and rectifying issues promptly to maintain and enhance system reliability.`,
        ],
        tags: ["JavaScript", "ReactJS", "Bootstrap", "HTML", "Django", "MySQL"],
        icon: "briefcase",
    },
];

export const education = [
    {
        title: "B.Sc in Information Technology",
        duration: "2015 - 2019",
        subtitle: "International Open University, IOU",
        details: [],
        tags: [
            "Data Structures & Algorithms",
            "Operating Systems",
            "Database Management System",
            "Computer Networks",
            "Compiler Designing",
            "Cloud Computing",
        ],
        icon: "graduation-cap",
    },
    {
        title: "Class 12th, HSC",
        duration: "",
        subtitle: "Board of Secondary Education, Sylhet",
        details: [],
        tags: [],
        icon: "book",
    },
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "Stackoverflow",
                link: "https://stackoverflow.com/users/9711215/shapon-sheikh",
            },
            {
                text: "GitHub",
                link: "https://github.com/ssheikhorg",
            },
            {
                text: "LeetCode",
                link: "https://leetcode.com/u/ssheikhorg/",
            },
        ],
    },
    {
        label: "Links",
        data: [
            {
                text: "Linkedin",
                link: "https://www.linkedin.com/in/ssheikhorg",
            },
            {
                text: "Skype",
                link: "https://join.skype.com/invite/y0REwjXskcXT",
            }
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Made with &hearts; by Shapon Sheikh.",
            "&copy; No Copyrights. Feel free to use this template.",
        ],
    },
];
