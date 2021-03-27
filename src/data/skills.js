const LEVELS = Object.freeze({
    basic: 1,
    good: 2,
    advanced: 3
});

const SKILLS = [
    {
        titleKey: "front",
        list: [
            {name: "Javascript", version: "11", level: LEVELS.advanced, logo: "javascript.png"},
            {name: "HTML", version: "5", level: LEVELS.advanced, logo: "html.png"},
            {name: "CSS", version: "3", level: LEVELS.advanced, logo: "css.svg"},
            {name: "React", version: "16", level: LEVELS.good, logo: "react.png"},
            {name: "Angular", version: "7", level: LEVELS.good, logo: "angular.png"},
            {name: "Vue.js", version: "2.6", level: LEVELS.good, logo: "vue.png"},
            {name: "Gatsby", version: "2.2", level: LEVELS.good, logo: "gatsby.png"},
            {name: "TypeScript", version: "4", level: LEVELS.good, logo: "typescript.png"},
            {name: "Sass", version: "1.2", level: LEVELS.good, logo: "sass.png"},
        ],
    },
    {
        titleKey: "back",
        list: [
            {name: "Java", version: "11", level: LEVELS.advanced, logo: "java.png"},
            {name: "Spring Boot", version: "2.3", level: LEVELS.advanced, logo: "springboot.png"},
            {name: "Spring", version: "5", level: LEVELS.good, logo: "spring.png"},
            {name: "Hibernate", version: "5.3", level: LEVELS.good, logo: "hibernate.png"},
            {name: "PostgreSQL", version: "", level: LEVELS.good, logo: "postgresql.webp"},
            {name: "MySQL", version: "", level: LEVELS.good, logo: "mysql.webp"},
            {name: "GraphQL", version: "", level: LEVELS.good, logo: "graphql.png"},
            {name: "MongoDB", version: "4.2", level: LEVELS.good, logo: "mongo.png"},
            {name: "ArangoDB", version: "3.6", level: LEVELS.good, logo: "arango.png"},
            {name: "RabbitMQ", version: "3.8", level: LEVELS.good, logo: "rabbitmq.webp"},
            {name: "NodeJS", version: "12", level: LEVELS.good, logo: "nodejs.png"},
            {name: "C", version: "C11", level: LEVELS.basic, logo: "C.webp"},
            {name: "Solidity", version: "0.6", level: LEVELS.basic, logo: "solidity.png"},
        ]
    },
    {
        titleKey: "devOps",
        list: [
            { name: "Git", version: "", level: LEVELS.advanced, logo: "git.webp" },
            { name: "GitFlow", version: "", level: LEVELS.good, logo: "gitflow.png" },
            { name: "Docker", version: "", level: LEVELS.good, logo: "docker.png" },
            { name: "GitLab CI/CD", version: "", level: LEVELS.good, logo: "gitlab.png" },
            { name: "Jenkins", version: "", level: LEVELS.good, logo: "jenkins.webp" },
            { name: "Flyway DB", version: "", level: LEVELS.good, logo: "flyway.png" },
            { name: "NPM", version: "", level: LEVELS.good, logo: "npm.png" },
            { name: "Maven", version: "", level: LEVELS.good, logo: "maven.png" },
        ]
    },
    {
        titleKey: "mobile",
        list: [
            {name: "Kotlin", version: "1.3", level: LEVELS.good, logo: "kotlin.png"},
            {name: "Android Studio", version: "4", level: LEVELS.basic, logo: "androidstudio.png"},
        ]
    },
    {
        titleKey: "other",
        list: [
            {name: "Trello", level: LEVELS.good, logo: "trello.png"},
            {name: "Jira", level: LEVELS.good, logo: "jira.png"},
            {name: "Scrum", level: LEVELS.good, logo: "scrum.png"},
            {name: "Kanban", level: LEVELS.good, logo: "kanban.png"},
            {name: "Linux", level: LEVELS.good, logo: "linux.png"},
            {name: "Bash", level: LEVELS.good, logo: "bash.png"},
            {name: "API REST", level: LEVELS.good, logo: "restapi.svg"},
            {name: "GitLab", level: LEVELS.good, logo: "gitlab.png"},
            {name: "TDD", level: LEVELS.good, logo: "jest.png"},
            {name: "Access", level: LEVELS.good, logo: "access.png"},
            {name: "Ethereum", level: LEVELS.good, logo: "ethereum.png"},
            {name: "Premiere", level: LEVELS.good, logo: "premiere.png"},
            {name: "Photoshop", level: LEVELS.good, logo: "photoshop.png"},
            {name: "Arduino", level: LEVELS.good, logo: "arduino.webp"},
        ]
    }
];

export default SKILLS;
