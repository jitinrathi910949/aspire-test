// @ts-nocheck
import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Slider from "react-slick";
import CircleIcon from '@mui/icons-material/Circle';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useAppDispatch, useAppSelector } from '../../../store';
import { CardModel, cardAction } from '../../../store/cardSlice';
import _ from 'lodash';

const renderCardNumber = (cardNumber: string, isShow: boolean) => {
  const lastDigits = cardNumber?.slice(-4);
  const chunks = _.chunk(cardNumber, 4);

  if(!isShow) {
    return(<Stack spacing={1} direction="row" alignItems="center">
      <CircleIcon sx={{color: 'white', fontSize: '9px'}} />
      <CircleIcon sx={{color: 'white', fontSize: '9px'}} />
      <CircleIcon sx={{color: 'white', fontSize: '9px'}} />
      <CircleIcon sx={{color: 'white', fontSize: '9px'}} />
      <Box sx={{mx: '3px'}} />
      <CircleIcon sx={{color: 'white', fontSize: '9px'}} />
      <CircleIcon sx={{color: 'white', fontSize: '9px'}} />
      <CircleIcon sx={{color: 'white', fontSize: '9px'}} />
      <CircleIcon sx={{color: 'white', fontSize: '9px'}} />
      <Box sx={{mx: '3px'}} />
      <CircleIcon sx={{color: 'white', fontSize: '9px'}} />
      <CircleIcon sx={{color: 'white', fontSize: '9px'}} />
      <CircleIcon sx={{color: 'white', fontSize: '9px'}} />
      <CircleIcon sx={{color: 'white', fontSize: '9px'}} />
      <Box sx={{mx: '3px'}} />
     <Typography sx={{mt: 3, fontWeight: 700, fontSize: '14px' ,color: 'white', letterSpacing: 4}}>{lastDigits}</Typography>

    </Stack>)
  } 
  return (
    <Stack spacing={1} direction="row" alignItems="center">
      {_.map(chunks, num => (<>
        <Typography sx={{mt: 3, fontWeight: 700, fontSize: '14px' ,color: 'white', letterSpacing: 4}}>{num}</Typography>
        <Box sx={{mx: '3px'}} />
      </>))}
    </Stack>
  )
  
}

function CardItem({card}: {card: CardModel}) {
  const [showCardNumber, toggleCardNumber] = useState(false);

  const isFreeze = card.isFreeze;

  return (
    <Box sx={{position: 'relative', width: '90%', opacity: isFreeze ? 0.5: 1}}>
      <Box sx={{textAlign: 'right' }}>
        <Button
        onClick={() => toggleCardNumber(g => !g)}
        variant="text" size='small' color='secondary' startIcon={<RemoveRedEyeIcon />} sx={{backgroundColor: 'white', textTransform: 'none'}}>
      Show card number
      </Button></Box>
      <Box sx={{backgroundColor: 'secondary.main', color: 'white',p: 3, borderRadius: '12px', width: ['100%', '100%', '414px'], height: ['220px', '220px', '248px']}}>
        <Box sx={{textAlign: 'right'}}><Box component="img" src="/logo-white.svg" sx={{width: 'auto', height: '24px', float: 'right'}}></Box>
        </Box>
     <Typography sx={{mt: 3, fontWeight: 700, fontSize: 22 ,color: 'white'}}>{card.name}</Typography>
     <Typography >{renderCardNumber(card.cardNumber, showCardNumber)}</Typography>

<Typography sx={{mt: 2, fontWeight: 700, fontSize: 13 ,color: 'white'}}>
Thru: {card.expiryDate}
<span style={{marginLeft:'30px'}}> 
CVV: ***
</span>

</Typography>
      </Box>
    {/* <Swiper
    
    // install Swiper modules'
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    // spaceBetween={50}
    slidesPerView={1}
    // navigation
    // pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide>Slide 1</SwiperSlide>
    <SwiperSlide>Slide 2</SwiperSlide>
    <SwiperSlide>Slide 3</SwiperSlide>
    <SwiperSlide>Slide 4</SwiperSlide>
  </Swiper> */}
  </Box>
  )
}

function CardCarausel() {
  const [currentSlideIndex, setSlideIndex] = useState(0);
  

  const dispatch = useAppDispatch();

  const { cardList } = useAppSelector((state) => state.cardReducer);

  useEffect(() => {
    
    dispatch(cardAction.selectCard(cardList[currentSlideIndex]));
  }, [currentSlideIndex]);


  const settings = {
    dots: true,
    infinite: false,
    arrows: false,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // appendDots: dots => (
     
    //     <ul style={{ marginTop: "8px",  }}> {dots} </ul>
    // ),
    customPaging: (pagi, i) => {
      const isActive  = pagi === currentSlideIndex;
      return (
        <a>
          <Box sx={{width: isActive? '16px': '8px', height: '8px', borderRadius: '8px', backgroundColor: '#01D167', opacity: isActive? 1 : 0.2, marginTop: '16px' }} />
        </a>
      );
    },
    beforeChange: (prev, next) => {   // here to detect slide change
      setSlideIndex(next);
    },
  };
  return(
    <Box sx={{width: ['100vw', '100vw', '414px']}}>
      <Slider {...settings} >
        {_.map(cardList, (card, index) => <CardItem card={card} />)}
        {/* <CardItem />
        <CardItem /> */}
      </Slider>
    </Box>
  )


}

export default CardCarausel
