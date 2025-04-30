import Arrow from "@images/arrow.svg";
import { useState } from "react";

const Accordian = ({
  heading,
  content,
  id,
}: {
  heading: string;
  content: string;
  id: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="tab">
      <input type="checkbox" name="accordion-1" id={id} checked={open} onChange={(e)=>setOpen(e.target.checked)}/>
      <label
        htmlFor={id}
        className="tab__label"
      >
        <h6 className="heading-accordion">{heading}</h6>
        <div
          className="icon-accordion"
          style={
            open
              ? {
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-180deg) skew(0deg, 0deg)",
                  backgroundColor: "rgb(240, 238, 230)",
                }
              : {
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-90deg) skew(0deg, 0deg)",
                  backgroundColor: "rgba(240, 238, 230, 0)",
                }
          }
        >
          <img src={Arrow} loading="eager" alt="" className="icon-arrow" />
        </div>
      </label>
      <div className="tab__content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordian;
