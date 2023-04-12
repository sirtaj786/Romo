import React, { useEffect } from 'react'
import {Box, Button, Image, Input, Text} from '@chakra-ui/react';
import style from "./Common.module.css";
import ban_img from "../images/ban_img.png"
import shoes from "../images/shoes.png"
import underwear from "../images/underwear.png"
import pent from "../images/pent.png"
import t_shirt from "../images/t_shart.png"
import fashion from "../images/fashion.jpg"
import newsImg1 from "../images/news_img1.jpg"
import newsImg2 from "../images/news_img2.jpg"
import newsImg3 from "../images/news_img3.jpg"
import iconMoney from "../images/icon_mony.png"
import iconGift from "../images/icon_gift.png"
import iconCar from "../images/icon_car.png"
import { getData } from '../Redux/Products/ProductActions';
import { useContext } from 'react';
import { ProductContext } from '../ContextAPI/ProductContext';


const Home = () => {
  const { state, dispatch } = useContext(ProductContext);

  useEffect(() => {
    getData(dispatch);
  }, [dispatch]);

  return (
    <Box className={style.container}>
      <Box className={style.card}>
        <Box className={style.box}>
        <Box className={style.left_section}>
          <Text color="#183661" fontSize="6xl" fontWeight="extrabold" >Romofyi</Text>
          <Text color="#F2C119" fontSize="9xl" fontWeight="normal">Trands 2019</Text>
          <Text color="black" fontSize="4xl" fontWeight="medium">A huge fashion collection for ever</Text>
          <Button bg="blue" color="white" mt="30px" _hover={{bg:"#F2C119",color:"black"}}>SHOP NOW</Button>
        </Box>
        <Box className={style.right_section}>
          <Image margin="auto" src={ban_img}/>
        </Box>
        </Box>
      </Box>

      <Box className={style.card1}>
       <Box bg='#F2C119'><Image paddingTop='40px' margin='auto' src={shoes}/><Text textAlign='center' color='white' fontWeight='bold'>SHOES</Text></Box>
       <Box bg='#183661'><Image paddingTop='40px' margin='auto' src={underwear}/><Text textAlign='center' color='white' fontWeight='bold'>UNDERWEAR</Text></Box>
       <Box bg='#F2C119'><Image paddingTop='40px' margin='auto' src={pent}/><Text textAlign='center' color='white' fontWeight='bold'>PENT & SOCKS</Text></Box>
       <Box bg='#183661'><Image paddingTop='40px' margin='auto' src={t_shirt}/><Text textAlign='center' color='white' fontWeight='bold'>T-SHIRT & TANKSTOP</Text></Box>
       <Box bg='#F2C119'><Image paddingTop='40px' margin='auto' src={shoes}/><Text textAlign='center' color='white' fontWeight='bold'>SHOES</Text></Box>
       <Box bg='#183661'><Image paddingTop='40px' margin='auto' src={underwear}/><Text textAlign='center' color='white' fontWeight='bold'>UNDERWEAR</Text></Box>
      </Box>

      <Box className={style.card2}>
       <Box className={style.box1}>
        <Text className={style.text}>Featured Products</Text>
        <Box mb="50px" className={style.productCard}>
         {(state.filterData.length==0?(state.data):(state.filterData)).map((el)=>
         <Box className={style.singleProduct} key={el.id} >
          <Image width="100%" height="250px" src={el.imageURL} />
          <Text mb="5px" textAlign="center" fontWeight="black">{el.name}</Text>
          <Text mb="10px" textAlign="center">{"Rs "+el.price}</Text>
         </Box>
         )}
        </Box >
        <Box mt="80px" marginBottom="50px">
        <Button _hover={{bg:"#F2C119",color:"black"}} display="block" margin="auto" bg="#183661" color="white">SEE MORE</Button>
        </Box>
       </Box>
      </Box>

      <Box mb="80px">
        <Image src={fashion} />
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

     <Box display="flex" margin="auto" justifyContent="space-between" mb="100px">
      <Box>
        <Text fontWeight="bold" fontSize="3xl">Subscribe To The Newsletter</Text>
      </Box>
      <Box display="flex" gap="10px">
        <Input placeholder='Enter Your Email' />
        <Button bg="#183661" color="white" _hover={{bg:"#F2C119",color:"black"}}>Subscribe</Button>
      </Box>
     </Box>
     
     <Box className={style.bottomSection}>
      <Box className={style.Box}>
        <Image src={iconMoney}/>
        <Text mt="10px">Money Back</Text>
      </Box>
      <Box className={style.Box}>
        <Image src={iconGift}/>
        <Text mt="10px">Special Gift</Text>
      </Box>
      <Box className={style.Box}>
      <Image src={iconCar}/>
      <Text mt="10px">Free Shipping</Text>
      </Box>
     </Box>
      </Box>
    </Box>
  )
}

export default Home