/*
  EDITE SOMENTE ESTE ARQUIVO para trocar as imagens e os videos do site.
  Os arquivos devem ficar na mesma pasta do index.html.
  Use o nome exato do arquivo, incluindo a extensao.
*/

window.mediaConfig = {
  hero: 'Gemini_Generated_Image_hxyloohxyloohxyl.jpg',
  proof: 'Gemini_Generated_Image_88usm488usm488us.jpg',
  gallery: [
    'Gemini_Generated_Image_88usm488usm488us (1).jpg',
    'Gemini_Generated_Image_88usm488usm488us (2).jpg',
    'Gemini_Generated_Image_jer8asjer8asjer8.jpg',
    'Gemini_Generated_Image_p3w1tup3w1tup3w1.jpg',
    'Gemini_Generated_Image_hxyloohxyloohxyl.jpg'
  ],
  cars: [
    'Captura de tela 2026-09-17 195516.png',
    'Captura de tela 2026-09-17 195601.png',
    'Captura de tela 2026-09-17 195631.png',
    'Captura de tela 2026-09-17 195705.png'
  ],
  videos: [
    'Publicado - IMG_1537.MP4',
    'Publicado - IMG_1524.mp4'
  ]
};

(function applyMediaConfig() {
  const config = window.mediaConfig;
  const encode = (fileName) => encodeURI(fileName);
  const setImage = (selector, fileName) => {
    const image = document.querySelector(selector);
    if (image && fileName) image.src = encode(fileName);
  };

  setImage('.hero-image', config.hero);
  setImage('.proof-photo img', config.proof);

  document.querySelectorAll('.gallery figure img').forEach((image, index) => {
    if (config.gallery[index]) image.src = encode(config.gallery[index]);
  });

  document.querySelectorAll('.car-image img').forEach((image, index) => {
    if (config.cars[index]) image.src = encode(config.cars[index]);
  });

  document.querySelectorAll('.video-card video source').forEach((source, index) => {
    if (config.videos[index]) {
      source.src = encode(config.videos[index]);
      source.type = config.videos[index].toLowerCase().endsWith('.mov') ? 'video/quicktime' : 'video/mp4';
      source.parentElement.load();
    }
  });
})();
