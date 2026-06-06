import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function WhatsAppFAB() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-[#25D366] text-white shadow-[4px_4px_0px_0px_#000000] transition-all duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000000] md:h-14 md:w-auto md:px-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip Label (Desktop only) */}
      <span
        className="hidden md:inline-block font-grotesk font-extrabold text-sm overflow-hidden whitespace-nowrap transition-all duration-300"
        style={{
          maxWidth: isHovered ? "120px" : "0px",
          opacity: isHovered ? 1 : 0,
          marginLeft: isHovered ? "4px" : "0px",
          marginRight: isHovered ? "8px" : "0px",
        }}
      >
        Chat with us
      </span>

      {/* WhatsApp SVG Icon */}
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 shrink-0 fill-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.449 5.376 0 9.738-4.364 9.74-9.735.002-2.58-1.002-5.007-2.827-6.832-1.825-1.826-4.254-2.83-6.837-2.83-5.38 0-9.74 4.363-9.742 9.735-.001 1.571.42 3.102 1.218 4.456l-.989 3.612 3.812-.999zm11.233-5.462c-.3-.15-1.772-.875-2.046-.975-.276-.101-.476-.15-.676.15-.2.3-.778 1-.954 1.199-.176.2-.353.225-.653.075-.3-.15-1.271-.47-2.42-1.493-.893-.797-1.496-1.782-1.671-2.081-.176-.3-.018-.462.132-.61.134-.134.3-.351.45-.525.15-.174.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.926-2.235-.244-.589-.493-.509-.676-.519-.174-.01-.374-.012-.573-.012-.2 0-.526.075-.801.374-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.899 1.225 3.1.15.2 2.11 3.224 5.118 4.521.716.31 1.273.494 1.707.631.72.227 1.375.196 1.893.118.577-.087 1.772-.726 2.022-1.426.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
      </svg>
    </a>
  );
}
