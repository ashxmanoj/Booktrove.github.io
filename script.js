function Book(title, author, image) {
  this.title = title;
  this.author = author;
  this.read = false;
  this.image = image;
}

const myLib = [
  {
    title: "Harry potter",
    author: "J K Rowling",
    image:
      "https://i.pinimg.com/564x/cd/74/53/cd745305f88a4139e204f57d11779bd4.jpg",
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    image: "https://m.media-amazon.com/images/I/81Ck2nTaH2L._SL1500_.jpg",
  },
];

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const status = document.querySelector("#status");
const container = document.querySelector(".container");
const btn = document.querySelector("#btn");
const myFile = document.querySelector("#myFile");

function renderBooks() {
  container.innerHTML = "";
  myLib.forEach((book) => {
    const div = document.createElement("div");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const heading1 = document.createElement("h1");
    const heading2 = document.createElement("h2");
    const removeBtn = document.createElement("button");
    const toggleReadBtn = document.createElement("button");
    const image = document.createElement("img");

    image.setAttribute("src", book.image);
    image.setAttribute("id", "imagecontainer");
    removeBtn.textContent = "Remove";
    toggleReadBtn.textContent = book.read ? "Read" : "Not Read";
    heading1.textContent = book.title;
    heading2.textContent = book.author;
    div.setAttribute("id", "bookcontainer");
    removeBtn.setAttribute("id", "removebtn");
    toggleReadBtn.setAttribute("id", "togglebtn");

    div1.appendChild(image);
    div2.appendChild(heading1);
    div2.appendChild(heading2);
    div2.appendChild(removeBtn);
    div2.appendChild(toggleReadBtn);
    div.appendChild(div1);
    div.appendChild(div2);
    container.appendChild(div);

    removeBtn.addEventListener("click", () => {
      container.removeChild(div);
      const index = myLib.indexOf(book);
      myLib.splice(index, 1);
      renderBooks();
    });

    toggleReadBtn.addEventListener("click", () => {
      book.read = !book.read;
      toggleReadBtn.textContent = book.read ? "Read" : "Not Read";
    });
  });
}

function addBooktoLib() {
  const book = new Book(title.value, author.value, myFile.value);
  myLib.push(book);
  renderBooks();
  title.value = "";
  author.value = "";
  myFile.value = "";
}

btn.addEventListener("click", () => {
  addBooktoLib();
});

renderBooks();
