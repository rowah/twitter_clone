import React, { useState } from "react";
import { Modal } from "antd";
import { BiWorld } from "react-icons/bi";
import { BsPersonHeart } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

const AudienceModal = ({ modal2Open, setModal2Open }) => {
  const modal2Styles = {
    marginLeft: "32%",
    marginTop: "0px",
    width: "20%",
  };
  return (
    <>
      {/* <Button type="primary" onClick={() => setModal2Open(true)}>
        Vertically centered modal dialog
      </Button> */}
      <Modal
        footer={null}
        title="Choose audience"
        style={modal2Styles}
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        width="20%"
        className=""
      >
        <div className="flex">
          <div className="bg-blue-400 h-9 w-9 rounded-full pt-2">
            <div className="bg-white h-5 w-5 rounded-full ml-2">
              <BiWorld size={20} className="text-blue-400 mt-0.3" />
            </div>
          </div>

          <span className="ml-4 mt-2 font-bold">Everyone</span>
          <TiTick className="mt-2 ml-8 text-blue-400" size={20} />
        </div>

        <div className="flex mt-6">
          <div className="bg-green-500 h-9 w-9 rounded-full pt-2">
            <BsPersonHeart size={20} className="text-white ml-2 mt-0.3" />
          </div>
          <div>
            <span className="ml-4 font-bold">Twitter cycle</span>
            <div className="ml-4 flex">
              <span className="font-bold">50</span>
              <p className="text-gray-500 ml-2">People</p>
              <p className="ml-2 font-bold border-black border-b-2">Edit</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AudienceModal;
