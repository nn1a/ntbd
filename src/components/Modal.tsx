import { PropsWithChildren, useState } from 'react';
import { Button } from './Button';

const Modal = ({ children }: PropsWithChildren) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)} label="Open Modal" primary></Button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                <div className="flex items-start justify-between rounded-t border-b border-solid border-gray-300 p-5">
                  <h3 className="font=semibold text-3xl">Title</h3>
                  <button
                    className="float-right border-0 bg-transparent text-black"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="opacity-7 block h-7 w-7 rounded-full bg-gray-400 p-0 text-xl text-black">x</span>
                  </button>
                </div>
                <div className="relative flex-auto p-6">{children}</div>
                <div className="border-blueGray-200 flex items-center justify-end rounded-b border-t border-solid p-6">
                  <Button onClick={() => setShowModal(false)} label="Close"></Button>
                  <Button onClick={() => setShowModal(false)} label="Submit" primary></Button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
