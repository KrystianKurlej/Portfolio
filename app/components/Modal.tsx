

interface ModalProps {
    children: React.ReactNode;
    additionalClass?: string;
}

const Modal: React.FC<ModalProps> = ({children, additionalClass}) => {
  return (
    <div className={`fixed fixed-center bg-[#020202] p-4 rounded-xl shadow-xl w-[90%] ` + additionalClass}>
        {children}
    </div>
  );
};

export default Modal;
