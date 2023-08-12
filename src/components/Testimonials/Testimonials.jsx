import bg from "../../img/bamboo-leaf.png";
import { TestimonialsWrapper } from "./Testimonials.styled";

export const Testimonials = () => {
  return (
    <TestimonialsWrapper>
      <div>
        <h2>Testimonial</h2>
        <h3>What Our Customer Saying?</h3>
        <p>
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been.
        </p>
        <p>Name</p>
      </div>

      <img src={bg} />
    </TestimonialsWrapper>
  );
};
