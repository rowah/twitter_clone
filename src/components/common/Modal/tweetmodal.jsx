import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { Modal } from "antd";
import AudienceModal from "./audiencemodal";
const TweetModalComponent = ({ modalOpen, setModalOpen }) => {
  const [modal1Open, setModal1Open] = useState(false);
  return (
    <>
      <Modal
        footer={null}
        style={{ top: 20 }}
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
      >
        <div className="flex">
          <div className="m-2 w-10 py-1">
            <img
              className="inline-block h-10 w-10 rounded-full"
              src="https://pbs.twimg.com/profile_images/1504385195037843457/p5kNTiBq_400x400.jpg"
              alt=""
            />
          </div>
          <div className="flex-1 px-2 pt-2 mt-2">
            <button
              className="border border-gray-300 rounded-full px-2 flex"
              onClick={() => setModal1Open(true)}
            >
              <span className="text-blue-400 font-bold">Everyone</span>
              <IoIosArrowDown className="mt-1 ml-1 text-blue-400" />
            </button>
            <AudienceModal
              modal1Open={modal1Open}
              setModal1Open={setModal1Open}
            />
            <textarea
              className="bg-transparent text-gray-400 font-medium text-lg w-full outline-none"
              rows="5"
              cols="50"
              placeholder="What's happening?"
            ></textarea>
            <div className="flex rounded-full hover:bg-blue-100 w-1/2 hover:cursor-pointer">
              <BiWorld size={20} className="text-blue-400 ml-2 mt-0.3" />
              <span className="ml-2 text-blue-400 font-bold">
                Everyone can reply
              </span>
            </div>
            <hr className="mt-4" />
          </div>
        </div>
        <div className="flex">
          <div className="w-10"></div>

          <div className="w-64 px-2">
            <div className="flex items-center">
              <div className="flex-1 text-center px-1 py-1 m-2">
                <a
                  href="/"
                  className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </a>
              </div>
              <div className="flex-1 text-center px-1 py-1 m-2">
                <a
                  href="/"
                  className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex-1 text-center py-2 m-2">
                <a
                  href="/"
                  className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
                >
                  <svg
                    className="text-center h-7 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <button className="bg-blue-400 mt-5 hover:bg-blue-600 text-black font-bold py-2 px-8 rounded-full mr-8 float-right disabled:opacity-25">
              Tweet
            </button>
          </div>
        </div>
      </Modal>
      <br />
      <br />
    </>
  );
};

export default TweetModalComponent;
