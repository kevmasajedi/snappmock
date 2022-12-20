import L from "leaflet" ; 
import originIcon from "./marker-icon-origin.png"
import originIconRetina from "./marker-icon-origin-retina.png"
import originIconTooltip from "./marker-icon-origin-tooltip.png"
import originIconTooltipRetina from "./marker-icon-origin-tooltip-retina.png"
import destinationIcon from "./marker-icon-destination.png"
import destinationIconRetina from "./marker-icon-destination-retina.png"
import destinationIconTooltip from "./marker-icon-destination-tooltip.png"
import destinationIconTooltipRetina from "./marker-icon-destination-tooltip-retina.png"

const MarkerIconOrigin = new L.icon({
    iconUrl: originIcon,
    iconRetinaUrl: originIconRetina , 
    iconSize:[64,64],
    iconAnchor:[32,64]
})
const MarkerIconDestination = new L.icon({
    iconUrl: destinationIcon,
    iconRetinaUrl: destinationIconRetina , 
    iconSize:[64,64],
    iconAnchor:[32,64]
})
const MarkerIconOriginTooltip = new L.icon({
    iconUrl: originIconTooltip,
    iconRetinaUrl: originIconTooltipRetina , 
    iconSize:[92,64],
    iconAnchor:[70,64]
})
const MarkerIconDestinationTooltip = new L.icon({
    iconUrl: destinationIconTooltip,
    iconRetinaUrl: destinationIconTooltipRetina , 
    iconSize:[92,64],
    iconAnchor:[70,64]
})

export {MarkerIconOrigin , MarkerIconDestination , MarkerIconOriginTooltip, MarkerIconDestinationTooltip} ; 