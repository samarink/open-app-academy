document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!

  const handleFavoriteSubmit = (e) => {
    e.preventDefault();

    const favoriteInput = document.querySelector('.favorite-input');
    const favorite = favoriteInput.value;
    favoriteInput.value = '';

    const newListLi = document.createElement('li');
    newListLi.textContent = favorite;

    const favoriteList = document.getElementById('sf-places');
    favoriteList.appendChild(newListLi);
  }

  const listSubmitButton = document.querySelector('.favorite-submit');
  listSubmitButton.addEventListener('click', handleFavoriteSubmit);

  // adding new photos

  // --- your code here!

  const togglePhotoForm = (e) => {
    const photoFormDiv = document.querySelector('.photo-form-container');
    photoFormDiv.classList.toggle('hidden');
  }

  const photoFormShowButton = document.querySelector(".photo-show-button");
  photoFormShowButton.addEventListener("click", togglePhotoForm);


  const handlePhotoSubmit = (e) => {
    e.preventDefault();

    const photoUrlInput = document.querySelector('.photo-url-input');
    const photoUrl = photoUrlInput.value;
    photoUrlInput.value = '';

    const newImg = document.createElement('img');
    newImg.src = photoUrl;

    const newPhotoLi = document.createElement('li');
    newPhotoLi.appendChild(newImg);

    const dogPhotosList = document.querySelector('.dog-photos');
    dogPhotosList.appendChild(newPhotoLi);
  }

  const photoSubmtiButton = document.querySelector('.photo-url-submit');
  photoSubmtiButton.addEventListener('click', handlePhotoSubmit);
});
