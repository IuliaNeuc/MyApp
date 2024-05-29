import React from "react";
import Image from "next/image";
import Modal from "./modal";
import { useState } from "react";
import { saitEducationModals } from "../data";

export default function SaitInfoCard({ title, description, imageUrl, modalTitle, modalDescription }) {

    const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  

  return (
    <div className="card w-80 h-5/6 bg-neutral-950 bg-opacity-55 shadow-xl md:hover:scale-105">
      <figure className=" overflow-hidden ">
        <Image
          src={imageUrl}
          alt=" Description of the Image"
          className=" rounded-xl object-fill"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className=" card-actions">
          {/* Open the modal */}
          <button className="btn btn-primary" onClick={openModal}>
            Details
          </button>
          {/* Render the modal */}
          { showModal && (
            <Modal            
              isOpen={showModal}
              onClose={closeModal}
              title={modalTitle}
              description={modalDescription}
            />
          )}
        </div>
      </div>
    </div>
  );
}
