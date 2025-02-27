import { addPartsTable } from "./javascript_modules/addPartsTable.mjs";

let jsonString = "{\"990786\":\"EVAPORATOR DRAIN HOUSING ASM\",\"217237\":\"HEATER WIRE, GLASS BRAID, 40\\\", \",\"973390\":\"HEATER, EVAPORATOR DRAIN TUBE\",\"831999\":\"SWITCH, HIGH TEMPERATURE\"}"
let partsContainerId = "partsContainer"

addPartsTable(jsonString, partsContainerId)