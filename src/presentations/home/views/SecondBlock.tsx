/*
.second-block-comp-01-text-01 {
  font-family: "Futura PT Cond Extra Bold", sans-serif;
  font-size: 40px;
  color: white;
  line-height: 0.92; 
  letter-spacing: -0.02em;
  max-width: 700px;
}

*/
function SecondBlock() {
  return (
    <>
      <div className="mt-213 max-w-584 md:mt-424 lg:mt-335">
        {/* STRATEGIC SALES GROWTH CATALYST */}
        <div className="text-40 font-secondary md:text-72 text-white">
          <div>
            STRATEGIC <span className="text-accent">SALES</span>
          </div>
          <div>
            <span className="text-accent">GROWTH</span> CATALYST
          </div>
        </div>
        {/* By seamlessly integrating data-driven...  */}
        <div className="font-primary text-18 md:text-20 text-gray-60 mt-20 font-medium">
          By seamlessly integrating data-driven insights, market intelligence,
          and a deep understanding of your business, <br />
          we propel your sales to new heights
        </div>
      </div>
    </>
  );
}

export default SecondBlock;
