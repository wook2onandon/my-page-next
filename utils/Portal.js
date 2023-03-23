import reactDom from 'react-dom';

const ModalPortal = ({ children }) => {
  const el = document.getElementById('portal');
  return reactDom.createPortal(children, el);
};

export default ModalPortal;
