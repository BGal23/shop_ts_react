import style from "./SearchModal.module.scss";
import icons from "../../images/svg/icons.svg";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent, useEffect, useState } from "react";
import { getProducts } from "../../redux/data/operations";
import { UnknownAction } from "@reduxjs/toolkit";
import { selectSearchProduct } from "../../redux/data/selectors";
import { Link } from "react-router-dom";

interface Props {
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (isOpenModal: boolean) => void;
}

interface FoundProduct {
  title: string;
  id: number;
}

const SearchModal: React.FC<Props> = ({
  isSearchModalOpen,
  setIsSearchModalOpen,
}) => {
  const dispatch = useDispatch();
  const productsList = useSelector(selectSearchProduct);
  const [foundProducts, setFoundProducts] = useState<FoundProduct[]>([]);
  const [searchingProduct, setSearchingProduct] = useState<string>("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchingProduct(event.target.value);
    if (event.target.value === "") {
      setFoundProducts([]);
    } else {
      const searchTerm = event.target.value.toLowerCase().replace(/\s/g, "");
      const filteredProducts = productsList.filter((element) =>
        element.title.toLowerCase().replace(/\s/g, "").includes(searchTerm)
      );
      setFoundProducts(
        filteredProducts.map((product) => ({
          title: product.title,
          id: product.id,
        }))
      );
    }
  };

  useEffect(() => {
    dispatch(getProducts() as unknown as UnknownAction);
  }, [dispatch]);

  useEffect(() => {
    setFoundProducts([]);
    setSearchingProduct("");
  }, [isSearchModalOpen]);

  return (
    <div
      className={style.container}
      style={{
        top: isSearchModalOpen ? "3em" : "",
        height: `calc(5.5em  + ${
          searchingProduct !== "" && foundProducts.length === 0
            ? 1
            : foundProducts.length
        } * 2em)`,
      }}
    >
      <div className={style.box}>
        <div className={style.inputBox}>
          <svg className={style.iconSearch}>
            <use xlinkHref={`${icons}#search`} />
          </svg>
          <input
            className={style.input}
            type="text"
            value={searchingProduct}
            onChange={handleSearch}
          />
        </div>
        <button
          className={style.closeBtn}
          onClick={() => setIsSearchModalOpen(false)}
          type="button"
        >
          <svg className={style.icon}>
            <use xlinkHref={`${icons}#close`} />
          </svg>
        </button>
      </div>
      <ul className={style.productsBox}>
        {searchingProduct !== "" && foundProducts.length === 0 ? (
          <p className={style.product}>
            We can't find a product with this name :(
          </p>
        ) : (
          foundProducts.map((element) => (
            <li key={element.id} className={style.product}>
              <Link
                to={`/product/${element.id}`}
                onClick={() => setIsSearchModalOpen(false)}
              >
                <p className={style.text}>{element.title}</p>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SearchModal;
