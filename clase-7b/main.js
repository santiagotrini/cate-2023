let url = 'http://localhost:3000/posts';
fetch(url)
  .then(res => res.json())
  .then(data => {
    loadPosts(data);
  });

function loadPosts(data) {
  let container = document.querySelector('.posts');
  for (post of data) {
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
