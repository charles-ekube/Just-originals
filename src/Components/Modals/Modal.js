import React, { useRef } from 'react';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
import { Developer } from '../../Assets';

const Background = styled.div`
    width : 100%;
    height : 100%;
    background : rgba(0,0,0,0.8);
    position : fixed;
    display: flex;
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
    grid-template-column : 1fr 1fr;
    position : relative;
    z-index : 10;
    border-radius : 10px;
`

const ModalImg = styled.img`
    width : 100%;
    height : 100%;
    border-radius : 10px 0 0 10px;
    background : #000;
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

const Modal = ({showModal, setShowModal}) => {

    const ModalRef = useRef();
    const CloseModal = e => {
        if(ModalRef.current === e.target) {
            setShowModal(false);
        }
    }
    return (
        <>
         {showModal ?
            <Background ref={ModalRef} onClick={CloseModal}>
                <ModalWrapper showModal={showModal}>
                    <ModalContent>
                        <h1>DJ</h1>
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
         : null}
                
        </>
    )
}

export {Modal}
