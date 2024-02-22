import air from "@/app/assets/air.svg"
import camera from "@/app/assets/camera.svg"
import cyborg from "@/app/assets/cyborg.svg"
import db from "@/app/assets/db.svg"
import elevator from "@/app/assets/elevator.svg"
import ensamble from "@/app/assets/ensamble.svg"
import factory from "@/app/assets/factory.svg"
import scalator from "@/app/assets/scalator.svg"
import screem from "@/app/assets/screen.svg"

import card1 from "@/app/assets/card1.jpg"
import card2 from "@/app/assets/card2.svg"
import card3 from "@/app/assets/card3.jpg"
import card4 from "@/app/assets/card4.jpg"

import client1 from "@/app/assets/client1.svg"
import client2 from "@/app/assets/client2.svg"
import client3 from "@/app/assets/client3.svg"

export const NAV_LINKS = [
  {
    href: "#home",
    key: "home",
    label: "INICIO",
  },
  // {
  //   href: "#about",
  //   key: "about-us",
  //   label: "NOSOTROS",
  // },
  {
    href: "#services",
    key: "services",
    label: "SERVICIOS",
  },
  // {
  //   href: "#contact",
  //   key: "contact",
  //   label: "CONTACTO",
  // },
  // {
  //   href: "/",
  //   key: "store",
  //   label: "TIENDA",
  // },
];

export const SOCIAL_MEDIA = [
    // {
    //     href: "/",
    //     key: "email",
    //     icon: "/email.svg"
    // },
    // {
    //     href: "/",
    //     key: "teléfono",
    //     icon: "/whatsapp.svg"
    // },
    // {
    //     href: "/",
    //     key: "facebook",
    //     icon: "/facebook.svg"
    // }
]

export const SPECIALTY = [
  {
    src: card1,
    key: "reportes",
    title: "REPORTES",
    description: [
      { list: "Atención de averías"},
      { list: "Mantenimiento tipo I"},
      { list: "Mantenimiento tipo 2"},
    ],  
    href: "https://stc-gilt.vercel.app/",
  },
  {
    src: card2,
    key: "sistemas de monitoreo",
    title: "SISTEMAS DE MONITOREO",
    description: [
      { list: "Escaleras mecánicas"},
      { list: "Ascensores"},
      { list: "Rampas móviles"},
    ],  
    href: "/",
  },
  {
    src: card3,
    key: "inventario",
    title: "INVENTARIO",
    description: [
      { list: "Refacciones "},
      { list: "Herramienta"},
      { list: "Insumos"},
      { list: "Baja de productos"},
    ],  
    href: "/",
  },
  {
    src: card4,
    key: "ordenes de trabajo",
    title: "ORDENES DE TRABAJO",
    description: [
      { list: "Mantenimiento"},
      { list: "Modernización"},
      { list: "Sustitución"},
    ],  
    href: "/",
  },
]
