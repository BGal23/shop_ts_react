interface Methods {
  type: string;
  cashPayment: number;
  options?: string[];
}

const methods: Methods[] = [
  {
    type: "Bank transfer",
    options: ["ING", "mBank", "Pekao", "Santander"],
    cashPayment: 0,
  },
  { type: "Credit cart", options: ["Visa", "MasterCart"], cashPayment: 0 },
  { type: "Traditional transfer", cashPayment: 0 },
  { type: "Cash on delivery", cashPayment: 0.05 },
  { type: "PayPal", cashPayment: 0.03 },
];

export default methods;
