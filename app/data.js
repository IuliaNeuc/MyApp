import Tree from "./img/R.jpg";
import Edu from "./img/education.jpg";
import Skills from "./img/skills.jpg";
import Me from "./img/me.jpg";
import Exp from "./img/exp.jpg";
import Passion from "./img/passion.jpg";
import Art from "./img/art.jpg";
import Dreams from "./img/dreams.jpg";
import School from "./img/school.jpg";
import School2 from "./img/school2.jpg";
import School3 from "./img/teachers.jpg";
import School4 from "./img/frontSchool.jpg";
import School5 from "./img/medals.jpg";
import Sait from "./img/sait2.jpg";
import OOP from "./img/oop.jpg";
import WebDev from "./img/webDev.jpg";
import MobileApp from "./img/mobileApp.jpg";
import UXDesign from "./img/uxDesign.jpg";
import OS from "./img/OS.jpg";
import SoftwareSecurity from "./img/softwareSecurity.jpg";

export const infoCardsData = [
  {
    id: 1,
    title: "Education",
    description: "Southern Institute of Technology",
    imageUrl: Edu,
    buttonText: "Know More",
    buttonLink: "/screens/education",
  },
  {
    id: 2,
    title: "Experience",
    description: "Graduated Student",
    imageUrl: Exp,
    buttonText: "Know More",
    buttonLink: "/screens/experience",
  },
  {
    id: 3,
    title: "My Skills",
    description: "Learn all my professional skills",
    imageUrl: Skills,
    buttonText: "Know More",
    buttonLink: "/screens/skills",
  },
  {
    id: 4,
    title: "My Passion",
    description: "All about my hobbies",
    imageUrl: Passion,
    buttonText: "Know More",
    buttonLink: "/screens/passion",
  },
  {
    id: 5,
    title: "My Art",
    description: "Check out my art gallery",
    imageUrl: Art,
    buttonText: "Know More",
    buttonLink: "/screens/myArt",
  },
  {
    id: 6,
    title: "My Dreams",
    description: "What is my biggest dream",
    imageUrl: Dreams,
    buttonText: "Know More",
    buttonLink: "/screens/dreams",
  },

  // Add more card data as needed
];

export const aboutMeCardsData = [
  {
    id: 1,
    title: "Example Title",
    description: "Example Description",
    image: Tree,
  },
  {
    id: 2,
    title: "Example 2 Title",
    description: "Example 2 Description",
    image: Edu,
  },
  {
    id: 3,
    title: "Example 3 Title",
    description: "Example 3 Description",
    image: Skills,
  },
];

export const aboutMeData = {
  name: "Julia Juli",
  description:
    "Hey there, I'm Iulia, but most folks know me as Julia or Juli. I'm a multi-faceted individual with a myriad of interests. Professionally, I excel in mathematics and have a profound appreciation for chemistry. Yet, it's in the realm of art where I truly find solace, often losing myself in the strokes of a paintbrush. Sport holds a special place in my heart, with volleyball reigning as my favorite. There's something about the thrill of the game and the camaraderie it fosters that keeps me coming back for more.Music serves as my ultimate pick-me-up, acting as a potent remedy for any bout of gloominess. Its melodies have a way of lifting my spirits and carrying me through even the toughest of days. And then there's programming—an undeniable passion of mine. Whether it's crafting seamless user experiences or architecting robust backends, I find myself drawn to the world of web development. Among the myriad of tools at my disposal, React.js, Next.js, Tailwind CSS, and JavaScript stand out as my favorites. There's something immensely satisfying about bringing ideas to life through code, particularly when it involves shaping the frontend of a project. In essence, I'm a blend of logic and creativity, with an insatiable curiosity that propels me forward in both my personal and professional endeavors.",
  imageUrl: Me, // Can't find the path for some reason , fix it
  // Add more personal information as needed
};

//EDUCATION DATA

//Back Home Education

export const backHomeEducation = {
  name: "Liceul Teoretic Dimitrie Cantemir",
  desc: "Dimitrie Cantemir High School (Liceul Teoretic Dimitrie Cantemir) is a well-known high school located in Cahul, Moldova. It is named after Dimitrie Cantemir, a prominent Moldovan political figure, historian, and philosopher who lived in the 17th and 18th centuries. The school offers general education programs for students in various grades and is recognized for its academic achievements and cultural activities.  Dimitrie Cantemir High School is one of the leading educational institutions in Cahul and plays a significant role in the educational landscape of the region. It provides students with a comprehensive curriculum, extracurricular activities, and opportunities for personal and intellectual growth.",
  desc2:
    "In 2019, I graduated from Dimitrie Cantemir High School with honors, receiving the prestigious Golden Medal and Red Diploma. Throughout my academic journey, I demonstrated a strong passion and dedication for subjects such as Math, Chemistry, Computer Science, and Physics. These subjects not only fueled my intellectual curiosity but also shaped my academic pursuits and interests. The school provided a nurturing environment that fostered personal and intellectual growth, preparing students for success in higher education and beyond. My experience at Dimitrie Cantemir High School has left an indelible mark on my academic and personal development, laying a solid foundation for my future endeavors.",
  image1: School,
  image2: School2,
};

//Carousel for school pictures

export const carousel2 = [
  {
    id: 1,
    image: School,
  },
  {
    id: 2,
    image: School2,
  },
  {
    id: 3,
    image: School3,
  },
  {
    id: 4,
    image: School4,
  },
  {
    id: 5,
    image: School5,
  },
];

//Sait Education

export const saitEducation = {
  name: "Southern Institute of Technology",
  desc: " Situated in Calgary, Alberta, SAIT stands as a leading institution renowned for its practical approach to education since its inception in 1916. Offering an extensive range of programs spanning engineering technology, business, health sciences, and more, SAIT prioritizes hands-on learning and industry relevance. Through strong industry partnerships and a commitment to innovation, SAIT ensures graduates are equipped with the skills and experiences needed to thrive in today's dynamic workforce. With a vibrant campus community and a focus on excellence in technical education, SAIT continues to empower students to succeed and make meaningful contributions to their fields and beyond.",
  desc2:
    " I graduated from SAIT on April 26th, 2024, completing the Software Development Program. During my time at SAIT, I delved into a comprehensive curriculum covering Object Oriented Programming, Introductory Networking, Technical Communication, Mathematics, Web Development, UX/UI Design, Critical Thinking, Software Analysis, Software Projects, Testing and Deployment, and Software Security. Beyond the classroom, I gained invaluable practical experience collaborating with a team to develop real-world applications for clients, further enhancing my skills and preparing me for the challenges of the software industry. More details about my projects and experiences are outlined below.",
  image: Sait,
};

export const saitEducationCards = [
  {
    id: 1,
    title: "OOP",
    description: "What did I learn !?",
    imageUrl: OOP,
    modalTitle: "Object Oriented Programming",
    modalDescription:
      " For Object-Oriented Programming, I delved into various programming languages, including Python, C#, .NET Maui, and Java. Throughout the course, we explored the fundamentals of OOP concepts, delving into topics such as inheritance, encapsulation, and polymorphism. Our projects ranged from developing simple backend operations to creating basic applications. I found Python to be particularly intuitive, and I feel confident in my ability to utilize its features effectively. However, I encountered some challenges with Java and C#, particularly in grasping more advanced concepts and syntax intricacies. Despite these challenges, I'm continuously working to improve my skills in both languages.",
  },
  {
    id: 2,
    title: "Web Development",
    description: "What Can I do?",
    imageUrl: WebDev,
    modalTitle: "Web Development Course",
    modalDescription:
      "Throughout the Web Development Course, I delved into a comprehensive array of technologies, including HTML, CSS, JavaScript, and a multitude of CSS frameworks such as Tailwind CSS, Bootstrap CSS, and Daisy UI. Additionally, I immersed myself in the world of React JS and Next.js, where I gained practical experience in building both frontend and backend applications. Leveraging tools like Next.js, Tailwind CSS, Firebase, and Daisy UI, I honed my skills in crafting robust and dynamic web solutions.",
  },
  {
    id: 3,
    title: "Mobile Application",
    description: "What's About It?",
    imageUrl: MobileApp,
    modalTitle: "Mobile Application Development",
    modalDescription:
      "In the realm of Mobile Application Development, I delved into the intricacies of Node.js and Android Studio, harnessing their power to create innovative mobile solutions. Throughout the journey, I actively utilized Tailwind CSS and Bootstrap CSS to craft sleek and responsive user interfaces. Hands-on projects provided the opportunity to apply theoretical knowledge, resulting in the development of practical mobile applications that solidified my understanding of the concepts.",
  },
  {
    id: 4,
    title: "UX/UI Design",
    description: " What do I know about it?",
    imageUrl: UXDesign,
    modalTitle: "UX/UI Design",
    modalDescription:
      "Throughout the UX/UI Course, I immersed myself in the fundamental principles of User Experience Design, acquiring a deep understanding of how to create intuitive and user-centric interfaces. Exploring a myriad of design tools, Figma emerged as the cornerstone of our journey, serving as our primary tool for both practical assignments and the initial stages of conceptualizing our capstone project.",
  },
  {
    id: 5,
    title: "Operating System",
    description: "How dip are my knowledge?",
    imageUrl: OS,
    modalTitle: "OS, Operation System",
    modalDescription:
      "This course expanded my understanding of computer operating systems, covering key concepts like process and memory management, storage, and protection. It also delved into cloud computing and virtualization, with practical Docker experience. Through topics such as OS components, process management, and memory scalability in cloud environments, I gained valuable insights. Additionally, I learned to work with VMs (Windows, Linux), further enhancing my skills in cloud-based environments and services. The course's blend of theory and labs encouraged proactive learning.",
  },
  {
    id: 6,
    title: "Software Security",
    description: "What do I know about it?",
    imageUrl: SoftwareSecurity,
    modalTitle: "Software Security",
    modalDescription:
      "This course facilitated my learning of software security essentials, enabling me to develop the skills and knowledge required to construct secure software systems. Through exploration of topics such as threat modeling, secure coding, web security, access control, incident management, and emerging threats, I gained practical experience and theoretical understanding. The combination of theory, assignments, and labs provided valuable hands-on learning opportunities, ensuring efficient engagement with course content.",
  },

  // Add more card data as needed
];
export const saitEducationModals = [
  {
    id: 1,
    title: "OOP",
    description: "Object Oriented Programming",
  },
  {
    id: 2,
    title: "Web Development",
    description: "Some Description",
  },
  {
    id: 3,
    title: "UX/ UI Design",
    description: "Some Description",
  },
  {
    id: 4,
    title: "My Passion",
    description: "All about my hobbies",
  },
  {
    id: 5,
    title: "My Art",
    description: "Check out my art gallery",
  },
  {
    id: 6,
    title: "My Dreams",
    description: "What is my biggest dream",
  },

  // Add more card data as needed
];

//Experience Cards Data

export const experienceCardsData = [
  {
    id: 1,
    title: "Next Js , React Js",
    title2: " Title",
    description: "Some Description",
  },
  {
    id: 2,
    title: "Some Title",
    title2: " Title",
    description: "Some Description",
  },
  {
    id: 3,
    title: "Some Title",
    title2: "Title",
    description: "Some Description",
  },
];

//Other work experience data
export const otherExperienceCardsData = [
  {
    id: 1,
    title: "Sale Associate/ Cashier",
    title2: "2019 - 2020 ZARA, Chinook Center",
    description: "At 2019 was hired as a sale associate at ZARA Chinook center ",
  },
  {
    id: 2,
    title: "Visual Commercial",
    title2: "2020 - 2022 ZARA, Chinook Center",
    description: "Some Description",
  },
  {
    id: 3,
    title: "Sale Associate/Cashier",
    title2: "2022 - 2023  Maggie's Diamond Boutique",
    description: "Some Description",
  },
];
