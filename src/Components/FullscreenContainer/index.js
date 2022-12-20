import "./index.css" ; 
const FullscreenContainer = ({colorClass, presentationMode, children}) => {
    return(
        <div className={"fs-container " + colorClass + (presentationMode ? " presentation " : "")} onClick={(e) => e.preventDefault()}>
            {children}
        </div>
    )
}
export default FullscreenContainer