function ShowCategoryImages(e) {
  if (e.target.id === "Tous") {
    document.querySelectorAll(".gallery *").forEach((element, index) => {
      element.style.display = null;
    });
  } else {
    document.querySelectorAll(".gallery *").forEach((element, index) => {
      element.style.display = "none";
    });
    document
      .querySelectorAll(`.gallery [data-gallery-tag=${e.target.id}]`)
      .forEach((element, index) => {
        element.style.display = null;
      });
  }
}

function AddCategoryListeners() {
  document.querySelectorAll("#categories *").forEach((category, index) => {
    AddListener(category.id);
  });
}

function AddListener(categoryId) {
  document
    .querySelector(`#categories [id=${categoryId}]`)
    .addEventListener("click", ShowCategoryImages);
}

AddCategoryListeners();
