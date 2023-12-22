// import awsSVG from '../svgs/aws-2.svg'
// import cssSVG from '../svgs/css.svg'
// import firebaseSVG from '../svgs/firebase.svg'
// import flutterSVG from '../svgs/flutter.svg'
// import gitSVG from '../svgs/githubSvg.svg'
// import htmlSVG from '../svgs/html.svg'
// import jsSVG from '../svgs/javascript.svg'
// import nextSVG from '../svgs/next-js.svg'
// import nodeSVG from '../svgs/nodejs.svg'
// import reactSVG from '../svgs/reactJS.svg'
// import socketSVG from '../svgs/socket-io.svg'
// import tailwindSVG from '../svgs/tailwindCss.svg'
// import tsSVG from '../svgs/typescript.svg'

// export const skillsData  = [
//     {
//         title: "AWS",
//         subtitle: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
//         image: awsSVG
//     },
//     {
//         title: "React JS",
//         subtitle: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
//         image: reactSVG
//     },
//     {
//         title: "Next JS",
//         subtitle: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
//         image: nextSVG
//     },
//     {
//         title: "Flutter",
//         subtitle: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
//         image: flutterSVG
//     },
//     {
//         title: "JavaScript",
//         subtitle: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
//         image: jsSVG
//     },
//     {
//         title: "TypeScript",
//         subtitle: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
//         image: tsSVG
//     },
//     {
//         title: "HTML 5",
//         subtitle: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
//         image: htmlSVG
//     },
//     {
//         title: "CSS 3",
//         subtitle: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
//         image: cssSVG
//     },
//     {
//         title: "Firebase",
//         subtitle: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
//         image: firebaseSVG
//     },
//     {
//         title: "Node JS",
//         subtitle: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
//         image: nodeSVG
//     },
//     {
//         title: "Socket.io",
//         subtitle: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
//         image: socketSVG
//     },
//     {
//         title: "Git",
//         subtitle: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
//         image: gitSVG
//     },
//     // {
//     //     title: "Tailwind CSS",
//     //     subtitle: "Amazon Web Services, Inc. is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
//     //     image: tailwindSVG
//     // },

// ]

export const globals = {
    resumeLink: 'https://drive.google.com/file/d/1exj7t9keOreYFQg9C7Wp3AfadsIL9z0b/view?usp=sharing',
    photoLink: 'https://grootportfolio.s3.us-west-2.amazonaws.com/assets/Gaurav+Chopda.jpg',
    developerName: 'Gaurav Chopda',
    jobTitles: 'Full Stack Developer   |   AWS Solution Architect   |   Mobile App Developer',
    githubLink: 'https://github.com/GauravChopada',
    githubLinkTitle: 'github.com/GauravChopada',
    linkedinLinkTitle: 'linkedin.com/gaurav-chopada',
    linkedinLink: 'https://www.linkedin.com/in/gaurav-chopada/',
    mailId: 'Gauravrchopada65@gmail.com',
    mobileNo: '9737462950',
    freelancerLink: 'https://www.freelancer.in/u/GauravChopada=',
    freelancerLinkTitle: 'freelancer.in/GauravChopada',
    sendEmailAPI: 'https://gaurav-chopda-portfolio-server.vercel.app/send'
}

export const aboutMe = {
    location: 'Ahmedabad, India',
    locationLink: 'https://www.google.com/maps/place/Ahmedabad,+Gujarat/data=!4m2!3m1!1s0x395e848aba5bd449:0x4fcedd11614f6516?sa=X&ved=2ahUKEwj924L9ipaDAxXh4zgGHbvRBbAQ8gF6BAgQEAA',
    education: 'B.tech from D.D.U.',
    jobTitle: 'Software Engineer',
    aboutMe: 'I am a software developer with a passion for building cutting-edge and advanced applications. I have extensive knowledge in ReactJS, Flutter, and AWS Cloud. In addition to these, I am proficient in several other programming languages and technologies, and I possess excellent problem-solving skills. I thrive in a team environment and enjoy exploring new technologies on a daily basis.'
}
type TechStack = {
    Frontend: string[];
    Backend: string[];
    Database: string[];
    Devops: string[];
    Languages: string[];
    [key: string]: string[];
};


export const skillsData: TechStack = {
    Frontend: [
        'HTML',
        'CSS',
        'React Js',
        'Tailwind',
        'MUI',
        'Javascript',
        'Typescript',
        'Next Js 13',
    ],
    Backend: ['Node Js', 'Express Js', 'Python', 'GoLang', 'Fiber'],
    Database: ['MySql', 'PostgreSQL'],
    Devops: [
        'AWS',
        'Terraform',
        'Terragrunt',
        'Firebase'
    ],
    Languages: ['Python', 'GoLang', 'Javascript', 'Typescript'],
}

// export const allSkills = [
//     'HTML',
//     'CSS',
//     'React Js',
//     'Tailwind',
//     'MUI',
//     'Javascript',
//     'Typescript',
//     'Next Js 13',
//     'Node Js', 'Express Js', 'Python', 'GoLang', 'Fiber', 'MySql', 'PostgreSQL', 'AWS',
//     'Terraform',
//     'Terragrunt',
//     'Firebase', 'Python', 'GoLang'
// ]

export const allSkills = [
    'Frontend Developer',
    'Backend Developer',
    'AWS Solution Architect',
    'Mobile App Developer'
]

export const projectsDetails = {
    mainProjects: {
        tlynt: {
            title: 'TLYNT',
            techstack: ['React JS', 'Node JS', 'AWS', 'MySQL', 'TypeScript'],
            link: 'https://book.tlynt.com',
            image: 'https://grootportfolio.s3.us-west-2.amazonaws.com/assets/TLYNT.png',
            description: 'A dynamic digital platform for advertisers to identify and seamlessly book fresh REAL PEOPLE TALENT.',
            projectType: 'DESKTOP'
        },
        toyr: {
            title: 'T.O.Y.R.',
            description: "TOYR app is used to create personalized packages on users requirements. This app is aimed towards people who wants to go on trip but do not have proper direction or guidance. This app make user’s tour experience more easy and reliable. ",
            techstack: ['Flutter', 'Firebase', 'Google Maps API'],
            link: 'https://github.com/GauravChopada/TOYR',
            image: 'https://grootportfolio.s3.us-west-2.amazonaws.com/assets/TOYR.jpg',
            projectType: 'MOBILE'
        },
        redCarpet: {
            title: 'Red Carpet',
            description: 'It is an Internal project by Tech Holding for smoothing out onboarding-offboarding process of employees.',
            techstack: ['React JS', 'Node JS', 'AWS', 'PostgreSQL', 'JavaScript'],
            link: 'https://redcarpet.techholding.co',
            image: 'https://grootportfolio.s3.us-west-2.amazonaws.com/assets/Red+Carpet.png',
            projectType: 'DESKTOP'
        }
    },
    moreProject: [
        {
            title: 'Scribble',
            techstack: 'Flutter, Node JS, Socket.io',
            link: 'https://github.com/GauravChopada/Scribble'
        },
        {
            title: 'Netflix Clone',
            techstack: 'React JS, CSS',
            link: 'https://github.com/GauravChopada/Netflix-clone'
        },
        {
            title: 'Chat App',
            techstack: 'Flutter, Firebase Realtime Database',
            link: 'https://github.com/GauravChopada/ChitChat'
        }
    ]
}
