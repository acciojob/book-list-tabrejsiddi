    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const isbnInput = document.getElementById('isbn');
    const submitBtn = document.getElementById('submit');
    const bookList = document.getElementById('book-list');

    submitBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const title = titleInput.value.trim();
      const author = authorInput.value.trim();
      const isbn = isbnInput.value.trim();

      if (!title || !author || !isbn) return;

      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
      `;

      bookList.appendChild(row);
      titleInput.value = '';
      authorInput.value = '';
      isbnInput.value = '';
    });
    bookList.addEventListener('click', function (e) {
      if (e.target.classList.contains('delete')) {
        e.target.closest('tr').remove();
      }
    });
