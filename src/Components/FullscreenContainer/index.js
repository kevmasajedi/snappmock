import "./index.css" ; 
const FullscreenContainer = ({colorClass, children}) => {
    return(
        <div className={"fs-container " + colorClass} onClick={(e) => e.preventDefault()}>
            {children}
        </div>
    )
}
export default FullscreenContainer