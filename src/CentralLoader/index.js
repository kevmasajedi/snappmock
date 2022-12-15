import { redirect } from "react-router-dom";
import Cookies from "universal-cookie";

const CentralLoader = () => {
    const cookies = new Cookies(); 
    if(cookies.get("phone") && cookies.get("phone").length == 11) { return redirect("/home")}
    else {return redirect("/login")}
}

export default CentralLoader ; 