import { useRef } from 'react';

//hook
function useMoveScroll(name) {
  const element = useRef(null);
  const onMoveToElement = () => {
    let scrollY =
      element.current.getBoundingClientRect().top - 72 + window.pageYOffset;
    window.scrollTo({
      left: 0,
      top: scrollY,
      behavior: 'smooth',
    });
  };
  return { element, onMoveToElement, name };
}

export default useMoveScroll;
