import { useState, useEffect } from "react";

function MartianImageFetcher(props) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${props.photoDate}&api_key=gnesiqnKCJMm8UTYZYi86ZA5RAnrO4TAR9gDstVb`
    )
      .then((res) => res.json())
      .then((data) => {
        setImgSrc(data.photos[0].img_src);
      });
  }, [props.photoDate]);

  if (!imgSrc) {
    return null;
  } else {
    return <img src={imgSrc} alt="Mars Rover" />;
  }
}

function ShowData() {
  const [date, setDate] = useState("");

  function handle2019Click() {
    setDate("2019-01-01");
  }

  function handle2020Click() {
    setDate("2020-01-01");
  }
  return (
    <div>
      <button onClick={handle2019Click}>2019</button>
      <button onClick={handle2020Click}>2020</button>
      {date ? <MartianImageFetcher photoDate={date} /> : null}
    </div>
  );
}

export default ShowData;
