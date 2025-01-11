import RootLayout from "./Layout";

export default function Details() {
  return (
    <>
      <RootLayout>
        <section className="px-[25.5rem] py-[8.2rem]">
          <p className="font-bold text-[3.2rem]">
            Top 10 Bali Travel Destinations for 2023
          </p>
          <div className="flex justify-between items-center mt-[1.8rem] mb-[4.2rem]">
            <p className="font-semibold text-[1.6rem] ">
              By Jorge,
              <span className="font-normal">
                <span> </span>
                Category: <span className="text-grayDark">Innovation</span>
              </span>
            </p>
            <p className="text-[1.3rem]">12/05/2022 13:40</p>
          </div>

          <div className="border-b border-primaryBlack">
            <img
              src="/details.png"
              alt="Image of: "
              className="w-full h-[48.7rem]"
            />

            <p className="pt-[3.2rem] pb-[3.4rem] text-[1.6rem]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="my-[4.2rem] text-[1.6rem] grid gap-[2.2rem]">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it looking like readable English. Many
              desktop publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and a search for 'lorem ipsum'
              will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose injected humour and the like.
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it looking like readable English. Many
              desktop publishing packages and web page editors now use Lorem
              Ipsum as their default model text, and a search for 'lorem ipsum'
              will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose injected humour and the like.
            </p>
          </div>

          <p className="text-[2.4rem]">Thanks for read !!</p>
        </section>
      </RootLayout>
    </>
  );
}
