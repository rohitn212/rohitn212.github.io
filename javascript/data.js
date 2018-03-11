var info = {
    basic_info: {
        name: {
        first: 'Rohit',
        last: 'Nambiar'
        },
        address: {
            unit: '1429',
            street: 'W Lexington Street',
            city: 'Chicago',
            state: 'IL',
            zip: '60607'
        },
        email: 'rohit43212@gmail.com',
        phone: '(312) 479-1296',
        summary: 'I am a senior majoring in Computer Science at University of Illinois at Chicago (UIC). I am interested in backend programming and technologies that will be relevant in the future.'
    },
    links: {
        linkedIn: 'rohit-nambiar',
        github: 'rohitn212'
    },
    education: {
        university_name: 'University of Illinois at Chicago (UIC)',
        degree: 'Bachelor of Science in Computer Science',
        graduation_date: 'December 2018',
        coursework: ['Object Oriented Programming', 'Cloud Computing', 'Software Engineering', 'Video Game Design']
    },
    skills: {
        languages: ['Java', 'Python', 'Go', 'C++', 'HTML', 'CSS', 'jQuery', 'JavaScript', 'MySQL', 'C#', 'C'],
        tools: ['Android Studio', 'Unity3D', 'SQL Server', 'Gradle', 'SBT', 'Jacoco', 'AWS', 'Docker', 'JIRA', 'Jenkins', 'Git']
    },
    experience: [
        {
            employer: 'Blue Apron', 
            location: 'New York, New York', 
            position: 'Software Engineering Intern', 
            start_date: 'June 2017', 
            end_date: 'August 2017',
            description: [
                'Developer Systems', ['Worked extensively on the Go-based command line tool for Blue Apron', 'Built on the custom Blue Apron build and configuration system', 'Wrote a bot that regulates work requests submitted via Jira'],
                'Site Reliability Engineering', ['Automated on-boarding and off-boarding process for employees', 'Created build pipelines for apps on Jenkins', 'Collected and transferred metrics from Traefik to DataDog']
            ]
        },
        {
            employer: 'NT Global Solutions', 
            location: 'Cochin, India', 
            position: 'Software Engineering Intern', 
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
            name: 'CTA Ridership Analysis',
            language: 'C#, MySQL',
            link: 'CTARidershipAnalysis',
            description: [
                'Designed a program that displays detailed information about the CTA in an interactive GUI'
            ]
        },
        {
            name: 'Realm',
            language: 'C#, Unity3D',
            link: 'Realm',
            description: [
                'Created a full-fledged, third-person, puzzle game in a team of 3',
                'Oversaw visual and sound effects, level design, puzzle design'
            ]
        },
    ]
};

function loadInfo() {
    return info;    
}