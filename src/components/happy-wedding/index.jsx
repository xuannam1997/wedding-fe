import Image from "next/image";

const HappyWedding = () => {
  return (
    <section
      data-scroll-index="5"
      className="mt-10 md:mt-16 scroll-mt-20"
      id="bank-info"
    >
      <div className="container m-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col gap-2 justify-center py-5 md:py-14 mx-5 sm:mx-0">
            <h2 className="text-2xl md:text-4xl uppercase tracking-widest">
              Mừng cưới
            </h2>
            <p className="md:text-lg">Nhớ ghi tên nhé!</p>
          </div>
          <div className="px-16 lg:px-28 py-20 lg:py-40 bg-[#BD2626] text-white flex flex-col justify-center">
            <div>
              <Image
                src="/images/vietinbank-logo.webp"
                alt=""
                className="h-[50px] w-auto grayscale opacity-50"
                width={200}
                height={200}
                loading="lazy"
              />
            </div>
            <div className="py-5">
              <div className="p-4 bg-white rounded">
                <Image
                  src="/images/thanh_qr.png"
                  alt=""
                  className="h-full w-full rounded"
                  width={250}
                  height={250}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <h3 className="text-lg md:text-xl font-bold uppercase">
                Nguyễn Thị Minh Thành
              </h3>
              <p className="text-xl">103875276366</p>
              <p className="opacity-80">Cô dâu</p>
            </div>
          </div>
          <div className="px-16 lg:px-28 py-20 lg:py-40 bg-[#7C36BB] text-white flex flex-col justify-center">
            <div>
              <Image
                src="/images/tpbank_logo.webp"
                alt=""
                className="h-[35px] w-auto grayscale opacity-50"
                width={200}
                height={200}
                loading="lazy"
              />
            </div>
            <div className="py-5">
              <div className="p-4 bg-white rounded">
                <Image
                  src="/images/nam_qr.png"
                  alt=""
                  className="h-full w-full rounded"
                  width={250}
                  height={250}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              <h3 className="text-lg md:text-xl font-bold uppercase">
                Đinh Xuân Nam
              </h3>
              <p className="text-xl">0274 5836 401</p>
              <p className="opacity-80">Chú rể</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyWedding;
