import { Menu } from "@/types/menu";


const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "Services",
    newTab: false,
    path:"",
    submenu: [
      {
        id: 41,
        title: "Tax and Bookkeeping ",
        path: "/tax",
        newTab: false,
      },
      {
        id: 42,
        title: "Software and Web Development ",
        path: "/webdev",
        newTab: false,
      },
      {
        id: 43,
        title: "IT and Support",
        path: "/itsupport",
        newTab: false,
      },
      {
        id: 44,
        title: "Developers",
        path: "/developers",
        newTab: false,
      },
      {
        id: 45,
        title: "SEO & Digital Media Marketing",
        path: "/seo",
        newTab: false,
      },
      {
        id: 46,
        title: "Creative Content Writing",
        path: "/contentwriting",
        newTab: false,
      },
      {
        id: 47,
        title: "Graphics Design",
        path: "/graphicdesign",
        newTab: false,
      },
      {
        id: 48,
        title: "Admin Work & Assistance",
        path: "/adminwork",
        newTab: false,
      },
      {
        id: 49,
        title: "Photography",
        path: "/photography",
        newTab: false,
      },

      {
        id: 410,
        title: "Editing",
        path: "/editing",
        newTab: false,
      },

      {
        id: 411,
        title: "All Services",
        path: "/allservices",
        newTab: false,
      },
    ],
    
  },
  {
    id: 5,
    title: "FAQs",
    path: "/faqs",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
  
];
export default menuData;
