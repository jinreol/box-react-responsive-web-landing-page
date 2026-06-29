import rocketCircle from "@assets/images/ic_rocket_circle.svg";
import greenMobile from "@assets/images/img_green_mobile.png";
import greenTablet from "@assets/images/img_green_tablet.png";
import greenDesktop from "@assets/images/img_green_desktop.png";

function ThirdBlock() {
  return (
    <div className="bg-accent-light rounded-24 mt-48">
      <div className="flex flex-col lg:flex-row lg:items-start">
        <div className="flex flex-col lg:flex-1">
          <img
            className="mt-40 ml-24 h-72 w-72 md:mt-56 md:ml-56 md:h-88 md:w-88"
            src={rocketCircle}
            alt="rocketCircle"
          />
          <div className="mx-24 mt-32 md:mt-48 md:ml-56">
            <div className="w-max-456 mr-16">
              <div className="text-32 font-secondary text-accent-dark md:text-48 uppercase">
                Fueling Progress with a Strategic Foundation for Growth
              </div>
            </div>
            <div className="mt-20">
              <div className="text-16 font-primary md:text-18 text-black">
                As a dynamic and forward-thinking powerhouse, we specialize in
                meticulously crafting innovative strategies that transcend
                conventional norms.
              </div>
            </div>
          </div>
        </div>
        <div className="mt-48 md:mt-64 lg:mt-0 lg:flex-1">
          <GreenImage />
        </div>
      </div>
    </div>
  );
}

const GreenImage = () => {
  return (
    <picture>
      {/* Desktop: 1024px 이상 */}
      <source srcSet={greenDesktop} media="(min-width: 1024px)" />
      {/* Tablet: 768px 이상 */}
      <source srcSet={greenTablet} media="(min-width: 768px)" />
      {/* Mobile: 기본 이미지 */}
      <img
        src={greenMobile}
        alt="Responsive Hero"
        className="rounded-24 h-auto w-full"
      />
    </picture>
  );
};

export default ThirdBlock;
