interface Options {
  name: string;
  type: string;
  isCompany: boolean;
  secondName?: string;
}

const options: Options[] = [
  {
    name: "First Name",
    type: "text",
    isCompany: true,
    secondName: "Company",
  },
  {
    name: "Last Name",
    type: "text",
    isCompany: true,
    secondName: "NIP",
  },
  {
    name: "Street",
    type: "text",
    isCompany: false,
  },
  {
    name: "House Number",
    type: "text",
    isCompany: false,
  },
  {
    name: "City",
    type: "text",
    isCompany: false,
  },
  {
    name: "Country",
    type: "text",
    isCompany: false,
  },
  {
    name: "Phone",
    type: "tel",
    isCompany: false,
  },
  {
    name: "Email",
    type: "email",
    isCompany: false,
  },
  {
    name: "Comment",
    type: "textarea",
    isCompany: false,
  },
];

export default options;
