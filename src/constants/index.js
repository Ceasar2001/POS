import adobo from '../assets/images/adobo.png';
import sinigang from '../assets/images/sinigang.png';
import lechon from '../assets/images/lechon.png';
import kareKare from '../assets/images/karekare.png';
import pancitCanton from '../assets/images/pancitcanton.png';
import laing from '../assets/images/laing.png';
import sisig from '../assets/images/sisig.png';
import haloHalo from '../assets/images/haloHalo.png';
import lumpia from '../assets/images/lumpia.png';
import tinola from '../assets/images/tinola.png';

//import { color } from 'framer-motion';

export const popularDishes = [
  {
    id: 1,
    image: adobo,
    name: 'Adobo',
    numberOfOrders: 320,
  },
  {
    id: 2,
    image: sinigang,
    name: 'Sinigang',
    numberOfOrders: 280,
  },
  {
    id: 3,
    image: lechon,
    name: 'Lechon',
    numberOfOrders: 350,
  },
  {
    id: 4,
    image: kareKare,
    name: 'Kare-Kare',
    numberOfOrders: 260,
  },
  {
    id: 5,
    image: pancitCanton,
    name: 'Pancit Canton',
    numberOfOrders: 230,
  },
  {
    id: 6,
    image: laing,
    name: 'Laing',
    numberOfOrders: 200,
  },
  {
    id: 7,
    image: sisig,
    name: 'Sisig',
    numberOfOrders: 310,
  },
  {
    id: 8,
    image: haloHalo,
    name: 'Halo-Halo',
    numberOfOrders: 290,
  },
  {
    id: 9,
    image: lumpia,
    name: 'Lumpia',
    numberOfOrders: 270,
  },
  {
    id: 10,
    image: tinola,
    name: 'Tinola',
    numberOfOrders: 220,
  },
];



export const tables = [
    { id: 1, name: "Table 1", status: "Booked", initial: "AM", seats: 4 },
    { id: 2, name: "Table 2", status: "Available", initial: "MB", seats: 6 },
    { id: 3, name: "Table 3", status: "Booked", initial: "JS", seats: 2 },
    { id: 4, name: "Table 4", status: "Available", initial: "HR", seats: 4 },
    { id: 5, name: "Table 5", status: "Booked", initial: "PL", seats: 3 },
    { id: 6, name: "Table 6", status: "Available", initial: "RT", seats: 4 },
    { id: 7, name: "Table 7", status: "Booked", initial: "LC", seats: 5 },
    { id: 8, name: "Table 8", status: "Available", initial: "DP", seats: 5 },
    { id: 9, name: "Table 9", status: "Booked", initial: "NK", seats: 6 },
    { id: 10, name: "Table 10", status: "Available", initial: "SB", seats: 6 },
    { id: 11, name: "Table 11", status: "Booked", initial: "GT", seats: 4 },
    { id: 12, name: "Table 12", status: "Available", initial: "JS", seats: 6 },
    { id: 13, name: "Table 13", status: "Booked", initial: "EK", seats: 2 },
    { id: 14, name: "Table 14", status: "Available", initial: "QN", seats: 6 },
    { id: 15, name: "Table 15", status: "Booked", initial: "TW", seats: 3 }
  ];

export const startersItem = [
  {
    id: 1,
    name: "Lumpiang Shanghai",
    price: 180,
    category: "Non-Vegetarian"
  },
  {
    id: 2,
    name: "Ukoy (Shrimp Fritters)",
    price: 200,
    category: "Non-Vegetarian"
  },
  {
    id: 3,
    name: "Tokwa't Baboy",
    price: 160,
    category: "Non-Vegetarian"
  },
  {
    id: 4,
    name: "Kwek-Kwek (Quail Eggs)",
    price: 100,
    category: "Non-Vegetarian"
  },
  {
    id: 5,
    name: "Lumpiang Sariwa",
    price: 150,
    category: "Vegetarian"
  },
  {
    id: 6,
    name: "Ensaladang Talong",
    price: 130,
    category: "Vegetarian"
  }
];

  
export const mainCourse = [
  {
    id: 1,
    name: "Adobo",
    price: 280,
    category: "Non-Vegetarian"
  },
  {
    id: 2,
    name: "Laing",
    price: 220,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Kare-Kare",
    price: 320,
    category: "Non-Vegetarian"
  },
  {
    id: 4,
    name: "Ginataang Kalabasa at Sitaw",
    price: 200,
    category: "Vegetarian"
  },
  {
    id: 5,
    name: "Paksiw na Bangus",
    price: 250,
    category: "Non-Vegetarian"
  },
  {
    id: 6,
    name: "Bicol Express",
    price: 300,
    category: "Non-Vegetarian"
  }
];


export const beverages = [
  {
    id: 1,
    name: "Kapeng Barako",
    price: 70,
    category: "Hot"
  },
  {
    id: 2,
    name: "Sago't Gulaman",
    price: 90,
    category: "Cold"
  },
  {
    id: 3,
    name: "Buko Juice",
    price: 100,
    category: "Cold"
  },
  {
    id: 4,
    name: "Calamansi Juice",
    price: 80,
    category: "Cold"
  },
  {
    id: 5,
    name: "Taho Drink",
    price: 75,
    category: "Hot"
  },
  {
    id: 6,
    name: "Melon Juice",
    price: 85,
    category: "Cold"
  }
];


export const soups = [
  {
    id: 1,
    name: "Sinigang na Baboy",
    price: 180,
    category: "Non-Vegetarian"
  },
  {
    id: 2,
    name: "Bulalo",
    price: 220,
    category: "Non-Vegetarian"
  },
  {
    id: 3,
    name: "Tinolang Manok",
    price: 170,
    category: "Non-Vegetarian"
  },
  {
    id: 4,
    name: "Monggo Guisado",
    price: 130,
    category: "Vegetarian"
  },
  {
    id: 5,
    name: "Sinigang na Hipon",
    price: 190,
    category: "Non-Vegetarian"
  },
  {
    id: 6,
    name: "Suam na Mais",
    price: 140,
    category: "Vegetarian"
  }
];


export const desserts = [
  {
    id: 1,
    name: "Leche Flan",
    price: 120,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Halo-Halo",
    price: 150,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Turon (Banana Spring Roll)",
    price: 100,
    category: "Vegetarian"
  },
  {
    id: 4,
    name: "Buko Pandan",
    price: 130,
    category: "Vegetarian"
  }
];


export const pizzas = [
  {
    id: 1,
    name: "Longganisa Pizza",
    price: 380,
    category: "Non-Vegetarian"
  },
  {
    id: 2,
    name: "Tocino and Egg Pizza",
    price: 400,
    category: "Non-Vegetarian"
  },
  {
    id: 3,
    name: "Pinakbet Pizza",
    price: 360,
    category: "Vegetarian"
  }
];


export const alcoholicDrinks = [
  {
    id: 1,
    name: "San Miguel Pale Pilsen",
    price: 120,
    category: "Alcoholic"
  },
  {
    id: 2,
    name: "Red Horse Beer",
    price: 130,
    category: "Alcoholic"
  },
  {
    id: 3,
    name: "Lambanog (Coconut Wine)",
    price: 180,
    category: "Alcoholic"
  },
  {
    id: 4,
    name: "Tuba (Palm Wine)",
    price: 150,
    category: "Alcoholic"
  },
  {
    id: 5,
    name: "Ginebra San Miguel",
    price: 160,
    category: "Alcoholic"
  },
  {
    id: 6,
    name: "Calamansi Mojito",
    price: 220,
    category: "Alcoholic"
  }
];


export const salads = [
  {
    id: 1,
    name: "Ensaladang Mangga",
    price: 180,
    category: "Vegetarian"
  },
  {
    id: 2,
    name: "Ensaladang Talong",
    price: 160,
    category: "Vegetarian"
  },
  {
    id: 3,
    name: "Filipino Fruit Salad",
    price: 150,
    category: "Vegetarian"
  },
  {
    id: 4,
    name: "Chicken Macaroni Salad",
    price: 220,
    category: "Non-Vegetarian"
  },
  {
    id: 5,
    name: "Tuna Macaroni Salad",
    price: 230,
    category: "Non-Vegetarian"
  }
];



export const menus = [
  { id: 1, name: "Starters", bgColor: "#b73e3e" ,icon: "🍲", items: startersItem },
  { id: 2, name: "Main Course", bgColor: "#5b45b0" ,icon: "🍛", items: mainCourse },
  { id: 3, name: "Beverages", bgColor: "#7f167f" ,icon: "🍹", items: beverages },
  { id: 4, name: "Soups", bgColor: "#735f32" ,icon: "🍜", items: soups },
  { id: 5, name: "Desserts", bgColor: "#1d2569" ,icon: "🍰", items: desserts },
  { id: 6, name: "Pizzas", bgColor: "#285430" ,icon: "🍕", items: pizzas },
  { id: 7, name: "Alcoholic Drinks", bgColor: "#b73e3e" ,icon: "🍺", items: alcoholicDrinks },
  { id: 8, name: "Salads", bgColor: "#5b45b0" ,icon: "🥗", items: salads }
]

export const metricsData = [
  { title: "Revenue", value: "₹50,846.90", percentage: "12%", color: "#025cca", isIncrease: false },
  { title: "Outbound Clicks", value: "10,342", percentage: "16%", color: "#02ca3a", isIncrease: true },
  { title: "Total Customer", value: "19,720", percentage: "10%", color: "#f6b100", isIncrease: true },
  { title: "Event Count", value: "20,000", percentage: "10%", color: "#be3e3f", isIncrease: false },
];

export const itemsData = [
  { title: "Total Categories", value: "8", percentage: "12%", color: "#5b45b0", isIncrease: false },
  { title: "Total Dishes", value: "50", percentage: "12%", color: "#285430", isIncrease: true },
  { title: "Active Orders", value: "12", percentage: "12%", color: "#735f32", isIncrease: true },
  { title: "Total Tables", value: "10", color: "#7f167f"}
];

export const orders = [
  {
    id: "101",
    customer: "Juan Dela Cruz",
    status: "Ready",
    dateTime: "January 18, 2025 08:32 PM",
    items: 8,
    tableNo: 3,
    total: 250.0,
  },
  {
    id: "102",
    customer: "Maria Santos",
    status: "In Progress",
    dateTime: "January 18, 2025 08:45 PM",
    items: 5,
    tableNo: 4,
    total: 180.0,
  },
  {
    id: "103",
    customer: "Jose Rizal",
    status: "Ready",
    dateTime: "January 18, 2025 09:00 PM",
    items: 3,
    tableNo: 5,
    total: 120.0,
  },
  {
    id: "104",
    customer: "Ana Lopez",
    status: "In Progress",
    dateTime: "January 18, 2025 09:15 PM",
    items: 6,
    tableNo: 6,
    total: 220.0,
  },
];



// const buttons = [
//   { label: "Add Table", icon: <MdTableBar />, action: "table" },
//   { label: "Add Category", icon: <MdCategory />, action: "category" },
//   { label: "Add Dishes", icon: <BiSolidDish />, action: "dishes" },
// ];
// const tabs = ["Metrics", "Orders", "Payments"];