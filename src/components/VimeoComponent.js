import React from "react";
import Vimeo from "@u-wave/react-vimeo";

const VimeoComponent = () => {
  return (
    <div>
      {/* <p style={{visibility: 'hidden'}}>text</p> */}
      <Vimeo
        video="659665993"
        controls={true}
        responsive
        showByline
       
      />
    </div>
  );
};


export default VimeoComponent;