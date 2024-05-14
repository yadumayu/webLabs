var books; // Объявляем переменную в глобальной области видимости

document.addEventListener("DOMContentLoaded", function() {
    // AJAX запрос к PHP скрипту
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Парсинг JSON данных и сохранение их в JavaScript массиве
            books = JSON.parse(xhr.responseText);
            // Получаем текущий URL-адрес
            var currentUrl = window.location.href;
            // Проверяем, не является ли текущий URL страницей книги
            if (!currentUrl.includes("item.php")) {
                // Если нет, то отображаем книги и добавляем обработчики событий для кнопок
                displayBooks(books);
                var buttons = document.querySelectorAll(".btn-primary-card");
                buttons.forEach(function(button) {
                    button.addEventListener("click", redirectToBookPage);
                });
            } else {
                // Если это страница книги, то получаем bookId из параметров URL и заполняем разметку страницы книги
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                const bookId = urlParams.get('id');
                feedContentOnBookPage(bookId, books);
                if(cart.some(item => item.title === books[bookId].title)) {
                    // Объект уже присутствует в корзине, выполните соответствующие действия
                    document.getElementById("btnToCart").disabled = true;
                    
                } else {
                    document.getElementById("btnToCart").addEventListener("click", function() {
                
                    addToCart(books[bookId]);
                    updateCartCounter();
                    saveCartToLocalStorage(cart);
                    });
                }   
            }
        }
    };

    xhr.open("GET", "ajax.php", true);
    xhr.send();
});

function displayBooks(books) {
    var container = document.getElementById("books-container");
  
    // Очищаем контейнер перед заполнением новыми элементами
    container.innerHTML = "";
  
    // Проходим по массиву книг и создаем элементы для каждой книги
    books.forEach(function(book, index) {
      var card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("card-shop");
      card.style.width = "10rem";
  
      var image = document.createElement("img");
      image.classList.add("card-img-top");
      image.src = book.cover_path;
      image.alt = "Book image";
  
      var cardBody = document.createElement("div");
      cardBody.classList.add();
  
      var title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = book.title;
  
      var author = document.createElement("p");
      author.classList.add("card-text");
      author.textContent = book.author;
  
      var price = document.createElement("p");
      price.classList.add("card-text", "margin-left");
      price.textContent = "$" + book.price;
  
      
  
      var link = document.createElement("a");
      link.classList.add("btn", "btn-primary", "btn-primary-card");
      
      link.textContent = "Go to book";
      link.data = `${index}`;
      link.id = "goToBookButton"
  
      cardBody.appendChild(title);
      cardBody.appendChild(author);
      cardBody.appendChild(price);
      
      
      cardBody.appendChild(link);
  
      card.appendChild(image);
      card.appendChild(cardBody);
  
      container.appendChild(card);
    });
  }
  

  document.addEventListener("DOMContentLoaded", function() {
  
  });
  document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("searchBtn").addEventListener("click", function() {
    searchBooks(books);
    });
  });

function searchBooks(books) {
    var searchQuery = document.getElementById("exampleDataList").value.toLowerCase();
    var dataList = [];
 
    for (var i = 0; i < books.length; i++) {
        var book = books[i];
        if (book.author.toLowerCase().includes(searchQuery) || book.title.toLowerCase().includes(searchQuery)) {
            dataList.push(book);

        }
    }

    displayBooks(dataList);
}
document.addEventListener("DOMContentLoaded", function() {
    
});
    
function redirectToBookPage(event) {
    console.log("Клик по кнопке", event.target, event.target.data, typeof(event.target.data));
        // Получаем bookId из атрибута data элемента
        var bookId = event.target.data;
        // Перенаправляем пользователя на страницу книги с переданным bookId в URL
        var htmlString = `item.php?id=${bookId}`;
        window.location.href = htmlString;
        
    }
    document.addEventListener("DOMContentLoaded", function() {
        
    });

function feedContentOnBookPage(bookId, books){
    var container = document.getElementById("bookMainContainer");
    container.innerHTML = "";
    console.log(books[bookId]);
    var query = `
    <div class ="container margin-top">
        <div class="image-container">
            <img class="book-main-img" src="${books[bookId].cover_path}" alt="Image">
        </div>
        <div class="text-container margin-left">
            <h2>${books[bookId].title}</h2>
            <p class="margin-left">${books[bookId].author}</p>
                <div class="margin-top container blue">
                    <p class=" margin-top margin-left">${books[bookId].description}</p>
                </div>
        </div>
    </div

    <div class=" price text-container container">
        <div class="ib">
            <h4 class="price">${books[bookId].price}$</h4>
        </div>
    <div class="ib margin-left ">
        <input type="checkbox" class="btn-check" id="btnToCart" autocomplete="off">
        <label class="btn btn-outline-primary oval-btn" for="btnToCart">
            <p>Add to cart</p>
        </label>
    </div>`
    container.innerHTML = query;
};


let cart = [];

function addToCart(book) {
    if(!(book in cart)){
    cart.push(book);
    updateCartCounter();
    }
}

function displayCart() {
    const cartContainer = document.getElementById("cartContainer");
    cartContainer.innerHTML = ""; // Очищаем контейнер перед обновлением

    cart.forEach(book => {
        var card = document.createElement("div");
      card.classList.add("card");
      card.classList.add("card-shop");
      card.style.width = "10rem";
  
      var image = document.createElement("img");
      image.classList.add("card-img-top");
      image.src = book.cover_path;
      image.alt = "Book image";
  
      var cardBody = document.createElement("div");
      cardBody.classList.add();
  
      var title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = book.title;
  
      var author = document.createElement("p");
      author.classList.add("card-text");
      author.textContent = book.author;
  
      var price = document.createElement("p");
      price.classList.add("card-text", "margin-left");
      price.textContent = "$" + book.price;
  
      
  
      cardBody.appendChild(title);
      cardBody.appendChild(author);
      cardBody.appendChild(price);
      
      
      
  
      card.appendChild(image);
      card.appendChild(cardBody);
  
      cartContainer.appendChild(card);
    });
}


    

function saveCartToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Функция для загрузки корзины из localStorage
function loadCartFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Функция для обновления счетчика корзины
function updateCartCounter() {
    const cartCounter = document.getElementById("cartCounter");
    cartCounter.textContent = cart.length;
}

// Загрузка корзины из localStorage при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
    cart = loadCartFromLocalStorage();
    updateCartCounter();
});



// Добавление функции отображения корзины
document.addEventListener("DOMContentLoaded", function() {
    displayCart();
});

document.addEventListener("DOMContentLoaded", function() {
    // Обработчик события для кнопки "Clear Cart"
    document.getElementById("clearBtn").addEventListener("click", function() {
        // Очищаем массив книг в корзине
        cleanCart();
    });
});

function cleanCart(){
    cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        // Обновляем отображение корзины
        displayCart();
        // Обновляем счетчик корзины
        updateCartCounter();
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("feedbackForm")
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
    
    if(cart.length < 1) {
        console.log("choose book to order");
        showModal("Error", "choose book to order")
        
    }
    else if (!isValidEmail(email)) {
        console.log("Invalid email format");
        showModal("Error", "Invalid email format" )
    }
    else if(name == "") {
        showModal("Error", "Name field is empty" )
    }
    else if (!isValidPhone(phone)) {
        console.log("Invalid phone number format");
        showModal("Error", "Invalid phone number format")
    }
    else 
    {
        const formData = new FormData(form);
        cart.forEach(book => {
            formData.append('books[]', book.id);
            
        });
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "processOrder.php", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText);
                for (const pair of formData.entries()) {
                    console.log(pair[0] + ': ' + pair[1]);
                }
                showModal("Success", "Your order is correct!");
                cleanCart();
            }
        };
        xhr.send(formData);
    }

    });

});

function isValidEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }
  
  
  function isValidPhone(phone) {
    const regex = /^\d{11}$/; 
    return regex.test(phone);
  }

  function showModal(title, message) {
    var modalTitle = document.querySelector('.modal-title');
    modalTitle.textContent = title;
  
    var modalBody = document.querySelector('.modal-body');
    modalBody.textContent = message;
  
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
  }