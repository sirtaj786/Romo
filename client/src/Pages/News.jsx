import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react'
import style from "./Common.module.css";
import newsImg1 from "../images/news_img1.jpg"
import newsImg2 from "../images/news_img2.jpg"
import newsImg3 from "../images/news_img3.jpg"


const News = () => {
  return (
    <Box>
       <Box mb="55px" className={style.Box1}>
        <Text
          pt="15px"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          color="white"
        >
         News
        </Text>
      </Box>

      <Box className={style.box1}>
      <Text className={style.text}>Latest News</Text>
      <Box display="flex" gap="40px" justifyContent="space-between">
        <Box width="100%">
          <Image src={newsImg1} />
        </Box>
        <Box mt="10px">
          <Text mb="15px" fontSize="2xl" fontWeight="bold">Specimen book. It has survived not only five</Text>
          <Box mb="15px" display="flex" justifyContent="space-between">
            <Text borderBottom="1px solid #F2C119">7 July 2019</Text>
            <Text borderBottom="1px solid #F2C119">Like Comment</Text>
          </Box>
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        </Box>
      </Box>

      <Box mt="40px" display="flex" gap="40px" justifyContent="space-between">
        <Box width="100%">
          <Image src={newsImg2} />
        </Box>
        <Box mt="10px">
          <Text mb="15px" fontSize="2xl" fontWeight="bold">Specimen book. It has survived not only five</Text>
          <Box mb="15px" display="flex" justifyContent="space-between">
            <Text borderBottom="1px solid #F2C119">7 July 2019</Text>
            <Text borderBottom="1px solid #F2C119">Like Comment</Text>
          </Box>
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        </Box>
      </Box>

      <Box mb="80px" mt="40px" display="flex" gap="40px" justifyContent="space-between">
        <Box width="100%">
          <Image src={newsImg3} />
        </Box>
        <Box mt="10px">
          <Text mb="15px" fontSize="2xl" fontWeight="bold">Specimen book. It has survived not only five</Text>
          <Box mb="15px" display="flex" justifyContent="space-between">
            <Text borderBottom="1px solid #F2C119">7 July 2019</Text>
            <Text borderBottom="1px solid #F2C119">Like Comment</Text>
          </Box>
          <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
        </Box>
      </Box>
      </Box>
    </Box>
  )
}

export default News
