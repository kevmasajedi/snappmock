import "./index.css" ; 
const FullscreenContainer = ({colorClass, children}) => {
    return(
        <div className={"fs-container " + colorClass}>
            {children}
        </div>
    )
}
export default FullscreenContainer