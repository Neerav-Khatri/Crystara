import { Badge, Box, Flex, Image, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

export default function ProductCard({ data, handleWishAdd, handleWishDelete, handleDetailPage }) {
    const [liked, setLiked] = useState(false);
    const toast = useToast();

    const handleAddWishlist = () => {
        setLiked(true);
        handleWishAdd(data);
        toast({
            title: "Product added to Wishlist",
            status: "success",
            position: "top",
            isClosable: true,
        })
    }

    const handleRemoveWishlist= () => {
        setLiked(false);
        handleWishDelete(data.id);
        toast({
            title: "Product removed from Wishlist",
            status: "info",
            position: "top",
            isClosable: true,
        })
    }
    
    return (
        <div>
            <Flex direction="column" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" >
                <Box pos="relative">
                    <Image w="100%" src={data.src1} alt="image"   onClick={() => handleDetailPage(data.id)}/>
                {data.tag!==undefined ? <Box color={"#786c84"} bgColor={"#f2debc"} alt="tag" w="33%" pos="absolute" top="10px" left={"10px"} fontWeight={700} fontSize={"0.7rem"}>{data.tag}</Box> : null}
                    <Box pos="absolute" right="20px" bottom="20px" _hover={{cursor: "pointer"}} >{liked ? <FcLike size="2vw" onClick={handleRemoveWishlist}/> : <AiOutlineHeart size="2vw" onClick={handleAddWishlist}/>}</Box>
                </Box>   
                <Box textAlign="left" p="10px">
                    <Flex gap="15px" mb="10px" fontWeight="bold">
                        <Text fontSize={"0.8rem"}>₹ {data.currentPrice}</Text>
                        {data.originalPrice!==undefined? data.originalPrice!==""? <Text color="#686868" textDecorationLine="line-through" fontSize={"0.7rem"}>₹ {data.originalPrice}</Text> : null : null}
                    </Flex>
                    <Text fontSize={"0.7rem"} fontWeight={500} >{data.material}</Text>
                    <Text noOfLines="1" fontSize={"0.7rem"} fontWeight={500}>{data.name}</Text>
                </Box>   
            </Flex>
        </div>
    )
}