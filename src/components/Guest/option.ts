interface Options {
  name: string;
  type: string;
  key: string;
  secondName?: string;
  secondKey?: string;
}

const options: Options[] = [
  {
    name: "First Name:*",
    type: "text",
    key: "firstName",
    secondName: "Company:*",
    secondKey: "company",
  },
  {
    name: "Last Name:*",
    type: "text",
    key: "lastName",
    secondName: "NIP:*",
    secondKey: "nip",
  },
  {
    name: "Street:*",
    type: "text",
    key: "street",
  },
  {
    name: "House Number:*",
    type: "text",
    key: "address",
  },
  {
    name: "City:*",
    type: "text",
    key: "city",
  },
  {
    name: "Country:*",
    type: "text",
    key: "country",
  },
  {
    name: "Phone:*",
    type: "tel",
    key: "phone",
  },
  {
    name: "Email:*",
    type: "email",
    key: "email",
  },
  {
    name: "Comment:",
    type: "textarea",
    key: "comment",
  },
];

export default options;
