import React, { useEffect, useState } from "react";
import axios from "axios";
import Photo from "./Photo";
import { Link, useNavigate } from "react-router-dom";

const Catalog: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  //const navigate = useNavigate();
  useEffect(() => {
    //setTimeout(() => {
      axios
        .get<Photo[]>("https://jsonplaceholder.typicode.com/photos")
        .then((res) => setPhotos(res.data.filter((p: Photo) => p.id < 11)));
    //}, 500);
  }, []);

  return (
    <div>
      <h1>Catalog</h1>

      <div>
        {photos.map((photo) => {
          return (
            <Link key={photo.id} to={`${photo.id}`}>
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                key={photo.id}
                height={100}
              />
            </Link>
          );
        })}

        {/* alternative
        {photos.map((photo) => {
          return (
          
              <img
                onClick={()=> navigate(`${photo.id}`)}
                src={photo.thumbnailUrl}
                alt={photo.title}
                key={photo.id}
                height={100}
              />
           
          );
        })} */}
      </div>
    </div>
  );
};

export default Catalog;
