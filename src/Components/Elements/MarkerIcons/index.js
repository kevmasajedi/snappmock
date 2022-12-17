import L from "leaflet" ; 
import originIcon from "./marker-icon-origin.png"
import originIconRetina from "./marker-icon-origin-retina.png"
import destinationIcon from "./marker-icon-destination.png"
import destinationIconRetina from "./marker-icon-destination-retina.png"

const MarkerIconOrigin = new L.icon({
    iconUrl: originIcon,
    iconRetinaUrl: originIconRetina , 
    iconSize:[64,64]
})
const MarkerIconDestination = new L.icon({
    iconUrl: destinationIcon,
    iconRetinaUrl: destinationIconRetina , 
    iconSize:[64,64]
})

export {MarkerIconOrigin , MarkerIconDestination} ; 