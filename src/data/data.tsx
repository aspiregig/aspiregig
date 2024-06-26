import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Full Stack Software Developer Resume',
  description: "Highly experienced full stack MERN developer || Blockchain web3 engineer",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Aspire GIG.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Aspire based <strong className="text-stone-100">Full Stack Software Engineer</strong> infusing creativity and functionality into web solutions.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Fluent in front-end technologies (HTML, CSS, JavaScript) and back-end frameworks (Node.js, Express).
        Experienced in database management and cloud deployment. Let's build the digital world together! Connect with me for innovative and scalable software solutions.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Experienced MERN stack developer adept at creating dynamic and responsive web applications. Proficient in MongoDB, Express.js, React.js, and Node.js, with a strong focus on scalability and efficiency. Skilled in database management, server-side logic, and front-end design. Passionate about leveraging JavaScript technologies to build robust and user-friendly applications. Let's collaborate on cutting-edge web development projects!`,
  aboutItems: [
    {label: 'Location', text: 'Porto, Portugal', Icon: MapIcon},
    {label: 'Age', text: '32', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Portugal', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Soccer, Swimming', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Porto', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Extas Estate, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Stoplight',
    description: 'Stoplight.io is an advanced platform tailored for the design, documentation, and construction of fast and high-quality APIs. The tool is engineered with the modern API workflow in mind, offering an intuitive interface and thoughtful features to enable the complete API design lifecycle.',
    url: 'https://stoplight.io/solutions',
    image: porfolioImage1,
  },
  {
    title: 'Vertiseit',
    description: 'Vertiseit is the online home of Vertiseit AB (publ), a retail tech company that specializes in digital in-store solutions. The website serves as a comprehensive platform providing information about the companys products, services, and mission. Through its subsidiaries Dise and Grassfish, Vertiseit offers SaaS platforms for In-store Experience Management (IXM) and related consulting services, catering to global brands and leading retailers across Europe.',
    url: 'https://vertiseit.com/',
    image: porfolioImage2,
  },
  {
    title: 'Lamericausa',
    description: 'LAMERICA USA is a luxury real estate agency with a diverse range of elite properties. The website lamericausa.com provides a comprehensive platform offering information about luxury properties in the USA, focusing on Southern California, particularly Beverly Hills and Los Angeles. The site emphasizes opulent lifestyle options, featuring high-end single-family homes and estates with sophisticated architectural designs, upscale features, and modern sophistication.',
    url: 'https://lamericausa.com/',
    image: porfolioImage3,
  },
  {
    title: 'Origin Investments',
    description: 'Origin Investments is a prominent real estate investment company that specializes in private real estate funds. The company offers a comprehensive platform, origininvestments.com, designed to provide information about its top-tier real estate investment opportunities.',
    url: 'https://origininvestments.com/',
    image: porfolioImage4,
  },
  {
    title: 'Long Point',
    description: 'Longpoint.com serves as the digital gateway to Longpoint, a vertically integrated real estate private equity firm and Registered Investment Adviser headquartered in Boston with six regional offices across the United States. The website provides a wealth of information about the companys comprehensive strategies, portfolio, and industry insights.',
    url: 'https://longpoint.com/',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://www.matthews.com/',
    image: porfolioImage6,
  },
  {
    title: 'Beachwold',
    description: 'Beachwold Residential is a well-established and family-owned real estate company with a strong focus on the development, acquisition, and management of multi-family properties across the United States. The website serves as a comprehensive and informative platform that showcases the companys diverse portfolio of multi-family properties, which includes a wide range of apartment communities and residential units',
    url: 'https://beachwold.com/',
    image: porfolioImage7,
  },
  {
    title: 'Lighter USA',
    description: 'LighterUSA.com is a premier destination for quality lighters, smoking accessories, and nicotine vapes, offering a wide selection of products that cater to smokers of all kinds. The website provides access to an extensive range of top-quality lighters, from classic Zippo lighters to sleek and modern butane torch lighters, representing renowned brands known for their exceptional craftsmanship, reliability, and style.',
    url: 'https://lighterusa.com/',
    image: porfolioImage8,
  },
  {
    title: 'Solunation',
    description: 'Soul Nation Events is a prominent events group that specializes in organizing all-inclusive entertainment tours and events catering primarily to the urban market. The website, soulnation.com, serves as the central hub for individuals interested in joining organized group getaways focused on concerts and entertainment.',
    url: 'https://soulnation.com/',
    image: porfolioImage9,
  },
  {
    title: 'Interalia',
    description: 'Interalia.net is the online platform representing Interalia, a regional full-service interactive marketing agency with more than 25 years of experience. The website serves as a comprehensive resource for clients and individuals seeking digital marketing and lead generation services.',
    url: 'https://www.interalia.net/',
    image: porfolioImage10,
  },
  {
    title: '24northhotel',
    description: '24 North Hotel is an exceptional Key West hotel offering a range of comfortable and inviting accommodations, catering to various preferences and needs. The hotel presents a selection of rooms, including Standard, Pool View, and Ocean View Rooms, each featuring premium amenities and modern in-room facilities.',
    url: 'https://www.24northhotel.com/',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/aspiregig'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553786/aspiregig'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/aspiregig/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/aspiregig/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/aspiregig'},
];
