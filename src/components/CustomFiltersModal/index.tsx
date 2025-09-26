import { X } from "lucide-react";
import ReactModal from "react-modal";
import CloseModalBtn from "../CloseModalBtn";

interface FilterModalProps {
  isFilterModalOpen: boolean;
  setFilterModalIsOpen: (value: React.SetStateAction<boolean>) => void;
}

export default function FilterModal({
  isFilterModalOpen,
  setFilterModalIsOpen,
}: FilterModalProps) {
  return (
    <>
      <ReactModal
        className="bg-primaryBlack/60 text-primaryBlack flex flex-col justify-center items-center backdrop-blur-[0.4rem] h-full p-4"
        isOpen={isFilterModalOpen}
        ariaHideApp={false}
        onRequestClose={() => setFilterModalIsOpen(true)}
      >
        <div className="overflow-scroll w-full  md:w-[51rem]">
          <div className="bg-white rounded-[0.6rem] py-[4.2rem] px-[3.2rem] ">
            <div className="flex justify-between items-center">
              <h1 className="font-popOne text-[2rem] md:text-[2.4rem]">
                Custom Filters
              </h1>
              <CloseModalBtn
                closeModalOpen={() => {
                  setFilterModalIsOpen(false);
                }}
              ></CloseModalBtn>
            </div>
            <p className="text-[1.3rem] text-grayDark md:mb-[3.4rem] mb-[2.4rem] md:mt-[1.6rem] mt-[1rem] ">
              Create yours custom filters
            </p>
            <div className="flex flex-col  gap-[1.8rem]">
              <div>
                <div className="w-full">
                  <select
                    className="w-full text-primaryBlack bg-white font-medium text-[1.2rem] py-[1.8rem] px-[2.2rem] outline-none border-[0.2rem] border-primaryBlack"
                    value={"Nome"}
                    onChange={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <option value="">Sources</option>
                    <option value="Insurance Journal">Insurance Journal</option>
                    <option value="CNN">CNN</option>
                    <option value="TechCrunch">TechCrunch</option>
                    <option value="The Wall Street Journal">
                      The Wall Street Journal
                    </option>
                  </select>
                </div>
                <div className="overflow-scroll py-3">
                  <div className="flex gap-3 items-center mt-3 min-w-[60rem]">
                    <div className="flex items-center gap-[1rem] p-[1rem] ">
                      <p className="text-[1.1rem] md:text-[1.3rem]  text-grayDark">
                        Lifehacker.com
                      </p>
                      <X className="text-grayDark w-[1.4rem] h-[1.4rem]"></X>
                    </div>
                    <div className="flex items-center gap-[1rem] p-[1rem] ">
                      <p className="text-[1.1rem] md:text-[1.3rem]   text-grayDark">
                        Engadget
                      </p>
                      <X className="text-grayDark w-[1.4rem] h-[1.4rem]"></X>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full">
                  <select
                    className="w-full text-primaryBlack bg-white font-medium text-[1.2rem] py-[1.8rem] px-[2.2rem] outline-none border-[0.2rem] border-primaryBlack"
                    value={"Nome"}
                    onChange={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <option value="">Authors</option>
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance</option>
                    <option value="Health">Health</option>
                    <option value="Education">Education</option>
                  </select>
                </div>
                <div className="overflow-scroll py-3">
                  <div className="flex gap-3 items-center mt-3 min-w-[60rem]">
                    <div className="flex items-center gap-[1rem] p-[1rem] ">
                      <p className="text-[1.3rem]  text-grayDark">
                        Steve Dants
                      </p>
                      <X className="text-grayDark w-[1.4rem] h-[1.4rem]"></X>
                    </div>
                    <div className="flex items-center gap-[1rem] p-[1rem] ">
                      <p className="text-[1.3rem]  text-grayDark">
                        Clerlynn Low
                      </p>
                      <X className="text-grayDark w-[1.4rem] h-[1.4rem]"></X>
                    </div>
                    <div className="flex items-center gap-[1rem] p-[1rem] ">
                      <p className="text-[1.3rem]  text-grayDark">
                        Andrew Tarantola
                      </p>
                      <X className="text-grayDark w-[1.4rem] h-[1.4rem]"></X>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full">
                  <select
                    className="w-full text-primaryBlack bg-white font-medium text-[1.2rem] py-[1.8rem] px-[2.2rem] outline-none border-[0.2rem] border-primaryBlack"
                    value={"Nome"}
                    onChange={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <option value="">Categories</option>
                    <option value="Technology">Technology</option>
                    <option value="Finance">Finance</option>
                    <option value="Health">Health</option>
                    <option value="Education">Education</option>
                  </select>
                </div>
                <div className="overflow-scroll py-3">
                  <div className="flex gap-3 items-center mt-3 min-w-[60rem]">
                    <div className="flex items-center gap-[1rem] p-[1rem] ">
                      <p className="text-[1.3rem]  text-grayDark">
                        Innovation & Development
                      </p>
                      <X className="text-grayDark w-[1.4rem] h-[1.4rem]"></X>
                    </div>
                    <div className="flex items-center gap-[1rem] p-[1rem] ">
                      <p className="text-[1.3rem]  text-grayDark">ABC News</p>
                      <X className="text-grayDark w-[1.4rem] h-[1.4rem]"></X>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="p-[1.8rem] font-medium mt-[3.4rem] w-full text-[1.2rem] rounded-[0.6rem] text-white bg-primaryBlack ">
              Save Filters
            </button>
          </div>
        </div>
      </ReactModal>
    </>
  );
}
