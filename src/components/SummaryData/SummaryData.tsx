import { UserData } from "../../redux/data/orderSlice";
import style from "./SummaryData.module.scss";

interface Props {
  title: string;
  data: UserData;
}

const SummaryData: React.FC<Props> = ({ title, data }) => {
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
    comment,
    isCompany,
  } = data;

  return (
    <div className={style.container}>
      <h3 className={style.title}>{title}</h3>
      <div>
        {isCompany ? (
          <div className={style.dataBox}>
            <p>Company:</p>
            <h3>{company}</h3> <p>NIP: {nip}</p>
          </div>
        ) : (
          <div className={style.dataBox}>
            <p>Name:</p>
            <h3>
              {firstName} {lastName}
            </h3>
          </div>
        )}
        <div className={style.dataBox}>
          <p>Address:</p>
          <h3>
            {street}, {address}, {city}, {country}
          </h3>
        </div>
        <div className={style.dataBox}>
          <p>Email:</p>
          <h3>{email}</h3>
        </div>
        <div className={style.dataBox}>
          <p>Phone:</p>
          <h3>{phone}</h3>
        </div>
        {comment && (
          <div className={style.dataBox}>
            <p>Comment:</p>
            <h3>{comment}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default SummaryData;
