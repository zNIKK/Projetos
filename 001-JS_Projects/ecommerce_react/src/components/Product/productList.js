import { useContext } from "react";
import { Context } from "../contexts/Context";

export default function ProductList() {
  const { arr, setArr, setImg } = useContext(Context);

  const change = (thumb) => {
    setImg(thumb.img);
    arr.forEach((e) => {
      e.marked = false;
    });
    // eslint-disable-next-line no-param-reassign
    thumb.marked = true;
    setArr([...arr]);
  };

  return (
    <div className="list">
      {arr.map((thumb) => (
        <button
          className={`${thumb.marked ? "marked" : ""} button-thumb`}
          key={thumb.img}
          onClick={() => change(thumb)}
          type="button"
        >
          <img
            src={`./assets/images/thumbs/image-product-${thumb.img}-thumbnail.jpg`}
            alt={`thumbnail-${thumb.img}`}
          />
        </button>
      ))}
    </div>
  );
}
