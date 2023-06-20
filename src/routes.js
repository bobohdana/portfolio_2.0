import Home from "./components/Home";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

export const ROUTES = [
  {
    key: 'home',
    text: 'Home',
    Component: Home,
  },
  {
    key: 'skills',
    text: 'Skills',
    Component: Skills,
  },
  {
    key: 'education',
    text: 'Education',
    Component: Education,
  },
  {
    key: 'experience',
    text: 'Experience',
    Component: Experience,
  },
  {
    key: 'contact',
    text: 'Contact Me',
    Component: Contact,
  },
]
