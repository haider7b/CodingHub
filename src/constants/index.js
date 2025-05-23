
import { tailwindIcon,githubIcon,igIcon,linkedinIcon,gmailIcon,myImg ,canvaIcon,chatGptIcon} from "../utils/index.js";
export const navLinks = ["home", "about us", "content","team","projects", "contact"];
export const socialLinks = [
    { name: "GitHub",img:githubIcon, url: "https://github.com/haider7b" ,tit:"haider7b"},
    { name: "Linkedin",img:linkedinIcon, url: "https://www.linkedin.com/in/haider-bassem-al-asadi-2471a728b" ,tit:"haider-bassem-al-asadi"},
    { name: "Instagram",img:igIcon, url: "https://www.instagram.com/coding._hub7" ,tit:"@coding._hub7"},
    { name: "Personal",img:igIcon, url: "https://www.instagram.com/haider_cr07",tit:"@haider_cr07"},
    {name:"Gmail",img:gmailIcon,url:"mailto:alasadyhydr413@gmail.com",tit:"alasadyhydr413@gmail"}
];

export const version="1.0.0";
export const  vercelURL=["https://haider-dev-2y38-git-master-haiders-projects-6efd4952.vercel.app/"]

export const webTitle="CodingHub";


export const skills = [
    { name: "html", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "css", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "react", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "tailwind", icon: tailwindIcon },
    { name: "bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" }
];


export const desorptionA = `نحن نؤمن بأن البرمجة هي مفتاح الإبداع والابتكار، ولهذا أنشأنا ${webTitle}
            ليكون مجتمعًا يهدف إلى تبسيط
                مفاهيم البرمجة وتقديم محتوى تعليمي قيّم للمطورين من جميع المستويات
            سواء كنت مبتدئًا تسعى لدخول عالم البرمجة أو مطورًا محترفًا تبحث عن تحديات جديدة، فنحن هنا لمساعدتك في
                رحلتك. من خلال الدروس التفاعلية، والمشاريع الواقعية، والمحتوى التقني المميز، نهدف إلى بناء بيئة تعلم
                ملهمة تتيح للمبرمجين مشاركة المعرفة والتطور معًا
        انضم إلينا، ودعنا نبرمج المستقبل سطرًا بعد سطر`;

export const quoteA = "  الكود الجيد هو الكود الذي يجعل الحياة أسهل، وليس أعقد";
export const quoteE="The good code is the code that makes life easier, not obstacles";

export const desorptionE=`We believe that programming is the key to creativity and innovation. That's why we created ${webTitle}-a community dedicated to simplifying programming concepts and providing valuable educational content for developers of all levels.

Whether you're a beginner looking to enter the world of programming or a professional developer seeking new challenges, we're here to support you on your journey.

Through interactive lessons, real-world projects, and high-quality technical content, we aim to build an inspiring learning environment where programmers can share knowledge and grow together.

Join us, and let's code the future—line by line!`



export const aboutMe = `أنا حيدر، مطور ويب شغوف بتصميم وتطوير واجهات المستخدم. أعمل على تحويل الأفكار إلى تجارب رقمية رائعة. أؤمن بقوة البرمجة في إحداث فرق في العالم، وأسعى دائمًا لتعلم مهارات جديدة ومواجهة تحديات جديدة في هذا المجال المتطور.`;


export const homeDesorptionE=`Welcome to ${webTitle}, your go-to platform for all things coding,Join us on a journey of learning and innovation,Let's code the future together,Explore our resources, tutorials, and projects.`;
export const homeDesorptionA=`هلا وسهلا بكم الى ${webTitle} , المنصة الفعالة لكل شيء في البرمجة!  انضم لنا في رحلة التعلم والابتكار لنبرمج المستقبل معا! استكشف مصادرنا، دوراتنا ومشاريعنا`;



export const teamMembers = [
    {
        name: "Haider Bassem",
        title: "Web Developer And Content Creator",
        description: aboutMe,
        image: myImg,
        socialLinks: socialLinks,
    },
    {
        name: "Chat GPT",
        title: "AI Assistant",
        description: "Your AI assistant for coding, development and post ideas. , ",
        image: chatGptIcon,
        socialLinks: [],
    },
    {
        name: "canva",
        title: "web design",
        description: "for web design and graphics and instagram posts",
        image: canvaIcon,
        socialLinks: [],
    }
]


