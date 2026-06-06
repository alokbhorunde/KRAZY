import { motion } from "framer-motion";
import { X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { useState, useEffect } from "react";

export default function BookingModal() {
  const { isOpen, closeModal } = useBookingModal();
  const [shouldRenderIframe, setShouldRenderIframe] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  // Defer rendering of the iframe for 1.5 seconds after page mount
  // to prioritize the main website's initial load speed.
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRenderIframe(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Prevent scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <motion.div
      initial={false}
      animate={{
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "auto" : "none",
      }}
      transition={{ duration: 0.2 }}
      style={{
        visibility: isOpen ? "visible" : "hidden",
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
    >
      {/* Backdrop Overlay */}
      <div
        onClick={closeModal}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <motion.div
        animate={{
          scale: isOpen ? 1 : 0.95,
          y: isOpen ? 0 : 15,
        }}
        transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
        className="relative z-10 flex h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[8px_8px_0px_0px_#000000]"
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b-2 border-black bg-[#fafafa] p-6 md:p-8">
          <div className="max-w-[80%]">
            <h3 className="font-grotesk text-2xl font-black leading-tight text-gray-900 md:text-3xl">
              Book a Free Discovery Call
            </h3>
            <p className="mt-2 font-grotesk text-sm text-gray-600 md:text-base leading-relaxed">
              Let's discuss your project, goals, timeline, and how Krazy Studios can help bring your ideas to life.
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={closeModal}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-black bg-white text-gray-900 shadow-[2px_2px_0px_0px_#000000] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_#000000] transition-all duration-200"
            aria-label="Close booking modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Iframe Body Container */}
        <div className="relative flex-1 bg-white">
          {iframeLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
              {/* Neubrutalist Spinner / Loader */}
              <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#5227FF]" />
              <p className="mt-4 font-grotesk text-sm font-bold text-gray-500">Loading Calendar...</p>
            </div>
          )}
          
          {shouldRenderIframe && (
            <iframe
              src={`${siteConfig.calComUrl}?embed=true`}
              style={{ width: "100%", height: "100%", border: 0 }}
              title="Book a Free Discovery Call"
              onLoad={() => setIframeLoading(false)}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
