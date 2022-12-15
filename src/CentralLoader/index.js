import { redirect } from "react-router-dom";
import Cookies from "universal-cookie";

const CentralLoader = () => {
    const cookies = new Cookies(); 
    if(cookies.get("phone")) {}
    return redirect("/login")
}

export default CentralLoader ; 