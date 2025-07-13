import Image from "next/image";
import Link from "next/link";

const Custom404Page = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[200px]">
      {/* 404 */}
      <div className="flex mb-[20.44px]">
        <div>
          <Image
            width={10}
            height={10}
            src="/assets/images/4.svg"
            alt="404Page"
            className="w-[61px] h-[120px] md:w-[91px] md:h-[180px]"
          />
        </div>
        <div>
          <Image
            width={10}
            height={10}
            src="/assets/images/0.svg"
            alt="404Page"
            className="w-[61px] h-[120px] md:w-[91px] md:h-[180px]"
          />
        </div>
        <div>
          <Image
            width={10}
            height={10}
            src="/assets/images/4.svg"
            alt="404Page"
            className="w-[61px] h-[120px] md:w-[91px] md:h-[180px]"
          />
        </div>
      </div>
      <div className=" animate-slideOutLeft animate-infinite animate-duration-[4s] -mt-[120px] -mr-[120px] md:-mt-[170px] md:-mr-[140px] ">
        <Image
          width={10}
          height={10}
          src="/assets/images/magnifier.svg"
          alt="magnifier"
          className="w-[95.18px] h-[136.58px] md:w-[139.78px] md:h-[200.56px]"
        />
      </div>
      {/* text */}
      <div className="text-neutralColor-1 text-[16px] leading-[27.64px] font-normal mb-[16px] md:text-[20px] lg:text-[24px]">
        <span>صفحه مورد نظر یافت نشد!</span>
      </div>
      {/* Link */}
      <Link
        href="/"
        className="w-[158px] h-[48px] bg-primaryColor-1 rounded-[5px] px-[8px] py-[16px] text-naturalColor-2 flex items-center justify-center cursor-pointer text-[16px]"
      >
        <span>برو به صفحه اصلی</span>
      </Link>
    </div>
  );
};

export default Custom404Page;
