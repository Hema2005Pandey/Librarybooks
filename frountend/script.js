function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please fill all fields");
    return;
  }
  // Demo login
  if (email === "admin@gmail.com" && password === "1234") {
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong credentials");
  }
}
let books = [];
function addBook() {
  let bookName = document.getElementById("bookName").value;
  let authorName = document.getElementById("authorName").value;

  if (bookName === "" || authorName === "") {
    alert("Enter all fields");
    return;
  }

  let book = {
    name: bookName,
    author: authorName
  };

  books.push(book);

  displayBooks();
}

function displayBooks() {
  let list = document.getElementById("bookList");
  list.innerHTML = "";

  books.forEach((book, index) => {
    list.innerHTML += `
      <li>
        ${book.name} by ${book.author}
        <button onclick="deleteBook(${index})">Delete</button>
      </li>
    `;
  });
}

function deleteBook(index) {
  books.splice(index, 1);
  displayBooks();
}