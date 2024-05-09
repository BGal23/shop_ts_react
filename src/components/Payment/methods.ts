interface Methods {
  type: string;
  cashPayment?: number;
  options?: string[];
}

const methods: Methods[] = [
  {
    type: "Bank transfer",
    options: ["ING", "mBank", "Pekao", "Santander"],
  },
  { type: "Credit cart", options: ["Visa", "MasterCart"] },
  { type: "Traditional transfer" },
  { type: "Cash on delivery", cashPayment: 0.05 },
  { type: "PayPal", cashPayment: 0.03 },
];

export default methods;
