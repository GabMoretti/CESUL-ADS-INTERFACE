import React, { useState } from 'react';
import estilo from './Inicio.module.css'

const ImageGenerator = () => {
  const [imageData, setImageData] = useState(null);

  const generateImage = () => {
 
    fetch("https://api.thecatapi.com/v1/images/search", { headers : {'x-api-key': 'live_ QLVGQUGxA52p7G34xuMFyG5RF9d1tq F9IaK605SVyy7awa87zJPlw1sRjRSV NeMq'}})
    .then( data => data.json())
    .then( json => {setImageData(json[0]); console.log(json)})

  };

  return (
    <div>
      <button onClick={generateImage} className={estilo.botao}>Gerar Imagem</button>
      {imageData && (
        <div>
          <img src={imageData.url} alt={imageData.id} className={estilo.img} />
          
        </div>
      )}
    </div>
  );
};

export default ImageGenerator;