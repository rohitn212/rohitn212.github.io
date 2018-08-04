var info = {
    basic_info: {
        name: {
        first: 'Rohit',
        last: 'Nambiar'
        },
        email: 'rohit43212@gmail.com',
        phone: '(312) 479-1296',
        summary: 'I am an international senior completing a Bachelor in Computer Science at University of Illinois at Chicago (UIC). I am interested in fullstack and backend programming.'
    },
    links: {
        linkedIn: 'rohit-nambiar',
        github: 'rohitn212'
    },
    education: {
        university_name: 'University of Illinois at Chicago (UIC)',
        degree: 'Bachelor of Science in Computer Science',
        graduation_date: 'December 2018',
        coursework: ['Computer Algorithms', 'Software Engineering', 'Object Oriented Programming', 'Cloud Computing', 'Computer Networking', 'Video Game Design']
    },
    skills: {
        languages: ['Java', 'C#', 'MySQL', 'Python', 'JavaScript', 'HTML', 'CSS', 'Go', 'C++', 'C'],
        frameworksAndLibraries: ['MVC', '.Net', 'LINQ', 'REST', 'Entity Framework', 'Dapper', 'jQuery', 'React', 'Redux', 'Node.js']
    },
    experience: [
        {
          employer: 'Spreetail',
          location: 'Lincoln, Nebraska',
          position: 'Software Engineering Intern (Full Stack)',
          start_date: 'May 2018',
          end_date: 'August 2018',
          description: [
              ['Provided web features and support to business analysts and account managers', 'Designed and implemented the backend API for a new self-contained service that manages orders', 'Communicated with stakeholders to update the new item order process following marketplace changes', 
              'Created prototypes to test potential features and implemented them as new services in production', 'Improved runtime of business-oriented software services by optimizing performance of SQL queries']
          ]
        },
        {
            employer: 'Blue Apron', 
            location: 'New York, New York', 
            position: 'Software Engineering Intern (Backend)', 
            start_date: 'June 2017', 
            end_date: 'August 2017',
            description: [
                ['Worked extensively on the Go-based command line tool for Blue Apron', 'Automated on-boarding and off-boarding process for employees', 'Helped make developers life easier by writing a Python bot that filtered Jira tickets', 'Built on the custom Blue Apron build and configuration system']
            ]
        },
        {
            employer: 'NT Global Solutions', 
            location: 'Cochin, India', 
            position: 'Software Engineering Intern (Backend)', 
            start_date: 'June 2016', 
            end_date: 'August 2016',
            description: [
                'Found key performance indicators from a database of call detail records using Java and SQL',
                'Tested local implementation of new software for fraud detection'
            ]
        }
    ],
    projects: [
        {
            name: 'Code Coverage Analysis',
            language: 'Java',
            link: 'Code-Coverage-Analysis',
            description: [
                'Generates basic code coverage reports using Jacoco which is then fed into MapReduce',
                'Uses Apache Hadoop MapReduce to output a detailed, sorted code coverage report',
                'Deployed on AWS EMR and AWS S3'
            ]
        },
        {
            name: 'Mutation Testing Tool',
            language: 'Java',
            link: 'Mutation-Testing',
            description: [
                'Validates whether a program’s tests detect potential runtime faults',
                'Creates mutations of code by injecting faults into the bytecode with the help of Javassist',
                'Compares and displays the changes of the execution trace between pre-mutation and post-mutation code'
            ]
        },
        {
            name: '8 tiles',
            language: 'Java',
            link: '8-Tiles',
            description: [
                'Java implementation of the 8 tiles game with a GUI, that generates a random 8-tile board',
                'User can either manually solve the board or program can auto solve at any point using A* algorithm'
            ]
        },
        {
            name: 'Recursive DNS Resolver',
            language: 'Python',
            link: 'Recursive-DNS-Resolver',
            description: [
                'Produces a summary of DNS information given a domain name',
                'Recursively queries DNS servers starting from root servers'
            ]
        },
        {
            name: 'CTA Ridership Analysis',
            language: 'C#, MySQL',
            link: 'CTARidershipAnalysis',
            description: [
                'Designed a program that displays detailed information about the CTA in an interactive GUI',
                'Designed using N-tier architecture to separate business logic and data-access into layers'
            ]
        }
    ]
};

function loadInfo() {
    return info;    
}