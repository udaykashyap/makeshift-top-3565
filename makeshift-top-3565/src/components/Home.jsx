import React, { useEffect } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  const [slider, setSlider] = React.useState(null);
  // console.log(slider?.slickGoTo)
  
  const [counter, setCounter] = React.useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setCounter(counter  + 1)
      if(counter >= 5){
        setCounter(0)
      }
    },5000)
  },[counter])
  console.log(counter)

  const cards = [
    {
     
      image:
        'https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_200223_Bangalore.jpg',
    },
    {
      image:
        'https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_T1-1600x460_221012.jpg',
    },
    {
     
      image:
        'https://www.bigbasket.com/media/uploads/banner_images/hp_m_FMCG-PL_iDFreshoStore_460px-250123.jpg',
    },
    {
      image:
        'https://www.bigbasket.com/media/uploads/banner_images/hp_m_FMCG-PL_TastiesOrigins_460px-250123.jpg',
    },
    {
     
      image:
        'https://www.bigbasket.com/media/uploads/banner_images/hp_m_bcd_paneer_460px-020122.jpg',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'400px'}
      width={'full'}
      overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Box
      position="absolute"
      zIndex={2}
      // margin={"auto"}
      textAlign="center"
      marginTop={"363px"}
      marginLeft={"40%"}
      display={"flex"}
      >
        <div
        style={{
          color:'#555555',
        backgroundColor:"#ffffff",
         opacity: "90%",
        cursor: "pointer",
        lineHeight:"15.4px",
        padding:"5px 24px",
        fontWeight: "500",
        fontSize: "14px",
        borderRight: "1px solid #ffffff8d",
        }}
        
      onClick={() => slider?.slickGoTo(0)}
        >
          Offer on
        <div 
        style={{
          color:'#6F6F6F',
        lineHeight:"12.1px",
        fontWeight: "500",
       fontSize: "11px",
        marginTop: "2px",
        }}
        >
          Staples
        </div>
        </div>
        <div
        style={{
          color:'#555555',
        backgroundColor:"#ffffff",
         opacity: "90%",
        cursor: "pointer",
        lineHeight:"15.4px",
        padding:"5px 24px",
        fontWeight: "500",
        fontSize: "14px",
        borderRight: "1px solid #ffffff8d",
        }}
        
      onClick={() => slider?.slickGoTo(1)}
        >Fresho
        <div 
        style={{
          color:'#6F6F6F',
        lineHeight:"12.1px",
        fontWeight: "500",
       fontSize: "11px",
        marginTop: "2px",
        }}
        >
         Marinates
        </div>
        </div>
        <div
        style={{
          color:'#555555',
        backgroundColor:"#ffffff",
         opacity: "90%",
        cursor: "pointer",
        lineHeight:"15.4px",
        padding:"5px 24px",
        fontWeight: "500",
        fontSize: "14px",
        borderRight: "1px solid #ffffff8d",
        }}
        
      onClick={() => slider?.slickGoTo(2)}
        >Fresho
        <div 
        style={{
          color:'#6F6F6F',
        lineHeight:"12.1px",
        fontWeight: "500",
       fontSize: "11px",
        marginTop: "2px",
        }}
        >
          Store
        </div>
        </div>
        <div
        style={{
          color:'#555555',
        backgroundColor:"#ffffff",
         opacity: "90%",
        cursor: "pointer",
        lineHeight:"15.4px",
        padding:"5px 24px",
        fontWeight: "500",
        fontSize: "14px",
        borderRight: "1px solid #ffffff8d",
        }}
        
      onClick={() => slider?.slickGoTo(3)}
        >Tasties
        <div 
        style={{
          color:'#6F6F6F',
        lineHeight:"12.1px",
        fontWeight: "500",
       fontSize: "11px",
        marginTop: "2px",
        }}
        >
          Origins
        </div>
        </div>
        <div
        style={{
          color:'#555555',
        backgroundColor:"#ffffff",
         opacity: "90%",
        cursor: "pointer",
        lineHeight:"15.4px",
        padding:"5px 24px",
        fontWeight: "500",
        fontSize: "14px",
        borderRight: "1px solid #ffffff8d",
        }}
        
      onClick={() => slider?.slickGoTo(4)}
        >Paneer
        <div 
        style={{
          color:'#6F6F6F',
        lineHeight:"12.1px",
        fontWeight: "500",
       fontSize: "11px",
        marginTop: "2px",
        }}
        >
         Store
        </div>
        </div>
      </Box>
     
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"400px"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                
                {/* <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text> */}
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}