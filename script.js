"use strict";
const imageContainer = document.querySelector(".images");
let img;
function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    img = `<img src="img/${imgPath}" alt="" />`;
    const html = imageContainer.insertAdjacentHTML("beforeend", img);
    console.log(html);
    const success = resolve(img);
    return success;
  });
}

createImage("img-1.jpg").then((response) => {
  console.log(response);
  const xyz = imageContainer.children[0];
  xyz.addEventListener("load", function () {
    wait(2, response);
  });
  return response;
});
// .then((imgSelector) => {
//   console.log("removeImg");
//   wait(2, imgSelector);
// });

const wait = function (time, image) {
  console.log(image);
  setTimeout(function () {
    console.log("removeChild");
    // image.remove();
    imageContainer.removeChild(imageContainer.children[0]);
  }, time * 1000);
};
