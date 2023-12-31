import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  CardBottomForm,
  CardBtnAdd,
  CardDescription,
  CardDescriptionWrapper,
  CardImg,
  CardImgWrapper,
  CardName,
  CardPrice,
  CardQuantity,
  CardTitleQuantity,
  CardWrapper,
  OneCardDetailHero,
  OneCardDetailTitle,
  OneCardDetailWrapper,
  RatingDesWrapper,
} from "./OneCardDetail.styled";

import { getProducts } from "../../fetches/getProducts";
import { Rating } from "../../components/Rating/Rating";
import { addToAddedProducts } from "../../redux/Slices/ProductsSlice";

export const OneCardDetail = () => {
  const [productDetail, setProductDetail] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedRating, setSelectedRating] = useState("0");
  const [quantityValue, setQuantityValue] = useState("1");
  const [totalPrice, setTotalPrice] = useState(null);

  const id = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length < 1) {
      getProducts().then((products) => {
        setProducts(products);
      });
    }
  }, [products.length]);
  useEffect(() => {
    if (!id) return;

    getProducts().then((products) => {
      const productDatailed = products.filter((item) => {
        return item._id == id.id;
      });
      setProductDetail(productDatailed);
      setTotalPrice(productDatailed[0].price * quantityValue);
    });
  }, [id, quantityValue]);

  const handleRatingChange = (event) => {
    const newValue =
      event.target.value === selectedRating ? null : event.target.value;
    setSelectedRating(newValue);
  };

  const handleQuantityChange = (event) => {
    setQuantityValue(event.target.value);
  };

  const handleQuantitySubmit = (event) => {
    toast(`You added ${quantityValue} items`);
    event.preventDefault();
    const xProductDetail = [];
    let oneProduct = {};

    oneProduct = { ...productDetail, keyId: uuidv4(), qty: quantityValue };
    xProductDetail.push(oneProduct);

    dispatch(addToAddedProducts(xProductDetail));
  };

  return (
    <OneCardDetailWrapper>
      <ToastContainer />
      <OneCardDetailHero>
        <OneCardDetailTitle>Product Detail</OneCardDetailTitle>
      </OneCardDetailHero>

      <CardWrapper>
        <CardImgWrapper>
          <CardImg src={productDetail[0]?.img}></CardImg>
        </CardImgWrapper>
        <RatingDesWrapper>
          {productDetail.length && (
            <Rating
              index={id}
              selectedRating={selectedRating}
              onRatingChange={handleRatingChange}
              rating={productDetail[0]?.rating}
            />
          )}
          <CardDescriptionWrapper>
            <CardName>{productDetail[0]?.name}</CardName>

            <CardPrice>
              Price: <span> {productDetail[0]?.price}UAH</span>
            </CardPrice>
            <CardDescription>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry&apos;s standard dummy text ever
              since the 1500s, when an unknown printer took a galley.
            </CardDescription>
            <CardBottomForm onSubmit={handleQuantitySubmit}>
              <CardTitleQuantity>Quantity:</CardTitleQuantity>
              <CardQuantity
                type="text"
                id={productDetail[0]?.id}
                name={productDetail[0]?.name}
                value={quantityValue}
                onChange={handleQuantityChange}
              />

              <CardBtnAdd type="submit">add to cart</CardBtnAdd>
            </CardBottomForm>
            <CardPrice className="total">
              Total: <span> {totalPrice}UAH</span>
            </CardPrice>
          </CardDescriptionWrapper>
        </RatingDesWrapper>
      </CardWrapper>
    </OneCardDetailWrapper>
  );
};
