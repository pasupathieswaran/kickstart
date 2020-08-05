import React, { useState, useEffect } from "react";
import axios from "axios";
function Album() {
  const url = "https://jsonplaceholder.typicode.com/albums/3";
  const [album, setAlbum] = useState(null);
  useEffect(() => {
    axios.get(url).then((response) => {
      setAlbum(response.data);
    });
  });
  if (album) {
    return <h1>{album.title}</h1>;
  }
  return <div></div>;
}
export default Album;
