import { Menu } from "@/types/menu";
import Link from "next/link";

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
    submenu: [
      {
        id: 41,
        title: "Tax and Bookkeeping ",
        path: "/services/tax",
        newTab: false,
      },
      {
        id: 42,
        title: "Software and Web Development ",
        path: "/services/webdev",
        newTab: false,
      },
      {
        id: 43,
        title: "IT and Support",
        path: "/services/itsupport",
        newTab: false,
      },
      {
        id: 44,
        title: "Developers",
        path: "/services/developers",
        newTab: false,
      },
      {
        id: 45,
        title: "SEO & Digital Media Marketing",
        path: "/services/seo",
        newTab: false,
      },
      {
        id: 46,
        title: "Creative Content Writing",
        path: "/services/contentwriting",
        newTab: false,
      },
      {
        id: 47,
        title: "Graphics Design",
        path: "/services/graphicdesign",
        newTab: false,
      },
      {
        id: 48,
        title: "Photography",
        path: "/Services/Photography",
        newTab: false,
      },
      {
        id: 49,
        title: "Admin Work & Assistance",
        path: "/services/adminwork",
        newTab: false,
      },

      {
        id: 410,
        title: "All Services",
        path: "/AllServices/page",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "FAQs",
    path: "/Services/FAQs",
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
