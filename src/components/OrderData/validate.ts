import { UserData } from "../../redux/data/orderSlice";

const getCheckData = (data: UserData) => {
  const {
    firstName,
    company,
    lastName,
    nip,
    street,
    country,
    address,
    city,
    phone,
    email,
  } = data;

  const isNotEmpty = (value: string, quantity: number) =>
    value.length >= quantity;
  const isValidNip = (value: string) => /^\d{10}$/.test(value);
  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const isValidPhone = (value: string) => /^\+?\d{9,15}$/.test(value);

  let isCheckedEmptor = false;
  if (data.isCompany) {
    isCheckedEmptor = isNotEmpty(company, 3) && isValidNip(nip);
  } else {
    isCheckedEmptor = isNotEmpty(firstName, 3) && isNotEmpty(lastName, 3);
  }

  const validateArray = [
    isCheckedEmptor,
    isNotEmpty(street, 4),
    isNotEmpty(address, 1),
    isNotEmpty(city, 3),
    isNotEmpty(country, 4),
    isValidPhone(phone),
    isValidEmail(email),
  ];

  return validateArray.every((isValueByOk) => isValueByOk === true);
};

export default getCheckData;
