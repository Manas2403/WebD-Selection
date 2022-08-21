import co2 from "../assets/co2.png";
import arctic from "../assets/arctic.png";
import global from "../assets/global.png";
import ice from "../assets/ice-sheet.png";
import sea from "../assets/sea.png";
import ocean from "../assets/ocean.png";
const data = [
  {
    id: 1,
    title: "Carbon Dioxide",
    background: "#FF555E",
    value: 419,
    sup: "parts par million (current)",
    bool: true,
    details:
      "Carbon dioxide (CO2) is an important heat-trapping gas, or greenhouse gas, that comes from the extraction and burning of fossil fuels (such as coal, oil, and natural gas), from wildfires, and from natural processes like volcanic eruptions. The first graph shows atmospheric carbon dioxide (CO2) levels measured at Mauna Loa Observatory, Hawaii, in recent years, with natural, seasonal changes removed.",
    img: co2,
  },
  {
    id: 2,
    title: "Global Temperature",
    background: "#FF8650",
    value: 1.01,
    sup: "°C since 1880",
    bool: true,
    details:
      "This graph shows the change in global surface temperature compared to the long-term average from 1951 to 1980. Nineteen of the hottest years have occurred since 2000, with the exception of 1998. The year 2020 tied with 2016 for the hottest year on record since recordkeeping began in 1880 (source: NASA/GISS). NASA’s analyses generally matches independent analyses prepared by the Climatic Research Unit and the National Oceanic and Atmospheric Administration (NOAA).",
    img: global,
  },
  {
    id: 3,
    title: "Arctic Sea Ice Extent",
    background: "#ffe981",
    value: 13,
    sup: "percent per decade since 1979",
    bool: false,
    details:
      "Arctic sea ice reaches its minimum extent (the area in which satellite sensors show individual pixels to be at least 15% covered in ice) each September. September Arctic sea ice is now shrinking at a rate of 13% per decade, compared to its average extent during the period of 1981 to 2010. This graph shows the size of the Arctic sea ice each September since satellite observations started in 1979. The monthly value shown is the average of daily observations across the month of September during each year and is measured from satellites.",
    img: arctic,
  },
  {
    id: 4,
    title: "Ice Sheets",
    background: "#8bf18b",
    value: 427,
    sup: "billion metric tons per year",
    bool: false,
    details:
      "The GRACE mission ended in June 2017. The GRACE Follow-On mission began collecting data in June 2018 and is continuing to monitor both ice sheets. This record includes new data-processing methods and is continually updated as more numbers come in, with a delay of up to two months.",
    img: ice,
  },
  {
    id: 5,
    title: "Sea Level",
    background: "#9b6ef3",
    value: 4,
    sup: "inches since January 1993",
    bool: true,
    details:
      "Sea level rise is caused primarily by two factors related to global warming: the added water from melting ice sheets and glaciers, and the expansion of seawater as it warms. The first graph tracks the change in global sea level since 1993, as observed by satellites.",
    img: sea,
  },
  {
    id: 6,
    title: "Ocean Warming",
    background: "#83b2ff",
    value: 337,
    sup: "zettajoules since 1955",
    bool: true,
    details:
      "Covering more than 70% of Earth’s surface, our global ocean has a very high heat capacity. It has absorbed 90% of the warming that has occurred in recent decades due to increasing greenhouse gases, and the top few meters of the ocean store as much heat as Earth's entire atmosphere.The effects of ocean warming include sea level rise due to thermal expansion, coral bleaching, accelerated melting of Earth’s major ice sheets, intensified hurricanes, and changes in ocean health and biochemistry.",
    img: ocean,
  },
];
export default data;
