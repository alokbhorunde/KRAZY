import { useEffect, useState } from "react";

export function useBookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    window.addEventListener("open-booking-modal", handleOpen);
    window.addEventListener("close-booking-modal", handleClose);

    return () => {
      window.removeEventListener("open-booking-modal", handleOpen);
      window.removeEventListener("close-booking-modal", handleClose);
    };
  }, []);

  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-booking-modal"));
  };

  const closeModal = () => {
    window.dispatchEvent(new CustomEvent("close-booking-modal"));
  };

  return { isOpen, openModal, closeModal };
}
