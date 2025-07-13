import Image from "next/image";
import { useRouter } from "next/router";

const DesktopHeader = () => {
  const router = useRouter();
  return (
    <div className=" hidden lg:flex h-[101px] py-[24.67px] bg-neutralColor-5">
      <div className="w-[1030px]  mx-auto">
        <div
          className="mr-[30px]"
        >
          <Image
            src="/assets/images/ramzNegarCompleteLogo.svg"
            width={133.17}
            height={51.66}
            alt="ramzNegarCompleteLogo"
          />
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
