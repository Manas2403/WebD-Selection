import React, { useEffect } from "react";
import axios from "axios";
export default function Map() {
  useEffect(() => {
    const getMap = async () => {
      try {
        const data = await axios.get(``);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMap();
  }, []);
}
