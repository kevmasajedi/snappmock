import { useEffect, useLayoutEffect, useState , useRef} from "react";
import FullscreenContainer from "../FullscreenContainer";
import HomePage from "../HomePage";
import Login from "../LoginPage";
import Logo from "../LogoContainer";
import PresentationContainer from "./PresentationContainer";

const PresentationPage = ({ title }) => {
  const [showAllPages, setShowAllPages] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false); 
  useEffect(() => {
    setTimeout(() => {
      setShowAllPages(true);
      setTimeout(() => {
        setStartAnimation(true);
      }, 1000);
    }, 1000);
  });
  return (
    <FullscreenContainer>
      <PresentationContainer startAnimation={startAnimation} >
        <HomePage presentationMode={true} />
        {showAllPages && <Login title={title} presentationMode={true} />}
      </PresentationContainer>
      <Logo title={title} colorClass={"green"} presentationMode={true} isVisible={startAnimation}/>
    </FullscreenContainer>
  );
};
export default PresentationPage;
