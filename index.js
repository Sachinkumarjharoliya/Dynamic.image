let count = 0;

let mainImg = document.getElementById("main_img");// main image id 

var downImgs;//main slider image 



let allImages = [
  "https://cdn.pixabay.com/photo/2020/05/15/14/03/lake-5173683__340.jpg",
  "https://cdn.pixabay.com/photo/2021/07/12/19/43/swans-6421355__340.jpg",
  "https://cdn.pixabay.com/photo/2021/07/20/12/43/chamomiles-6480598__340.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/04/18/hot-air-balloons-1867279_1280.jpg",// array for all image for store a variable 
  "https://cdn.pixabay.com/photo/2014/03/28/21/39/holi-300343_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/03/03/06/26/girl-3194977_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/03/19/09/58/dreamcatcher-4065288_1280.jpg",
  "https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg",
  "https://png.pngtree.com/thumb_back/fh260/back_pic/04/01/15/08580066565256e.jpg",
  "https://img.freepik.com/premium-photo/abstract-background-with-flowing-lines-fire-ice-colours_1048-10634.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706659200&semt=ais",
];

let bottomImagesSection = document.querySelector(".section_2");//

allImages.forEach((value, key) => {
  let image = document.createElement("img");// create a element and 
  bottomImagesSection.appendChild(image);// image variable put it down 
  image.setAttribute("src", value);// set a image of attribites 
});

var left_btn = document.getElementById("left_btn"); // take value by id left button 
var right_btn = document.getElementById("right_btn");// take value by id right buttom  

var scrollBar = document.querySelector(".section_2");// id scroll by class name pick the data 

slideshow(count);// function put from by count 

const styleBorder = (i) => {
  if (i >= 0 && i < downImgs.length) {
    downImgs.forEach((image, i) => {
      image.style.border = "none";
      downImgs[i].style.opacity = "0.8";///FOR BOLDER PER IMAGE 
    });
    downImgs[i].style.border = "4px solid white";
    downImgs[i].style.opacity = "1";
  }
};

for (var j in downImgs) {
  downImgs[j].dataset.index = j;
  downImgs[j].addEventListener("click", (e) => {
    if (count < e.target.dataset.index) {
      scrollBar.scrollLeft += e.target.dataset.index * 20;// on click scroll bar change image 
    }
    if (count > e.target.dataset.index) {
      scrollBar.scrollLeft = e.target.dataset.index * 20;
    }
    count = e.target.dataset.index;
    console.log(count);
    styleBorder(count);
    slideshow(count);
  });
}

function nextImg() {
  if (count >= allImages.length - 1) {
    count = 0;
    scrollBar.scrollLeft = 0;
  } else count++;
  //to change the next image w
  slideshow(count);
  styleBorder(count);
  scrollBar.scrollLeft += allImages.length * 5;
}

function prevImg() {
  if (count <= 0) {
    count = allImages.length - 1;
    scrollBar.scrollLeft = 321;
  } else count--;
  //previous image 
  slideshow(count);
  styleBorder(count);
  scrollBar.scrollLeft -= allImages.length * 5;
}

function slideshow(count) {
  downImgs = document.querySelectorAll(".section_2 img");// down image

  downImgs[count].style.border = "2px solid black";

  mainImg.style.background = `url(${allImages[count]})`;

  mainImg.style.position = "relative";
  mainImg.style.width = "100%";
  mainImg.style.height = "575px";
  mainImg.style.backgroundPosition = "center";            // down image 
  mainImg.style.backgroundSize = "cover";
  mainImg.style.backgroundRepeat = "no-repeat";
  mainImg.style.filter = "drop-shadow(black 0px 0px 10px)";
  mainImg.style.zIndex = "5";

  if (count == allImages.length - 1)
    right_btn.style.background = `url(${allImages[0]})`;
  else {                                                                                                   // all scrolling and style for 
    right_btn.style.background = `url(${allImages[parseInt(count) + 1]})`;
  }

  right_btn.style.backgroundPosition = "center";
  right_btn.style.backgroundSize = "cover";
  right_btn.style.backgroundRepeat = "no-repeat";

  if (count == 0)
    left_btn.style.background = `url(${allImages[allImages.length - 1]})`;
  else left_btn.style.background = `url(${allImages[count - 1]})`;

  left_btn.style.backgroundPosition = "center";
  left_btn.style.backgroundSize = "cover";
  left_btn.style.backgroundRepeat = "no-repeat";
}
