import "./index.css";

const Logo = ({ colorClass, title }) => {
  return (
    <div className={"logo-container " + colorClass}>
      <div className="logo-title">{title}</div>
      <div className="logo-subtitle">تاکسی‌ هوشمند آنلاین</div>
    </div>
  );
};

export default Logo;
