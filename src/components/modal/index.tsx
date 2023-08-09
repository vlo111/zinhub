import React, { useRef, useEffect } from 'react';
import { default as CloseIcon } from '@/components/icons/close-icon.svg';

export interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: string | JSX.Element | JSX.Element[];
  width: string;
  footer?: boolean;
  header?: boolean;
}

const Modal: React.FC<IModal> = ({ isOpen, onClose, children, width, footer, header = true }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick: EventListenerOrEventListenerObject = (event) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (modalRef.current && !modalRef?.current?.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-dark-gray bg-opacity-60">
      <div
        className={`bg-white rounded-lg p-4 w-[${width}] max-h-[95%] overflow-y-auto flex justify-between flex-col`}
        ref={modalRef}
      >
        {header === false ? null : (
          <div className="w-full flex justify-end pb-4">
            <button onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
        )}
        {children}
        <div className="w-full flex justify-end mt-14">
          {footer === false ? null : (
            <button className="btn btn--secondary" onClick={onClose}>
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
