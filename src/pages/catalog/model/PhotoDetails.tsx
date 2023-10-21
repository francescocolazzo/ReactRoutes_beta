import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Photo from "./Photo";
import axios from "axios";
import { Link } from "react-router-dom";


export const PhotoDetails: React.FC = () => {
  const {id} = useParams<{id:string}>();
  const [photo, setPhoto] = useState<Photo | null >(null);

  useEffect(() => {
    axios
      .get<Photo>(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((res) => setPhoto(res.data));
  }, [id]);

  return (
    <div>
      <h1>Photo Details</h1>
      <div>
        {
          <Link key={photo?.id} to={`${photo?.url}`} target="_blank">
            <img 
              src={photo?.thumbnailUrl}
              alt={photo?.title}
              key={photo?.id}
              height={100}
            />
          </Link>
        }
      </div>
    </div>
  );
};
