import { ValidationError, useForm } from "@formspree/react";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { currentProjectAtom, projects } from "./Projects";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import GitHubIcon from '@mui/icons-material/GitHub';

const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection setSection={setSection} />
      <SkillsSection/>
      <ProjectsSection />
      <ExpandEduSection/>
      <ContactSection />
    </div>
  );
};

const RowSection = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  xl:flex xl:flex-row items-start
 
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
        Hi, I'm
        <br />
        <br />
        <span className="bg-white italic">
          Vijay Kumar <br />
          <br/>
          <span>Vemana</span>
        </span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
       A Full Stack developer
        <br />
        <span className="text-sm">
        (Actively looking for part time and 
        <br/>
        Full time oppurtunities )

        </span>
       
      </motion.p>
      <motion.button
        onClick={() => setSection(4)}
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-4 md:mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};
const ExpandEduSection=()=>{
  return(
    <RowSection >

    <motion.div className="w-full" whileInView={"visible"}>
        <div>
        <div className="mt-8 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Education</h2>
        <h2 className="text-2xl">University of Cincinnati</h2>
          <h2> MS, Information Technology</h2>
          <h2 className="mx-2">Aug 2023-April 2025</h2>
          <h2 className="text-2xl">VRSEC</h2>
          <h2>Bachelors,Electrical and Electronics Engineeering </h2>
          <h2 className="mx-2">Aug 2017-Aug 2021</h2>
       
        </div>

        </div>
    </motion.div>
    <motion.div className="flex flex-row" whileInView={"visible"}>
        <div>
        <div className=" mt-8 space-y-4">
       
       
          <h2 className="text-3xl md:text-5xl font-bold text-white">Experience</h2>
          <h2 className="text-2xl">TCS<span className="text-sm">(Tata Consultancy Services)</span></h2>
          <h2>Assistant System Engineer</h2>
          <h2 className="mx-2">Aug 2021-Aug 2023</h2>
          
          
        </div>

        </div>
     
      
    </motion.div>
    
    
  </RowSection>
  )
}
const skills = [
  {
    title: "React",
    level: 90,
  },
  {
    title: "Express.js",
    level: 70,
  },
  {
    title: "MongoDb",
    level: 70,
  },
  {
    title: "Typescript",
    level: 70,
  },
  {
    title: "Node.js",
    level: 80,
  },
];
const  languages = [
  {
    title: "JavaScript",
    level: 90,
  },
  {
    title: "Python",
    level: 70,
  },
  
  {
    title: "SQL",
    level: 80,
  },
  {
    title: "C",
    level: 80,
  },
];


const SkillsSection = () => {
  return (
    <RowSection>
      <motion.div className="w-full" whileInView={"visible"}>
        
        <div className="mt-8 space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Core Skills</h2>
          {skills.map((skill, index) => (
            <div className="w-full md:w-64" key={index}>
              <motion.h3
                className="text-lg md:text-xl font-bold text-gray-100"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                <motion.div
                  className="h-full bg-indigo-500 rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div className="flex-row justify-between" whileInView={"visible"}>
      <div className="mt-8 space-y-4">
      <h2 className="text-3xl md:text-5xl font-bold mt-10 text-white">
            Languages
          </h2>
            {languages.map((lng, index) => (
              <div className="w-full md:w-64" key={index}>
                <motion.h3
                  className="text-lg md:text-xl font-bold text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
      </motion.div>

    </RowSection>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center">
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={previousProject}
        >
          ← Previous
        </button>
        <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
        <button
          className="hover:text-indigo-600 transition-colors"
          onClick={nextProject}
        >
          Next →
        </button>
      </div>
    </Section>
  );
};

const ContactSection = () => {
    const resumeUrl = "https://drive.google.com/file/d/1qMwRV61fXfaZX-B4oi_4RN4dkXuXAVMT/view?usp=share_link";
    const downloadResume = () => {
      window.open(resumeUrl, '_blank');}
  return (
    <Section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">Contact me</h2>
      <div className="p-8 rounded-md bg-white bg-opacity-50 max-w-full" style={{ margin: 'auto', width: '100%', maxWidth: '960px' }}>
        <div className="text-gray-900 text-center text-3xl">
          <p className="mb-4">Feel free to connect with me or download my resume!</p>
          <div className="flex justify-center gap-4 mb-4 flex-wrap">
            <a className="flex items-center" href="https://github.com/vijaykumarvemana0257" target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
              <span className="px-2">Github</span>
            </a>

            <a className="flex items-center" href="https://www.linkedin.com/in/vijaykumarvemana/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              <span className="px-2">LinkedIn</span>
            </a>
            <a className="flex items-center" href="mailto:vemanava@mail.uc.edu">
              <IoMdMail />
              <span className="px-2">Mail</span>
            </a>
          </div>
          <div className="flex justify-center gap-4">
            <button onClick={downloadResume} className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </Section>
 
  );
};
