import "./testimonials.scss";
import { useInView } from "react-intersection-observer";

export default function Testimonials() {
  const { ref: card1Ref, inView: card1Visible } = useInView({ threshold: 0.1 });
  const { ref: card2Ref, inView: card2Visible } = useInView({ threshold: 0.1 });
  const { ref: card3Ref, inView: card3Visible } = useInView({ threshold: 0.1 });

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div
          className={`card ${card1Visible ? "visible" : ""}`}
          ref={card1Ref}
        >
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img className="user" src="assets/face.png" alt="" />
            <img className="right" src="assets/youtube.png" alt="" />
          </div>
          <div className="center">
            Reliable and trustworthy. A pleasure to work with
          </div>
          <div className="bottom">
            <h3>Thalia</h3>
            <h4>Graphic Designer</h4>
          </div>
        </div>

        <div
          className={`card ${card2Visible ? "visible" : ""}`}
          ref={card2Ref}
        >
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img className="user" src="assets/face.png" alt="" />
            <img className="right" src="assets/twitter.png" alt="" />
          </div>
          <div className="center">
            Exceptional service and attention to detail. Highly recommended!
          </div>
          <div className="bottom">
            <h3>Roy Nyamhute</h3>
            <h4>Software Developer</h4>
          </div>
        </div>

        <div
          className={`card ${card3Visible ? "visible" : ""}`}
          ref={card3Ref}
        >
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img className="user" src="assets/face.png" alt="" />
            <img className="right" src="assets/linkdin.png" alt="" />
          </div>
          <div className="center">
            Their creativity and professionalism are unmatched. A game-changer for our brand!
          </div>
          <div className="bottom">
            <h3>Nkops</h3>
            <h4>Charted Account</h4>
          </div>
        </div>
      </div>
    </div>
  );
}