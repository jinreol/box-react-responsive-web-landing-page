import FirstBlockComp01 from "@presentations/home/views/FirstBlockComp01";
import FirstBlockComp02 from "@presentations/home/views/FirstBlockComp02";
import FirstBlockComp03 from "@presentations/home/views/FirstBlockComp03";
import FirstBlockButton from "@presentations/home/views/FirstBlockButton";

function FirstBlock() {
  return (
    <div className="mt-112 md:mt-256 lg:mt-96">
      <div className="flex flex-col items-center justify-center">
        {/* What Other Say About Us */}
        <FirstBlockComp01 />
        {/* Grow Sales With Our Strategy First Approach */}
        <FirstBlockComp02 />
        {/* Forge’s sales and marketing solutions... */}
        <FirstBlockComp03 />
        {/* Full Button */}
        <FirstBlockButton />
      </div>
    </div>
  );
}

export default FirstBlock;
