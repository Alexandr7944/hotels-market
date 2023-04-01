import './modal-style.sass';

interface ModalProps {
  title: string,
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ title, onClose }) => {
  return (
    <>
      <div className="modal__mask" onClick={onClose} />
      <div className="modal__body">
        <h1 className="modal__text">{ title }</h1>
      </div>
    </>
  )
}

export default Modal;
