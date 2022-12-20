import IconElement from "../../Elements/IconElement";
import TextElement from "../../Elements/TextElement";
import "./index.css";

const QuotaContainer = ({ isVisible, price }) => {
  return (
    isVisible && (
      <div className="quota-container">
        <TextElement colorClass="dark-gray">
          <IconElement isVisible={true} iconClass="gg-performance green" />
          اسنپ‌ماک!
          <sub>سریع و به‌صرفه</sub>
        </TextElement>
        {price && <div className="price dark-gray">{price} تومان</div>}
      </div>
    )
  );
};

export default QuotaContainer;
