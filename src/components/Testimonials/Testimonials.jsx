import bg from "../../img/bamboo-leaf.png";
import customer from "../../img/9379.jpg";
import {
  CustomerImg,
  CustomerName,
  TestimonialBg,
  TestimonialDescription,
  TestimonialStyle,
  TestimonialSubTitle,
  TestimonialTitle,
  TestimonialWrapper,
} from "./Testimonials.styled";

export const Testimonials = () => {
  return (
    <TestimonialWrapper>
      <TestimonialStyle>
        <TestimonialTitle>Testimonial</TestimonialTitle>
        <TestimonialSubTitle>What Our Customer Saying?</TestimonialSubTitle>
        <CustomerImg src={customer} alt="foto customer" />
        <CustomerName>Anna</CustomerName>
        <TestimonialDescription>
          I&apos;m delighted to share a positive experience regarding my
          purchase of bamboo from the &#34;Sparrows&#34; seller. The variety was
          impressive, and the service was top-notch. The plant arrived in
          excellent condition - healthy and well-cared-for. Many thanks for your
          professionalism and wonderful plant selection!
        </TestimonialDescription>
      </TestimonialStyle>
      <TestimonialBg src={bg} alt="background" />
    </TestimonialWrapper>
  );
};
