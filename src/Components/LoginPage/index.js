import BannerContainer from "../BannerContainer";
import FullscreenContainer from "../FullscreenContainer";
import HeadingElement from "../Elements/HeadingElement";
import LoaderElement from "../Elements/LoaderElement";
import LoginFormContainer from "./LoginFormContainer";
import LogoContainer from "./LogoContainer";
import TextElement from "../Elements/TextElement";
import InputElement from "../Elements/InputElement";
import IconElement from "../Elements/IconElement";
import { useEffect, useState } from "react";
import ButtonElement from "../Elements/ButtonElement";
import AuthCodeContainer from "./AuthCodeContainer";
import FooterContainer from "./FooterContainer";
import Cookies from "universal-cookie";
import {useNavigate} from "react-router-dom" ; 

const Login = ({ title , presentationMode }) => {
  const [fullscreenMode, setFullscreenMode] = useState(false);
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false); 
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate() ; 
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      }, 2000)
    }
  )
  let confirmationCode = () => phoneNumber.substring(5);
  let setLoading = () => {
    setFullscreenMode(false);
    setIsLoading(true);
  }
  let phoneNumberChangeGuard = (e) => {
    e.preventDefault();
    let enteredPhone = e.target.value;
    if (enteredPhone.length <= 11 && enteredPhone.substr(0, 1) === "0") {
      setPhoneNumberError(false);
      setPhoneNumber(enteredPhone);
    } else setPhoneNumberError(true);
  };

  let stepFormContent = () => {
    if (step == 1) {
      let cookies = new Cookies();
      if (cookies.get("phone") && cookies.get("phone").length == 11) setStep(3);
      return (
        <>
          <IconElement
            iconClass={"gg-close"}
            isInteractive={true}
            isVisible={fullscreenMode}
            onClickHandler={() => setFullscreenMode(false)}
          />
          <HeadingElement level={"one"}>به {title} خوش آمدید.</HeadingElement>
          <TextElement>
            لطفا شماره موبایل خود را وارد کنید تا کد فعال‌سازی برای‌ شما ارسال
            شود.
          </TextElement>
          <TextElement>
            <b>شماره موبایل:</b>
          </TextElement>
          <InputElement
            onClickHandler={() => setFullscreenMode(true)}
            onChangeHandler={phoneNumberChangeGuard}
            placeHolder="مثلا ۰۹۱۲۳۴۵۶۷۸۹"
            isErrored={phoneNumberError}
            value={phoneNumber}
            type={"number"}
          />
          <ButtonElement
            onClickHandler={() => {
              if (phoneNumber.length == 11) {
                setStep(step + 1);
              } else setPhoneNumberError(true);
            }}
            colorClass={"bg-green"}
            isVisible={fullscreenMode}
          >
            مرحله بعد
          </ButtonElement>
        </>
      );
    }
    if (step == 2) {
      return (
        <>
          <IconElement
            iconClass={"gg-chevron-right"}
            isInteractive={true}
            isVisible={fullscreenMode}
            onClickHandler={() => {
              setFullscreenMode(false);
              setStep(1);
            }}
          />
          <HeadingElement level={"one"}>
            کد فعال‌سازی را وارد کنید.
          </HeadingElement>
          <TextElement>
            کاربر گرامی {phoneNumber} لطفا کد تایید مندرج در پایین صفحه را وارد
            نمایید.
            <ButtonElement
              onClickHandler={() => {
                setStep(1);
              }}
              colorClass={"green"}
              isVisible={true}
              isInline={true}
            >
              تغییر شماره موبایل
            </ButtonElement>
          </TextElement>
          <AuthCodeContainer
            onChangeHandler={(code) => {
              if (code === confirmationCode()) {
                let cookies = new Cookies();
                cookies.set("phone", phoneNumber, { path: "/" });
                setLoading() ;
                setStep(step + 1); 
              }
            }}
          />
          <FooterContainer>
            <small>
              توجه: این یک ورژن ماک‌شده (تقلید شده) از اپلیکیشن اسنپ می باشد که
              صرفا جهت نمونه کار ساخته شده و هیچ‌گونه کاربرد دیگری ندارد. &nbsp;{" "}
            </small>
            <div className="flasher">کدتایید: {confirmationCode()}</div>
          </FooterContainer>
        </>
      );
    }
    if (step == 3) { 
      setTimeout(() => {
        navigate("/home")
      }, 1000);
    }
  };

  return (
    <>
      <FullscreenContainer colorClass="bg-green" presentationMode={presentationMode}>
        <BannerContainer shouldCollapse={fullscreenMode}>
          <LogoContainer colorClass={"white"} title={title} />
          {isLoading && <LoaderElement />}
        </BannerContainer>
        <LoginFormContainer
          colorClass="bg-white"
          isVisible={!isLoading}
          isFullscreen={fullscreenMode}
        >
          {stepFormContent()}
        </LoginFormContainer>
      </FullscreenContainer>
    </>
  );
};

export default Login;
