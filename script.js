const Books = [
    {
      title: "Empire V",
      author: "Viktor Pelevin",
      description: `A young man named Roman Aleksandrovich Shtorkin 
      becomes a vampire.This happens when Roman accidentally meets
       another vampire, Brama, who decided to kill himself after a
        vampire duel. But before he does, he is obliged to give the
         other man his tongue – the special essence that makes a person
          a vampire. With the help of the tongue, a vampire can read the
           mind of a human or another vampire by tasting their blood; as
            vampires say, tasting`,
      price: 5.99,
      image: "images/viktorPelevinEmpire.jpg"
    },
    {
      title: "Hyperion",
      author: "Dan Simmons",
      description: `Hyperion is a Hugo Award-winning science fiction
       novel written in 1989 by author Dan Simmons. It is the first of
        four books set in the fictional Hyperion universe. Over a
         thousand years into the future, humankind has conquered the
          space travel and colonized hundreds of worlds in this arm of
           the Milky Way. The novel then tells the story of seven
            individuals of different backgrounds whom are chosen to
             travel to the Outback planet of Hyperion as pilgrims on
              the Final Shrike Pilgrimage to the mysterious, ancient
               Time Tombs wherein lives a creature of extreme power, the
                Shrike.`,
      price: 4.99,
      image: "images/danSimmonsHyperion.webp"
    }, {
        title:"Hotel",
        author:"Strugackie",
        description: `The story “Hotel “At the Dead Climber”” begins exactly like a classic detective story about a group of people. The main character, Inspector Peter Glebski, arrives at a hotel that was recommended to him by a colleague, a specialist in safecrackers. Like, there, in the mountains where this hotel is located, there is excellent air, excellent relaxation, and the owner of the hotel, Alek Snevar, is a great person. And so, this same Peter Glebski, goes to the mountains for the weekend, to a hotel...`,
        price: 5.99,
        image: "images/strugackieDeadAlphinist.jpg"
    }, {
        title: "Strawberry thief",
        author: "Joanne Harris",
        description:"“The Strawberry Thief by Joanne Harris” is a story of love, loss, heartbreak, and unbreakable bonds. This novel is written by Joanne Harris.  This is a gorgeous story about how life doesn’t always work out the way we want it to, but if we’re willing, we can still make it a great life. It is a good compelling story, engaging, and easy to read. This is the perfect holiday novel, you can pick it up and get straight back into the story.",
        price: 6.99,
        image: "images/joanneHarris.jpg"
    }, {
        title:"1984",
        author:"George Orwell",
        description:`1984, or "Nineteen Eighty-Four," is a 1949 novel by George Orwell. It is a dystopian novel, meaning it takes place in a dehumanized, futuristic society. It tells the story of a man who lives in a totalitarian world with a harsh government and how he plans to rebel against his corrupt government and society. 1984 has also invented several famous Orwellian words such as Newspeak, Big Brother and thoughtpolice.`,
        price: 3.99,
        image: "images/georgeOrwell1984.webp"
    }, {
        title:"Halloweens Party",
        author:"Agatha Cristie",
        description:`The novel features her Belgian detective Hercule Poirot and the mystery novelist Ariadne Oliver. The novel focuses on child murder (with its possible sexual motivation), the irresponsibility of teenagers and the crisis in crime and punishment. This book was dedicated to P.G. Wodehouse.
        `,
        price: 3.99,
        image: "images/agathaCristieHaloweensParty.webp"
    }, {
        title:"Master and Margarita",
        author: "Michael Bulgakov",
        description:`In his book 'The Master and Margarita', Mikhail Bulgakov describes how the Devil, posing as Professor Woland, and his entourage arrives in Soviet Moscow. Pontius Pilate, who meets Yeshua Ha-Nozri (Jesus Christ), and Margarita, a conflicted writer divided between her love for the Master and her loyalty to Woland, are two characters whose tales are intertwined in the book. The book makes fun of Soviet culture and examines the nature of virtue and evil.`,
        price: 4.99,
        image: "images/michaelBulgakovMasterAndMargarita.webp"
    },{
        title:" Suitcase",
        author: " Sergei Dovlatov",
        description: `The words “A Novel” appear on the cover of Sergei Dovlatov’s The Suitcase, but that isn’t an accurate description of the book’s 8 chapters which are bookended by the sections “Foreword” and “Instead of an Afterword.” In each chapter Dovlatov (1941-1990) examines one of the few objects found in his suitcase–the single piece of luggage he took with him when he left the Soviet Union and emigrated to America. `,
        price: 5.99,
        image: "images/sergeiDovlatovSuitcase.webp"
    }, {
        title:"One Flew over the Cuckoo's Nest",
        author:"Ken Kesey",
        description:`One Flew over the Cuckoo’s Nest is a tragic yet inspirational account of one man’s self-sacrifice in a struggle against hypocrisy and oppression. Set on a ward of a mental hospital in Oregon, the novel depicts characters who could be found in many settings and a conflict between authoritarianism and individualism that is truly universal.
        `,
        price: 6.99,
        image:"images/kenKeseyCuckoosNest.webp"
    }, {
        title:"Croocked house",
        author:"Agatha Cristie",
        description:`Charles Hayward returns to England from European war with the hope to marry Sophia Leonides. His plans are spoiled when hears that her wealthy grandfather Aristide Leonides has been murdered, by his own family, no less. Sophia asks him to help her finding out the culprit and announces that she cannot marry him until this is solved. She also indicates that ‘it would be easier if it was the right person.’ His father, Assistant Commissioner of the Yard, gives his assent and encourages the idea.

        `,
        price: 3.99,
        image:"images/agathaCristieCroockedHouse.webp"
    }
    
];
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
      image.src = book.image;
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
    displayBooks(Books);
  });
  document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("searchBtn").addEventListener("click", function() {
    searchBooks(Books);
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
    // Получаем все элементы кнопок с классом "btn-primary-card"
    var buttons = document.querySelectorAll(".btn-primary-card");
    // Добавляем обработчик события click для каждой кнопки
    buttons.forEach(function(button) {
        button.addEventListener("click", redirectToBookPage);
    });
});
    
function redirectToBookPage(event) {
    console.log("Клик по кнопке", event.target);
        // Получаем bookId из атрибута data элемента
        var bookId = event.target.data;
        // Перенаправляем пользователя на страницу книги с переданным bookId в URL
        var htmlString = `item.html?id=${bookId}`;
        window.location.href = htmlString;
        
    }
    document.addEventListener("DOMContentLoaded", function() {
        // Получаем bookId из параметров URL
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const bookId = urlParams.get('id');
    
        // Заполняем разметку страницы книги
        feedContentOnBookPage(bookId, Books);
    });

function feedContentOnBookPage(bookId, books){
    var container = document.getElementById("bookMainContainer");
    container.innerHTML = "";
    console.log(books[bookId]);
    var query = `
    <div class ="container margin-top">
        <div class="image-container">
            <img class="book-main-img" src="${books[bookId].image}" alt="Image">
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
    cart.push(book);
    updateCartCounter();
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
      image.src = book.image;
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

// Добавление книги в корзину
document.addEventListener("DOMContentLoaded", function() {
    const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const bookId = urlParams.get('id');
        if(cart.some(item => item.title === Books[bookId].title)) {
            // Объект уже присутствует в корзине, выполните соответствующие действия
            document.getElementById("btnToCart").disabled = true;
            
        } else {
            document.getElementById("btnToCart").addEventListener("click", function() {
        
            addToCart(Books[bookId]);
            updateCartCounter();
            saveCartToLocalStorage(cart);
            });
        }   
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
     else {
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        var i = 1;
        cart.forEach(book => {
            
            console.log(`|| Book ${i}: ${book.title} | ${book.author} | ${book.price} ||`);
            i+=1;
        });
        showModal("Success", "Your order is correct!")
        cleanCart();
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