import React, { useRef } from 'react';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
import { Developer } from '../../Assets';

const Background = styled.div`
    width : 100%;
    height : 100%;
    background : rgba(0,0,0,0.8);
    position : fixed;
    top:0;
    left:0;
    display: flex;
    z-index : 20;
    justify-content : center;
    align-items : center;

    
`
const ModalWrapper = styled.div`
    width : 800px;
    height : 500px;
    box-shadow : 0 5px 16px rgba(0,0,0,0.2);
    background : #fff;
    color : #000;
    display : grid;
    grid-template-columns : repeat(2, 1fr);
    position : relative;
    z-index : 10;
    border-radius : 10px;
   
    @media only screen 
  and (min-device-width: 280px) 
  and (max-device-width: 868px) 
  and (-webkit-min-device-pixel-ratio: 1) {
    grid-template-columns : repeat(1, 1fr);
    width :400px;
    top:-70px;
    height:400px;
  }
`

const ModalImg = styled.img`
    width : 100%;
     height : 500px;
    border-radius : 10px;
    background : #000;
    @media only screen 
  and (min-device-width: 280px) 
  and (max-device-width: 868px) 
  and (-webkit-min-device-pixel-ratio: 1) {
    grid-template-columns : repeat(1, 1fr);
    width :400px;
    height:400px;
  }
`

const ModalContent = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    line-height : 1.8;
    color : #141414;
`

const CloseModalButton = styled(MdClose)`
    position : absolute;
    top : 20px;
    right : 20px;
    width : 32px;
    height : 32px;
    padding : 0;
    z-index : 10;
` 

const Modal = ({showModal, setShowModal,  CarouselCards}) => {

    const ModalRef = useRef();
    const CloseModal = e => {
        if(ModalRef.current === e.target) {
            setShowModal(false);
        }
    }
  
    return (
        <>
         {showModal ?(
            <Background ref={ModalRef} onClick={CloseModal}>
                <ModalWrapper showModal={showModal}>
                    <ModalContent>
                        {/* <h1>{carouselcard.url}</h1> */}
                        {/* <h1>{carouselcard.title}</h1> */}
                        <p>
                            loremcjnscjscnsjncsjcnscjnscjnscnsjcsjncs
                            scnjcscjnscjnscjnscjsncnsc
                            cjnssjcnscjnscjnscnjscjsncjsnc
                            scnjscjnscjsncsjncsjncscjnscn
                            scnjscjscsjncscjnscjnscjnscsc
                            sncjscscjnscjnsc
                        </p>
                    </ModalContent>
                    <ModalImg src={Developer} alt='poster'/>
                    <CloseModalButton aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)}/>
                </ModalWrapper>
            </Background>
         ): null}
                
        </>
    )
}

export {Modal}
