import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

import { useBlurEffect } from "@/states/blurEffect";
import { useModal } from "@/states/showModal";

interface ModalBaseProps {
  isOpen: boolean;
}

export default function ModalBase({ isOpen }: ModalBaseProps) {
  const { setShowModal, modalForm, modalTitle } = useModal((state) => state);
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={setShowModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalTitle}
              </ModalHeader>
              <ModalBody>{modalForm}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
