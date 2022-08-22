import { React, useState, useEffect } from "react";
import "./Card.css";
import upArrow from "../assets/uparrow.svg";
import downArrow from "../assets/downarrow.svg";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Image,
  Text,
  Tooltip,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import axios from "axios";
export default function Card(props) {
  const [getUV, setUV] = useState([]);
  useEffect(() => {
    const getUVIndex = async () => {
      try {
        const uv = await axios.get(
          "https://api.openweathermap.org/data/2.5/onecall?lat=12.9716&lon=77.5946&exclude=hourly,daily&appid=d7e6993219c04148c172779b48b95063"
        );
        console.log(uv);
        const currentValues = Object.values(uv.data.current);
        console.log(currentValues);
        setUV(currentValues);
        // console.log(getUV);
      } catch (error) {
        console.log(error);
      }
    };
    getUVIndex();
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let arrow;
  if (props.item.bool) arrow = upArrow;
  else arrow = downArrow;
  return (
    <>
      <div className="card">
        <div className="card-info" onClick={onOpen}>
          <div
            className="card-title"
            style={{ color: `${props.item.background}` }}
          >
            {props.item.title}
          </div>
          <div className="card-content">
            <img src={arrow} alt="" />
            <div className="card-content-value">
              {props.item.value}
              <sup
                style={{
                  fontFamily: "Poppins",
                  fontSize: "0.8rem",
                  color: "white",
                }}
              >
                {props.item.sup}
              </sup>
            </div>
          </div>
          <Tooltip label="Click me">
            {props.item.title === "UV Index" ? (
              <div className="more" style={{ color: "#FF8650" }}>
                Realtime Data from API...
              </div>
            ) : (
              <div className="more">More Info...</div>
            )}
          </Tooltip>
        </div>
      </div>
      {props.item.title === "UV Index" ? (
        <Modal onClose={onClose} size="xl" isOpen={isOpen}>
          <ModalOverlay>
            <ModalContent paddingBottom="10px">
              <ModalHeader>Bangalore</ModalHeader>
              <ModalBody>
                <TableContainer>
                  <Table variant="striped" colorScheme="whatsapp" size="md">
                    <Thead>
                      <Tr>
                        <Th>Parameter</Th>
                        <Th>Real Time Value</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>Sunrise</Td>
                        <Td>{getUV[1]}</Td>
                      </Tr>
                      <Tr>
                        <Td>Sunset</Td>
                        {/* <Td></Td> */}
                        <Td>{getUV[2]}</Td>
                      </Tr>
                      <Tr>
                        <Td>Temperature</Td>
                        {/* <Td></Td> */}
                        <Td>{getUV[3]}°F</Td>
                      </Tr>
                      <Tr>
                        <Td>Feels Like</Td>
                        {/* <Td></Td> */}
                        <Td>{getUV[4]}°F</Td>
                      </Tr>
                      <Tr>
                        <Td>Humidity</Td>
                        {/* <Td></Td> */}
                        <Td>{getUV[6]}%</Td>
                      </Tr>
                      <Tr>
                        <Td>Pressure</Td>
                        {/* <Td></Td> */}
                        <Td>{getUV[5]}hPa</Td>
                      </Tr>
                      <Tr>
                        <Td>UV Index</Td>
                        {/* <Td></Td> */}
                        <Td>{getUV[8]}</Td>
                      </Tr>
                      <Tr>
                        <Td>Visibility</Td>
                        {/* <Td></Td> */}
                        <Td>{getUV[10]}</Td>
                      </Tr>
                      <Tr>
                        <Td>Wind Speed</Td>
                        {/* <Td></Td> */}
                        <Td>{getUV[11]} miles/hour</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </ModalBody>
              <ModalCloseButton />
            </ModalContent>
          </ModalOverlay>
        </Modal>
      ) : (
        <Modal onClose={onClose} size="xl" isOpen={isOpen}>
          <ModalOverlay>
            <ModalContent>
              <ModalHeader>{props.item.title}</ModalHeader>
              <ModalBody>
                <Box maxW="sm" overflow="hidden">
                  <Image src={props.item.img} alt="" objectFit="cover" />
                </Box>
                <Text fontSize="md" color="black" paddingBottom="10px">
                  {props.item.details}
                </Text>
              </ModalBody>
              <ModalCloseButton />
            </ModalContent>
          </ModalOverlay>
        </Modal>
      )}
    </>
  );
}
