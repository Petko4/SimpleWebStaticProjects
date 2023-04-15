// const div = document.getElementById("container");

// div.addEventListener("click", (event) => {
//   [...div.children].forEach((child) => child.classList.remove("active"));
//   event.srcElement.classList.add("active");
// });

const collapsed = document.getElementsByClassName("collapsed");

[...collapsed].forEach((el) =>
  el.addEventListener("click", (event) => {
    [...collapsed].forEach((img) => img.classList.remove("active"));
    el.classList.add("active");
  })
);
