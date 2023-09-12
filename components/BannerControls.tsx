import Raect from "react";
import DisplayChanger from "./DisplayChanger";

const BannerControls = ({
  images,
  currentId,
  imageHandler }) => {

  return (
    <div className="banner__controls flex gap-2">
      {
        images.map((element, index) => {
          return (
            <DisplayChanger
              key={index}
              current={element.id == currentId}
              changeImage={() => { imageHandler(element) }} />
          )
        })
      }
    </div>
  )
}
export default BannerControls;
