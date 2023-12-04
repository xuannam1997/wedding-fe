import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const SendGreetings = () => {
  const [loading, setLoading] = useState(false);
  const [formVal, setFormVal] = useState({
    name: "",
    message: "",
  });
  const [greetings, setGreetings] = useState([]);

  const handleSubmit = () => {
    const { name, message } = formVal;

    if (!name || !message) {
      toast.error("Vui lòng điền đầy đủ thông tin", { duration: 2000 });
      return;
    }

    setLoading(true);

    const instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });

    instance
      .post("/greetings", {
        name: name,
        message: message,
      })
      .then((result) => {
        setGreetings([...greetings, result.data.greetings]);
        setLoading(false);
        toast.success("Gửi thành công ", { duration: 2000 });
      })
      .catch(() => {
        setLoading(false);
        toast.error("Đã có lỗi xảy ra vui lòng thử lại !", {
          duration: 2000,
        });
      });
  };

  const handleChange = (event) => {
    setFormVal((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const getAllGreetings = () => {
    const instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });

    instance.get("/greetings").then((result) => {
      setGreetings(result.data.greetings ?? []);
    });
  };

  // useEffect(() => {
  //   const timer = setInterval(getAllGreetings, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  useEffect(() => {
    getAllGreetings();
  }, []);

  return (
    <section
      data-scroll-index="4"
      className="mt-5 py-10 md:py-20 scroll-mt-20"
      id="message"
    >
      <div className="container m-auto flex flex-col-reverse lg:grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
        <div className="xl:h-[544px] h-[572px]">
          <div className="p-5 md:px-10 md:py-12 backdrop-blur-lg bg-white/30 md:border border-[#F3ECE9] md:rounded h-full overflow-auto">
            <div className="flex flex-col justify-center items-center gap-3 px-5 mb-10">
              <h2 className="text-2xl md:text-3xl uppercase tracking-widest text-center leading-10">
                Lời chúc
              </h2>
            </div>
            {greetings.map((greeting) => {
              const { _id, name, message } = greeting;

              return (
                <div key={_id} className="flex items-start mt-6">
                  <div className="min-w-[40px] min-h-[40px] rounded-full">
                    <Image
                      src="/images/avatar.jpg"
                      alt=""
                      className="min-w-[40px] min-h-[40px] rounded-full"
                      width={40}
                      height={40}
                      loading="lazy"
                    />
                  </div>
                  <div className="ml-5 flex flex-col flex-wrap break-all">
                    <div className="text-lg">{name}</div>
                    <div className="text-base">{message}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="xl:h-[544px] h-[572px]">
          <div className="p-5 md:px-10 md:py-12 backdrop-blur-lg bg-white/30 md:border border-[#F3ECE9] md:rounded h-full">
            <div className="flex flex-col justify-center items-center gap-3 px-5 mb-10">
              <h2 className="text-2xl md:text-3xl uppercase tracking-widest text-center leading-10">
                Gửi lời chúc
              </h2>
              <p className="md:text-lg text-zinc-500 text-center mt-2">
                Những lời chúc tốt đẹp sẽ góp phần vun đắp hạnh phúc cho gia
                đình nhỏ của Nam &amp; Thành
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <input
                name="name"
                type="text"
                value={formVal.name}
                onChange={handleChange}
                placeholder="Tên bạn..."
                className="input input-bordered w-full"
              />
              <textarea
                name="message"
                value={formVal.message}
                onChange={handleChange}
                className="textarea textarea-bordered resize-none"
                placeholder="Lời chúc..."
                rows={3}
              />
              <div>
                <button
                  className="btn btn-outline"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  Gửi lời chúc
                  {loading && <span class="loading loading-ring"></span>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendGreetings;
