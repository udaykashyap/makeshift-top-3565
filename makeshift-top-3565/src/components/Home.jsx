import React, { useEffect, useRef } from 'react';
import "./Home.css";
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
   let id= setInterval(()=>{
      setCounter(counter  + 1)
      if(counter >= 4){
        setCounter(0)
      }
    },5000)

    // clearInterval(id)

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
    <>
      
    <Box
      position={'relative'}
      height={'400px'}
      width={'full'}
      className="first"
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
      marginTop={"356px"}
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
        borderBottom: counter == 0 && "5px solid #84c225 "
        }}
        
      onClick={() => {
        slider?.slickGoTo(0);
      setCounter(0)
      }}
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
        borderBottom: counter == 1 && "5px solid #84c225 ",
        }}
        
      onClick={() => {
        slider?.slickGoTo(1);
      setCounter(1)
      }}
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
        borderBottom: counter == 2 && "5px solid #84c225 ",
        }}
        
      onClick={() => {
        slider?.slickGoTo(2);
      setCounter(2)
      }}
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
        borderBottom: counter == 3 && "5px solid #84c225 ",
        }}
        
      onClick={() => {
        slider?.slickGoTo(3);
      setCounter(3)
      }}
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
        borderBottom: counter == 4 && "5px solid #84c225 ",
        }}
        
      onClick={() => {
        slider?.slickGoTo(4);
      setCounter(4)
      }}
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

<div className='second' >
  <div className='egg' >
    <img src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_01.png' />
  </div>
  <div className='neu' >
    <img src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_02.png' />
  </div>
  <div className='ayuv' >
    <img src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_03.png' />
  </div>

  <div className='ayu' >
    <img src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_06.png' />
  </div>

  <div className='ayu' >
    <img src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_05.png' />
    

  </div>
 

  <div className='ayu' >
    <img src='https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_250123_04.png' />
    

  </div>

</div>

<div className='heading' >
<h2>Bank Offers</h2>
</div>

<div className='third' >
  <div  >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/44f2a490-4171-46a0-a296-820de2902db2/t1_hp_aff_m_amex-tues_360_110223.jpg' />
  </div>
  <div >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/44f2a490-4171-46a0-a296-820de2902db2/t1_hp_aff_m_indusind_360_110223.jpg' />
  </div>
  <div  >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/44f2a490-4171-46a0-a296-820de2902db2/t1_hp_aff_m_AU-bank-300_360_110223.jpg' />
  </div>

  <div>
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/44f2a490-4171-46a0-a296-820de2902db2/t1_hp_aff_m_hsbc_360_110223.jpg' />
  </div>

</div>


<div className='heading' >
<h2>Most Popular</h2>
</div>

<div className='third' >
  <div  >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/6c5098ec-7576-4bc4-b0c2-facee8f2c4f0/hp_winter-mostpopularStorefront_m_480_251222_01.jpg' />
  </div>
  <div >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/6c5098ec-7576-4bc4-b0c2-facee8f2c4f0/hp_stationy-mostpopularStorefront_m_480_251222_02.jpg' />
  </div>
  <div  >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/6c5098ec-7576-4bc4-b0c2-facee8f2c4f0/hp_winter-loc-mostpopularStorefront_m_480_251222_03.jpg' />
  </div>

  <div>
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/6c5098ec-7576-4bc4-b0c2-facee8f2c4f0/hp_say-mostpopularStorefront_m_480_251222_04.jpg' />
  </div>

</div>

<div className='heading' >
<h2>Top Offers</h2>
</div>

<div className='third' >
  <div  >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/d92f77c6-a07a-4439-9591-69a4fffe8d89/hp_dow-topoffersStorefront_m_480_250223_01.jpg' />
  </div>
  <div >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/d92f77c6-a07a-4439-9591-69a4fffe8d89/hp_big-packs-topoffersStorefront_m_480_250223_02.jpg' />
  </div>
  <div  >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/d92f77c6-a07a-4439-9591-69a4fffe8d89/hp_combos-topoffersStorefront_m_480_250223_03.jpg' />
  </div>

  <div>
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/d92f77c6-a07a-4439-9591-69a4fffe8d89/hp_30-corner-topoffersStorefront_m_480_250223_04.jpg' />
  </div>

</div>

<div className='heading' >
<h2>Fruits & Vegetables</h2>
</div>

<div className='fourth' >
  <div className='egg' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/bca76c6f-6791-4257-a49f-50a99f7a08ac/hp_organic-fnc-fnv_Storefront_m_250223_01.jpg' />
  </div>
  <div className='neu' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/bca76c6f-6791-4257-a49f-50a99f7a08ac/hp_fresh-fruits-fnv_Storefront_m_250223_02.jpg' />
  </div>
  <div className='nut' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/bca76c6f-6791-4257-a49f-50a99f7a08ac/hp_fresh-vegetables-fnv_Storefront_m_250223_03.jpg' />
  </div>

  <div className='coco' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/bca76c6f-6791-4257-a49f-50a99f7a08ac/hp_cuts-sprouts-fnv_Storefront_m_250223_04.jpg' />
  </div>

  <div className='last' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/bca76c6f-6791-4257-a49f-50a99f7a08ac/hp_exotic-fruits-fnv_Storefront_m_250223_05.jpg' />
    

  </div>
 

  <div className='last' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/bca76c6f-6791-4257-a49f-50a99f7a08ac/hp_herbs-seasonings-fnv_Storefront_m_250223_06.jpg' />
    

  </div>

</div>

<div className='heading' >
<h2>Your Daily Staples</h2>
</div>

<div className='fourth' >
  <div className='egg' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/2ac32ff3-d0b5-4c1b-9910-574b6ca4671e/hp_atta-flour-staplesStorefront_m_480_250223_01.jpg' />
  </div>
  <div className='neu' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/2ac32ff3-d0b5-4c1b-9910-574b6ca4671e/hp_rice-staplesStorefront_m_480_250223_02.jpg' />
  </div>
  <div className='nut' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/2ac32ff3-d0b5-4c1b-9910-574b6ca4671e/hp_dals-pulses-staplesStorefront_m_480_250223_03.jpg' />
  </div>

  <div className='coco' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/2ac32ff3-d0b5-4c1b-9910-574b6ca4671e/hp_cooking-oils-staplesStorefront_m_480_250223_04.jpg' />
  </div>

  <div className='last' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/2ac32ff3-d0b5-4c1b-9910-574b6ca4671e/hp_dry-fruits-staplesStorefront_m_480_250223_05.jpg' />
    

  </div>
 

  <div className='last' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/2ac32ff3-d0b5-4c1b-9910-574b6ca4671e/hp_salt-staplesStorefront_m_480_250223_06.jpg' />
    

  </div>

</div>

<div className='heading' >
<h2>Beverages</h2>
</div>

<div className='fourth' >
  <div className='egg' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/5c0f594f-6679-4ed9-b160-8075f76b543d/hp_bev-health-deink_m_250223_01.jpg' />
  </div>
  <div className='neu' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/5c0f594f-6679-4ed9-b160-8075f76b543d/hp_beverages-tea-coffee_m_250223_02.jpg' />
  </div>
  <div className='nut' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/5c0f594f-6679-4ed9-b160-8075f76b543d/hp_bev-flavoured-milk_m_250223_03.jpg' />
  </div>

  <div className='coco' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/5c0f594f-6679-4ed9-b160-8075f76b543d/hp_bevfrulty-indulg_m_250223_04.jpg' />
  </div>

  <div className='last' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/5c0f594f-6679-4ed9-b160-8075f76b543d/hp_bev-power-boosters_m_250223_05.jpg' />
    

  </div>
 

  <div className='last' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/5c0f594f-6679-4ed9-b160-8075f76b543d/hp_bevecrick-it_m_250223_06.jpg' />
    

  </div>

</div>

<div className='heading' >
<h2>Snack Store</h2>
</div>

<div className='third' >
  <div  >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/c7d608b9-2034-4972-9c4b-51f43a6c859e/hp_Daily-chai-time_m_480_250223_01.jpg' />
  </div>
  <div >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/c7d608b9-2034-4972-9c4b-51f43a6c859e/hp_Daily-morning-starters_m_480_250223_02.jpg' />
  </div>
  <div  >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/c7d608b9-2034-4972-9c4b-51f43a6c859e/hp_Daily-satisfy-your-hubg_m_480_250223_03.jpg' />
  </div>

  <div>
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/c7d608b9-2034-4972-9c4b-51f43a6c859e/hp_Daily-sweet-craving_m_480_250223_04.jpg' />
  </div>

</div>

<div className='heading' >
<h2>Cleaning & Household</h2>
</div>

<div className='third' >
  <div  >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/25dc7bdd-4637-4775-90bc-50ed7b95ce63/hp_cleaners-disfec_cleaningStorefront_m_480_250223_01.jpg' />
  </div>
  <div >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/25dc7bdd-4637-4775-90bc-50ed7b95ce63/hp_detergebts-favric-cleaningStorefront_m_480_250223_02.jpg' />
  </div>
  <div  >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/25dc7bdd-4637-4775-90bc-50ed7b95ce63/hp_disposable-bags-cleaningStorefront_m_480_250223_03.jpg' />
  </div>

  <div>
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/25dc7bdd-4637-4775-90bc-50ed7b95ce63/hp_fresheners-repellem-cleaningStorefront_m_480_250223_04.jpg' />
  </div>

</div>

<div className='heading' >
<h2>Beauty & Hygiene</h2>
</div>

<div className='fourth' >
  <div className='egg' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/19d8368c-64c9-422f-96fd-2b88fb5fec13/hp_beauty-makeup-splash_m_250223_01.jpg' />
  </div>
  <div className='neu' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/19d8368c-64c9-422f-96fd-2b88fb5fec13/hp_beauty-summer-lotions_m_250223_02.jpg' />
  </div>
  <div className='nut' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/19d8368c-64c9-422f-96fd-2b88fb5fec13/hp_beauty-scentful_m_250223_03.jpg' />
  </div>

  <div className='coco' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/19d8368c-64c9-422f-96fd-2b88fb5fec13/hp_beauty-shaving_m_250223_04.jpg' />
  </div>

  <div className='last' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/19d8368c-64c9-422f-96fd-2b88fb5fec13/hp_beauty-min-30_m_250223_05.jpg' />
    

  </div>
 

  <div className='last' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/19d8368c-64c9-422f-96fd-2b88fb5fec13/hp_beauty-under-199_m_250223_06.jpg' />
    

  </div>

</div>

<div className='heading' >
<h2>Home & Kitchen Essentials</h2>
</div>

<div className='fourth' >
  <div className='egg' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/310689be-abde-4e44-8695-1aa40d272894/hp_GMunder-149_m_250223_01.jpg' />
  </div>
  <div className='neu' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/310689be-abde-4e44-8695-1aa40d272894/hp_GM150-299_m_250223_02.jpg' />
  </div>
  <div className='nut' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/310689be-abde-4e44-8695-1aa40d272894/hp_GMpressure-cooker_m_250223_03.jpg' />
  </div>

  <div className='coco' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/310689be-abde-4e44-8695-1aa40d272894/hp_GM-glasseare_m_250223_04.jpg' />
  </div>

  <div className='last' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/310689be-abde-4e44-8695-1aa40d272894/hp_GMkitchen-tools_m_250223_05.jpg' />
    

  </div>
 

  <div className='last' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/310689be-abde-4e44-8695-1aa40d272894/hp_GMbatteries_m_250223_06.jpg' />
    

  </div>

</div>

<div className='heading' >
<h2>Brand Store</h2>
</div>

<div className='fourth' >
  <div className='egg' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/f4202ee9-b5fb-46ad-a087-8c5f6ff4db36/amul-hp_brandStorefront_m_480_250223_01.jpg' />
  </div>
  <div className='neu' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/f4202ee9-b5fb-46ad-a087-8c5f6ff4db36/dettol-hp_brandStorefront_m_480_250223_02.jpg' />
  </div>
  <div className='nut' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/f4202ee9-b5fb-46ad-a087-8c5f6ff4db36/coca-cola-hp_brandStorefront_m_480_250223_03.jpg' />
  </div>

  <div className='coco' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/f4202ee9-b5fb-46ad-a087-8c5f6ff4db36/loreal-hp_brandStorefront_m_480_250223_04.jpg' />
  </div>

  <div className='last' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/f4202ee9-b5fb-46ad-a087-8c5f6ff4db36/indai-gate-hp_brandStorefront_m_480_250223_05.jpg' />
    

  </div>
 

  <div className='last' >
    <img src='https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/eed60a97-9621-4c4e-8f87-6053da9b7a72/f4202ee9-b5fb-46ad-a087-8c5f6ff4db36/durex-hp_brandStorefront_m_480_250223_06.jpg' />
    

  </div>

</div>

<div className='heading' >
<h2>Featured Recipes</h2>
</div>

<div className='lastimg'>
  <img src='https://www.bigbasket.com/media/uploads/banner_images/hp_bbw_c_400_web_wellness_banner_1_dec_w2_14012023.jpg' />
</div>

<div className='writing'>
<h2>
bigbasket – online grocery store
</h2>
<p>
Did you ever imagine that the freshest of <span>fruits and vegetables</span>, top quality pulses and food grains, <span>dairy products</span> and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? India’s first comprehensive online megastore, bigbasket.com, brings a whopping 20000+ products with more than 1000 brands, to over 4 million happy customers. From household cleaning products to beauty and makeup, bigbasket has everything you need for your daily needs. bigbasket.com is convenience personified We’ve taken away all the stress associated with shopping for daily essentials, and you can now order all your household products and even buy groceries online without travelling long distances or standing in serpentine queues. Add to this the convenience of finding all your requirements at one single source, along with great savings, and you will realize that bigbasket- India’s largest online supermarket, has revolutionized the way India shops for groceries. Online grocery shopping has never been easier. Need things fresh? Whether it’s fruits and vegetables or dairy and meat, we have this covered as well! Get fresh eggs, meat, fish and more online at your convenience. Hassle-free Home Delivery options
</p>
<p>We deliver to 25 cities across India and maintain excellent delivery times, ensuring that all your products from groceries to snacks <span>branded foods</span> reach you in time</p>

<ul>
  <li>Slotted Delivery: Pick the most convenient delivery slot to have your grocery delivered. From early morning delivery for early birds, to late-night delivery for people who work the late shift, bigbasket caters to every schedule.</li>
  <li>Express Delivery: This super useful service can be availed by customers in cities like Bangalore, Mumbai, Pune, Chennai, Kolkata, Hyderabad and Delhi-NCR in which we deliver your orders to your doorstep in 90 Minutes.</li>
  <li>BB Specialty stores: Missed out on buying that essential item from your favorite neighborhood store for tonight’s party? We’ll deliver it for you! From bakery, sweets and meat to flowers and chocolates, we deliver your order in 90 minutes, through a special arrangement with a nearby specialty store, verified by us.</li>
</ul>

</div>
</>
  );
}