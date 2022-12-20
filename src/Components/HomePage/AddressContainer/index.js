import "./index.css";
import TextElement from "../../Elements/TextElement";
import IconElement from "../../Elements/IconElement";
import ButtonElement from "../../Elements/ButtonElement";
import { useEffect, useState } from "react";

const AddressContainer = ({ isDestMode, addrData, onRequestChangeOrigin }) => {
  const [originAddrData, setOriginAddrData] = useState(addrData);
  useEffect(() => {
    if (isDestMode) {
    } else setOriginAddrData(addrData);
  }, [addrData]);
  return (
    <div className="addr-container">
      <div className={"addr-sub-container " + (isDestMode ? "dest-mode" : "")}>
        <TextElement colorClass="dark-gray">
          <IconElement isVisible={true} iconClass="gg-circle green" />
          {originAddrData.formatted_address
            ? originAddrData.formatted_address
            : "کجا هستید؟"}
        </TextElement>
        {!isDestMode && (
          <IconElement isVisible={true} iconClass="gg-search gray" />
        )}
        {isDestMode && (
          <ButtonElement onClickHandler={onRequestChangeOrigin} colorClass="green" isVisible={true} isInline={true}>
            تغییر مبدا
          </ButtonElement>
        )}
      </div>
      {isDestMode && (
        <div
          className={"addr-sub-container " + (isDestMode ? "dest-mode" : "")}
        >
          <TextElement colorClass="dark-gray">
            <IconElement isVisible={true} iconClass="gg-square green" />
            {addrData.formatted_address
              ? addrData.formatted_address
              : "کجا می‌روید؟"}
          </TextElement>
          <IconElement isVisible={true} iconClass="gg-search gray" />
        </div>
      )}
    </div>
  );
};

export default AddressContainer;
