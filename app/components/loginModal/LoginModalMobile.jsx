import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import clsx from "clsx"
import style from "./css/loginModal.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from "@fortawesome/free-solid-svg-icons"

export default function LoginModalDesktop() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     <button onClick={handleShow} className="btn p-0">
     <FontAwesomeIcon icon={faUser} />
     </button>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><img className={clsx(style.logoImg)} src="https://s6.uupload.ir/files/snappfood_logo_g8ea.png"/></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={clsx("d-flex flex-column p-3  align-items-end" , style.modalBody)}>
          <p className="h5">
            <span className="h3">ورود</span>
            <span className="mx-2">یا</span>
            <span className="h3">عضویت</span>
          </p>

          <p className="mb-2 mt-4 text-secondary">شماره تلفن همراه</p>
          <input className={style.numberInput} type="text" />
          <p className="mb-2 mt-2 text-secondary">شماره با ۰۹ شروع می‌شود</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className={clsx("disabled border-0 w-100 p-3 text-dark fw-bold" , style.submitBtn)} onClick={handleClose}>
            ادامه 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

