const setAltAvatar = (selector) => {
  const img = document.querySelector(selector);
  img.setAttribute('src', img.dataset.src);
};

export default setAltAvatar;
