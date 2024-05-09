interface Countries {
  id: number;
  country: string;
  value: string;
  options: Options[];
}

export interface Options {
  deliverer: string;
  cost: number;
}

const countries: Countries[] = [
  {
    id: 1,
    country: "Poland 🇵🇱",
    value: "pl",
    options: [
      { deliverer: "Post", cost: 10 },
      { deliverer: "InPost", cost: 12 },
      { deliverer: "Courier DHL", cost: 14 },
      { deliverer: "Courier DPD", cost: 16 },
    ],
  },
  {
    id: 2,
    country: "Germany 🇩🇪",
    value: "de",
    options: [
      { deliverer: "Courier DHL", cost: 15 },
      { deliverer: "Post", cost: 11 },
    ],
  },
  {
    id: 3,
    country: "Czech 🇨🇿",
    value: "cz",
    options: [
      { deliverer: "InPost", cost: 13 },
      { deliverer: "Courier DPD", cost: 14 },
    ],
  },
  {
    id: 4,
    country: "Slovakia 🇸🇰",
    value: "sk",
    options: [{ deliverer: "Courier DHL", cost: 15 }],
  },
  {
    id: 5,
    country: "Austria 🇦🇹",
    value: "at",
    options: [
      { deliverer: "Courier DPD", cost: 16 },
      { deliverer: "Post", cost: 13 },
      { deliverer: "Courier DHL", cost: 14 },
    ],
  },
  {
    id: 6,
    country: "Lithuania 🇱🇹",
    value: "lt",
    options: [
      { deliverer: "Courier DHL", cost: 13 },
      { deliverer: "Post", cost: 12 },
    ],
  },
  {
    id: 7,
    country: "Latvia 🇱🇻",
    value: "lv",
    options: [{ deliverer: "InPost", cost: 12 }],
  },
  {
    id: 8,
    country: "Estonia 🇪🇪",
    value: "ee",
    options: [
      { deliverer: "Post", cost: 11 },
      { deliverer: "Courier DPD", cost: 14 },
    ],
  },
  {
    id: 9,
    country: "Sweden 🇸🇪",
    value: "se",
    options: [{ deliverer: "Courier DPD", cost: 18 }],
  },
  {
    id: 10,
    country: "Denmark 🇩🇰",
    value: "dk",
    options: [
      { deliverer: "Courier DHL", cost: 19 },
      { deliverer: "Post", cost: 17 },
    ],
  },
];

export default countries;
