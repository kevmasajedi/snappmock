import "./index.css";

const Logo = ({ colorClass, title, presentationMode, isVisible = true }) => {
  return (
    isVisible && <div
      className={
        "logo-container " +
        (presentationMode ? " presentation " : "") +
        colorClass
      }
    >
      <div className="logo-title">{title}</div>
      {!presentationMode && <div className="logo-subtitle">تاکسی‌ هوشمند آنلاین</div>}
      {presentationMode && (
        <>
        <div className="logo-subtitle dark-gray">لایه‌ فرانت‌اند مشابه اپلیکیشن اسنپ</div>
        <div className="logo-subtitle dark-gray">ساخته شده با: ReactJS، Redux، Leaflet، Neshan Webservices API</div>
        <div className="logo-subtitle dark-gray">طراحی و اجرا: کیوان مساجدی</div>
        </>
      )}
    </div>
  );
};

export default Logo;
