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
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../fetches/getProducts";
import { Rating } from "../../components/Rating/Rating";
import { selectProductsAdded } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
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
        return item.id == id.id;
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
    event.preventDefault();
    const xProductDetail = [];

    for (let i = 0; i < quantityValue; i++) {
      xProductDetail.push(...productDetail);
    }
    dispatch(addToAddedProducts(xProductDetail));
  };

  return (
    <OneCardDetailWrapper>
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
