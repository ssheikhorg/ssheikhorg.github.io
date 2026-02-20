export const bio = [
    "Hello! I'm Sheikh Shapon, a passionate developer with over six years of experience in backend development, cloud architecture, DevOps practices, and data engineering, I am on the lookout for challenging opportunities that allow me to push the boundaries of backend development. My eagerness to delve deep into complex problems and extract valuable insights from data drives my professional journey.",
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
        title: "Data Science & Machine Learning",
        skillName: "Pandas, NumPy, Scikit-Learn, TensorFlow, PyTorch, Keras, Deep Learning, NLP, Time Series Analysis",
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
            projectName: "Ticket Buy Back",
            image: "images/tbb.png",
            summary:
                "Ticket Buyback is the only service that provides an instant, guaranteed sale price for your tickets. No need for constant pricing adjustments or worry that your tickets will not sell.",
            preview: "https://www.ticketbuyback.com/",
            techStack: ["FastAPI", "PostgreSQL", "Redis", "AWS Lambda", "AWS S3", "AWS Cognito", "ElasticSearch", "AWS CloudFront", "AWS API Gateway", "AWS EventBridge"],
        }
    ],
    freelanceProjects: [
        // {
        //     projectName: "SnylloAir.com",
        //     image: "images/snylloair.png",
        //     summary:
        //         "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
        //     preview: "https://www.snylloair.com/",
        //     techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
        // }
    ],
};

export const experience = [
    {
        title: "Backend Engineer with AI Integration (remote)",
        duration: "May 2025 – November 2025",
        subtitle: "The Insight Company (New York, USA via Upwork)",
        details: [
            `Develop, maintain backend systems that integrate AI models (OpenAI, Gemini, Claude) with cloud services (AWS).`,
            `Use Python to automate and streamline AI model deployments, ensure smooth interaction with cloud.`,
            `Focus on building secure and scalable solutions that leverage AI for enhanced user experiences.`,
            `Work closely with AI and cloud teams to ensure successful integration and performance optimization.`
        ],
        tags: [
            "Python", "FastAPI", "PostgreSQL", "GenAI", "AWS", "Langchain"
        ],
        icon: "briefcase",
    },
    {
        title: "Senior Backend Developer (remote)",
        duration: "Oct 2024 – Apr 2025",
        subtitle: "Torrance Analytics LLC (California, USA via Upwork)",
        details: [
            `Designed and implemented RESTful APIs using FastAPI for operations, user management, and transaction processing for ticketbuyback.com.`,
            `Optimized database schemas and queries in PostgreSQL for large-scale data processing.`,
            `Integrated Elasticsearch to enable advanced filtering features for a better user experience.`,
            `Developed serverless functions using AWS Lambda to handle ticket validation, price offer calculations, and fraud detection workflows.`,
            `Scraped data from other sites related to tickets, events and concerts and ensured a scheduler to fetch and save them on the database timely basis`
        ],
        tags: [
            "Python", "Data Engineering", "FastAPI", "PostgreSQL", "Redshift", "AWS"
        ],
        icon: "briefcase",
    },
    {
        title: "Python Backend Engineer (remote)",
        duration: "Jun 2023 – Aug 2024",
        subtitle: "ICS Inc. (Chicago, USA via Upwork)",
        details: [
            `Engineered a scalable data pipeline in Azure Data Lake for real-time data ingestion.`,
            `Built backend services with Golang and integrated Twilio APIs for automated notifications.`,
            `Procsseed large datasets with Apache Spark in Azure Data Lake for improved analytics.`,
            `Enhanced PostgreSQL performance through indexing and performance tuning.`,
            `Optimized background job processing with Redis and Celery for better system reliability`
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
        "title": "M.Sc in Big Data Science and Technology",
        "duration": "2024 - 2025",
        "subtitle": "University of Bradford",
        "details": [],
        "tags": [
            "Big Data Analytics",
            "Machine Learning",
            "Data Mining",
            "Distributed Systems",
            "Cloud Computing",
            "Artificial Intelligence",
            "Data Visualization"
        ],
        "icon": "graduation-cap"
    },
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
    }
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
            "Made with &hearts; by Shapon.",
            "&copy; No Copyrights. Feel free to use this template.",
        ],
    },
];
