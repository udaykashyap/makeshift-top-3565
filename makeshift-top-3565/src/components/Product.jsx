import React , { useState, useContext } from 'react'
import { useEffect } from 'react';
import {
    Stack,
    Container,
  } from '@chakra-ui/react';
  import Slider from 'react-slick';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Flex,
    Circle,
    Box,
    Button,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    IconButton, useBreakpointValue,
    Tooltip,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// import { Context } from '../Components/Context';

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
  

function Rating({ rating, numReviews }) {
    return (
      <Flex d="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        {/* <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box> */}
      </Flex>
    );
  }
  
  function ProductAddToCart(
    {name,brand,category, emi,id, img, keyfeatures,mrp, price, save,
    warranty }
  ) {
    name = name.substring(0, 32)
    // console.log(name,brand,category, emi,id, img, keyfeatures,mrp, price, save,
    //     warranty )
        const navigate = useNavigate();
        let Mrp= +mrp
  
    return (
       
      <Flex 
    //   p={50}
       w="full" alignItems="center" justifyContent="center">
        <Box
        onClick={()=>navigate(`/products/${id}`)}
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          {id && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
  
          <Image
            src={img}
            alt={`Picture of ${name}`}
            roundedTop="lg"
            width={300}
            margin={"auto"}
          />
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {id && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                  Save {save} %
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="m"
                fontWeight="semibold"
                as="h4"
                color="#84c225"
                _hover={{
                    color: "black"
                  }}
                lineHeight="tight"
                isTruncated>
                {name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                <chakra.a href={'#'} display={'flex'}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={Math.floor(Math.random() * 5) + 3} numReviews="1" />
              <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')}  mr={"-18px"} >
                <Box as="span" color={'gray.600'} fontSize="lg">
                ₹
                </Box>
                {price}
              </Box>
              <Box fontSize="m" textDecoration={'line-through'} color={useColorModeValue('gray.800', 'white')} ml={"0%"}  mt={"5px"} >
                <Box as="span" color={'gray.600'} fontSize="s">
                ₹
                </Box>
                 {Mrp.toFixed(2)}
              
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    );
  }


const Product = () => {

    const [data, setData]= useState([]);
    const [total , setTotal] = useState(1);
    const [page, setPage] = useState(1)
    const [order, setOrder] = useState("desc")
    // const {  search } = useContext(Context)
    // console.log(search)
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
  

     useEffect(()=>{
        axios(`https://creepy-llama.cyclic.app/products?_page=${page}&_limit=12&_sort=price&_order=${order}&category=Audio`)
        .then((res)=>{
            setData(res.data)
            setTotal(Math.ceil(+res.headers['x-total-count']/12))
        })
     },[page,  order ]);

     console.log(data)
     if(page < 1){
        setPage(1)
     }
     if(page > total){
        setPage(total)
     }
console.log(total)
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
   <Button size='md'  mt={"20px"}
      ml={"40.5%"}
      mr={"2%"}
      onClick={()=>setOrder("asc")}
     bg={useColorModeValue("#84c225", 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              _hover={{
                transform: 'translateY(2px)',
                bg: "black",
                boxShadow: 'lg',
              }}  >
    Low To High
  </Button>
  <Button  size='md'  mt={"20px"}  bg={useColorModeValue("#84c225", 'gray.50')}
   onClick={()=>setOrder("desc")}
              color={useColorModeValue('white', 'gray.900')}
              _hover={{
                transform: 'translateY(2px)',
                bg: "black",
                boxShadow: 'lg',
              }} >
  High To Low 
  </Button>
    <div style={{display: "grid" , gridTemplateColumns :"repeat(4, 1fr )" , gap: "20px" , margin: "25px" } }  >

    {data?.map((e)=>
        // console.log(e.name);
        <ProductAddToCart key={e.id} name={e.name} brand={e.brand} category={e.category} emi={e.emi} id={e.id} img={e.img} keyfeatures={e.keyfeatures} mrp={e.mrp} price={e.price} save={e.save}
    warranty={e.warranty} 
        />
    )}
            </div>
            <Button size='md'  mb={"20px"}
      ml={"42.5%"}
    //   disabled={page==1}
      onClick={()=>setPage(page-1)}
      mr={"2%"}
     bg={useColorModeValue("#84c225", 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              _hover={{
                transform: 'translateY(2px)',
                bg: "black",
                boxShadow: 'lg',
              }}  >
   Prev
  </Button>
  <Button  size='md'
//   disabled
  mr={"2%"}
  mb={"20px"}  bg={useColorModeValue("#84c225", 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              _hover={{
                transform: 'translateY(2px)',
                bg: "black",
                boxShadow: 'lg',
              }} >
  {page}
  </Button>
  <Button 
    //   disable={page==total}
      onClick={()=>setPage(page+1)}
  size='md'  mb={"20px"}  bg={useColorModeValue("#84c225", 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              _hover={{
                transform: 'translateY(2px)',
                bg: "black",
                boxShadow: 'lg',
              }} >
Next
  </Button>
            </>
  )
}

export default Product