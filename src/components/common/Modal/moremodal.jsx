import React from "react";
import { Modal } from "antd";
import { RiFileListLine } from "react-icons/ri";
import { BsChatSquareText, BsPerson } from "react-icons/bs";
import { MdOutlineVerified, MdOutlineKeyboardArrowDown } from "react-icons/md";

const MoreModalComponent = ({ modal2Open, setModal2Open }) => {
  const modal2Styles = {
    marginLeft: "5%",
    marginTop: "10px",
    top: 150,
  };
  return (
    <>
      <Modal
        footer={null}
        style={modal2Styles}
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        width="23%"
        className="ml-20"
      >
        <div className="flex hover:cursor-pointer hover:bg-gray-200 w-full">
          <BsChatSquareText size={23} />
          <h2 className="text-xl font-bold ml-4">Topics</h2>
        </div>
        <div className="flex mt-5 hover:cursor-pointer hover:bg-gray-200 w-full">
          <RiFileListLine size={23} />
          <h2 className="text-xl font-bold ml-4">Lists</h2>
        </div>
        <div className="flex mt-5 hover:cursor-pointer hover:bg-gray-200 w-full">
          <BsPerson size={23} />
          <h2 className="text-xl font-bold ml-4">Twitter Circle</h2>
        </div>
        <div className="flex mt-5 hover:cursor-pointer hover:bg-gray-200 w-full">
          <MdOutlineVerified size={23} />
          <h2 className="text-xl font-bold ml-4">Verified Orgs</h2>
        </div>
        <hr className="mt-4" />
        <div className="flex justify-between mt-5 hover:cursor-pointer hover:bg-gray-200 w-full">
          <h3 className="font-bold">Creator Studio</h3>
          <MdOutlineKeyboardArrowDown size={30} />
        </div>
        <div className="flex justify-between mt-5 hover:cursor-pointer hover:bg-gray-200 w-full">
          <h3 className="font-bold">Professional Tools</h3>
          <MdOutlineKeyboardArrowDown size={30} />
        </div>
        <div className="flex justify-between mt-5 hover:cursor-pointer hover:bg-gray-200 w-full">
          <h3 className="font-bold">Settings and Support</h3>
          <MdOutlineKeyboardArrowDown size={30} />
        </div>
      </Modal>
      <br />
      <br />
    </>
  );
};

export default MoreModalComponent;
