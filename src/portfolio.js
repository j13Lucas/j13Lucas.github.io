const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://j13Lucas.github.io/',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jerry Lucas',
  role: 'Computer Vision Engineer',
  description:
  "Hello! I'm Jerry 👋 , a passionate Computer Vision enthusiast. With a solid foundation in computer science and a keen interest in the realms of machine learning and AI, I am currently deepening my knowledge and skills in the specialized field of Computer Vision. Although I'm early in my professional journey, I've always been intrigued by the capability of machines to 'see' and 'understand' their surroundings. Recognizing the transformative potential of this technology across various industries, from healthcare to autonomous vehicles, I am dedicated to utilize it’s power to create solutions that can make a real difference in people's lives",
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/j13lucas/',
    github: 'https://github.com/j13Lucas',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Sunglasses Filter Using OpenCV',
    description:
      'Apply sunglasses filter on video/webcam as input',
    stack: ['Python', 'OpenCV'],
    sourceCode: 'https://github.com/j13Lucas/Sunglasses',
    livePreview: 'https://example.com',
  },
  {
    name: 'Object Detection And Tracking',
    description:
      'Detect Object and track it through video/webcam input',
    stack: ['Python', 'OpenCV'],
    sourceCode: 'https://github.com/j13Lucas/ObjectDetectionAndTracking',
    livePreview: 'https://example.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'OpenCV',
  'PyTorch',
  'Keras'.
  'HTML',
  'CSS',
  'JavaScript',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jerry.lucas@gmail.com',
}

export { header, about, projects, skills, contact }
