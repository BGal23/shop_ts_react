interface Options {
  name: string;
  type: string;
  key: string;
  placeholder: string;
}

interface RadioButton {
  label: string;
  value: boolean;
}

export const radioButtons: RadioButton[] = [
  { label: "Private person", value: false },
  { label: "Company", value: true },
];

export const options: Options[] = [
  {
    name: "First Name:*",
    type: "text",
    key: "firstName",
    placeholder: "John",
  },
  {
    name: "Last Name:*",
    type: "text",
    key: "lastName",
    placeholder: "Doe",
  },
  {
    name: "Company:*",
    type: "text",
    key: "company",
    placeholder: "Company Name",
  },
  {
    name: "NIP:*",
    type: "text",
    key: "nip",
    placeholder: "1234567890",
  },
  {
    name: "Street:*",
    type: "text",
    key: "street",
    placeholder: "Mokotowska",
  },
  {
    name: "House Number:*",
    type: "text",
    key: "address",
    placeholder: "123/45",
  },
  {
    name: "City:*",
    type: "text",
    key: "city",
    placeholder: "Warsaw",
  },
  {
    name: "Country:*",
    type: "text",
    key: "country",
    placeholder: "Poland",
  },
  {
    name: "Phone:*",
    type: "tel",
    key: "phone",
    placeholder: "123-456-7890",
  },
  {
    name: "Email:*",
    type: "email",
    key: "email",
    placeholder: "john.doe@example.com",
  },
  {
    name: "Comment:",
    type: "textarea",
    key: "comment",
    placeholder: "Your comment here...",
  },
];
