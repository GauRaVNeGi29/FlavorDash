import React from "react";
import { Separator } from "@/components/ui/separator";
import img1 from "../images/biryani.jpg";
import img2 from "../images/dosa.jpg";
import img3 from "../images/uttapam.jpg";
import img4 from "../images/idli.jpg";
import img5 from "../images/chole.jpg";
import img6 from "../images/rajma.jpg";
import img7 from "../images/tikka.jpg";
import img8 from "../images/aloo.jpg";
import img9 from "../images/pasta.jpg";
import img10 from "../images/pizza.jpg";
import img11 from "../images/lasagna.jpg";
import img12 from "../images/noodles.jpg";
import img13 from "../images/roll.jpg";
import img14 from "../images/chilli.jpg";
import img15 from "../images/momo.jpg";
import img16 from "../images/rasmalai.jpg";
import img17 from "../images/rasgulla.jpg";
import img18 from "../images/kaju.jpg";
import img19 from "../images/jalebi.jpg";
import img20 from "../images/gulab.jpg";

import vdo1 from "../videos/biryani.mp4"
import vdo2 from "../videos/dosa.mp4"
import vdo3 from "../videos/uttapam.mp4"
import vdo4 from "../videos/idli.mp4"
import vdo5 from "../videos/chole.mp4"
import vdo6 from "../videos/rajma.mp4"
import vdo7 from "../videos/tikka.mp4";
import vdo8 from "../videos/aloo.mp4";
import vdo9 from "../videos/pasta.mp4";
import vdo10 from "../videos/pizza.mp4";
import vdo11 from "../videos/lasagna.mp4";
import vdo12 from "../videos/noodles.mp4";
import vdo13 from "../videos/roll.mp4";
import vdo14 from "../videos/chilli.mp4";
import vdo15 from "../videos/momo.mp4";
import vdo16 from "../videos/rasmalai.mp4";
import vdo17 from "../videos/rasgulla.mp4";
import vdo18 from "../videos/kaju.mp4";
import vdo19 from "../videos/jalebi.mp4";
import vdo20 from "../videos/gulab.mp4";



  const foodCategories = [
    {
      category: "South Indian",
      items: [
        {
          value: 0,
          video: vdo1,
          description: "",
          name: "Biryani",
          price: "$10",
          rating: 4.5,
          image: img1,
          link: "/biryani"
        },
        { 
          value: 0,
          video: vdo2,
          description: "",
          name: "Dosa",
          price: "$8",
          rating: 4.2,
          image: img2,
          link: "/dosa"
        },
        {
          value: 0,
          video: vdo3,
          description: "",
          name: "Uttapam",
          price: "$7",
          rating: 4.0,
          image: img3,
          link: "/uttapam"
        },
        {
          value: 0,
          video: vdo4,
          description: "",
          name: "Idli",
          price: "$4",
          rating: 3.9,
          image: img4,
          link: "/idli"
        },
      ]
    },
    {
      category: "North Indian",
      items: [
        {
          value: 0,
          video: vdo5,
          description: "",
          name: "Chole Bathure",
          price: "$5",
          rating: 4.5,
          image: img5,
          link: "/Chole_bathure"
        },
        {
          value: 0,
          video: vdo6,
          description: "",
          name: "Rajam Chawal",
          price: "$2",
          rating: 4.2,
          image: img6,
          link: "/rajma_chawal"
        },
        {
          value: 0,
          video: vdo7,
          description: "",
          name: "Butter Chicken",
          price: "$7",
          rating: 4.8,
          image: img7,
          link: "/butter_chicken"
        },
        {
          value: 0,
          video: vdo8,
          description: "",
          name: "Aloo Paratha",
          price: "$1",
          rating: 4.7,
          image: img8,
          link: "/aloo_paratha"
        }
      ]
    },
    {
      category: "Italian",
      items: [
        {
          value: 0,
          video: vdo9,
          description: "",
          name: "Pasta",
          price: "$5",
          rating: 4.5,
          image: img9,
          link: "/pasta"
        },
        {
          value: 0,
          video: vdo10,
          description: "Cheesilicious pizzas to make every day extraordinary.",
          name: "Pizza",
          price: "$2",
          rating: 4.2,
          image: img10,
          link: "/pizza"
        },
        {
          value: 0,
          video: vdo11,
          description: "",
          name: "lasagna",
          price: "$7",
          rating: 4.8,
          image: img11,
          link: "/lasagna"
        }
      ]
    },
    {
      category: "Chinese",
      items: [
        {
          value: 0,
          video: vdo12,
          description: "",
          name: "Noodles",
          price: "$5",
          rating: 4.5,
          image: img12,
          link: "/noodles"
        },
        {
          value: 0,
          video: vdo13,
          description: "",
          name: "Spring Roll",
          price: "$2",
          rating: 4.2,
          image: img13,
          link: "/spring_roll"
        },
        {
          value: 0,
          video: vdo14,
          description: "",
          name: "Chilli potato",
          price: "$7",
          rating: 4.8,
          image: img14,
          link: "/chilli_potato"
        },
        {
          value: 0,
          video: vdo15,
          description: "",
          name: "Momo",
          price: "$4",
          rating: 4.5,
          image: img15,
          link: "/momo"
        }
      ]
    },
    {
      category: "Desserts",
      items: [
        {
          value: 0,
          video: vdo16,
          description: "",
          name: "Rasmalai",
          price: "$1",
          rating: 4.5,
          image: img16,
          link: "/rasmalai"
        },
        {
          value: 0,
          video: vdo17,
          description: "",
          name: "Rasgulla",
          price: "$2",
          rating: 4.2,
          image: img17,
          link: "/rasgulla"
        },
        {
          value: 0,
          video: vdo18,
          description: "",
          name: "Kaju Katli",
          price: "$5",
          rating: 4.8,
          image: img18,
          link: "/kaju_katli"
        },
        {
          value: 0,
          video: vdo19,
          description: "",
          name: "Jalebi",
          price: "$4",
          rating: 4.5,
          image: img19,
          link: "/Jalebi"
        },
        {
          value: 0,
          video: vdo20,
          description: "",
          name: "Gulab Jamun",
          price: "$3",
          rating: 4.7,
          image: img20,
          link: "/gulab_jamun"
        }
      ]
    },
    // Add more categories as needed
  ];

export default foodCategories;


