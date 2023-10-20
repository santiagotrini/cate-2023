let url = 'http://localhost:3000/posts';
fetch(url)
  .then(res => res.json())
  // .then(datos => console.log(datos));
  .then(data => {
    loadPosts(data);
  });

function filterByAuthor(event) {
  event.preventDefault();
  let author = event.target.author.value;
  let url = `http://localhost:3000/posts/query?author=${author}`;
  console.log(url);
  fetch(url)
    .then(res => res.json()) // caza el body de la respuesta y hace un JSON.parse
    .then(data => {
      loadPosts(data);
    });
}

function savePost(event) {
  event.preventDefault();
  let author = event.target.author.value;
  let content = event.target.content.value;
  let title = event.target.title.value;
  let id = Math.floor(Math.random() * 15233);
  let post = { author, content, title, id };
  let url = 'http://localhost:3000/posts';
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  };
  fetch(url,options)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      location.reload();
    });
}

function loadPosts(data) {
  let container = document.querySelector('.posts');
  container.innerHTML = '';
  for (let post of data) {
    let postdiv = document.createElement('div');
    let title = document.createElement('h1');
    let author = document.createElement('h3');
    title.textContent = post.title;
    author.textContent = post.author;
    postdiv.append(title);
    postdiv.append(author);
    container.append(postdiv);
  }
}
