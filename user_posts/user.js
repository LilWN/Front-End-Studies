const post_listEL = document.querySelector(".post-list")
const id = localStorage.getItem("id")

async function renderPosts(userId) {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const postsData = await posts.json()
    //console.log(postsData)

    post_listEL.innerHTML = postsData.map(post => postHTML(post)).join('')
}

async function onSearchChange(event) {
    const id = event.target.value
    renderPosts(id)
}

function postHTML(post) {
    return `<div class="post">
                <div class="post__title">
                ${post.title}
                </div>
                <p class="post__body">
                ${post.body}
                </p>
            </div>`
}

renderPosts(id)