interface Items {
  id: number;
  name: string;
  icon: string;
  description: string;
}

const items: Items[] = [
  {
    id: 1,
    name: "QUALITY",
    icon: "#quality",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "GUARANTY",
    icon: "#guaranty",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "PRICE",
    icon: "#price",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 4,
    name: "DELIVERY TIME",
    icon: "#delivery-time",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

export default items;
