import classes from './ActorModalPage.module.css';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'


const ActorModalPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} motionPreset='scale' size={'4xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            Content
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
    )
};

export default ActorModalPage;