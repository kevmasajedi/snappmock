import "./index.css"
const HeadingElement = ({children, level}) => {
    return(
        <div className={"heading " + level}>{children}</div>
    )
}
export default HeadingElement ; 