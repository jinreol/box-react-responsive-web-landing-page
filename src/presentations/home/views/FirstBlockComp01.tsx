import photos from "@assets/images/photos.png";
import arrowRight from "@assets/images/ic_arrow_right.svg";

function FirstBlockComp01() {
  return (
    <div className="bg-accent-10 border-accent-25 rounded-100 flex max-w-374 items-center justify-between gap-16 border border-solid px-24 py-12 md:pt-8 md:pr-24 md:pb-8 md:pl-8">
      <img className="hidden md:inline lg:inline" src={photos} alt="photos" />
      <div className="font-primary text-16 text-accent-light">
        What Other Say About Us
      </div>
      <img src={arrowRight} alt="arrowRight" />
    </div>
  );
}

export default FirstBlockComp01;
