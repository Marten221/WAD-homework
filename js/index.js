async function fetchPostsEndpoint() {
    const url = 'https://api.jsonbin.io/v3/b/672a13b5acd3cb34a8a30b06'; 

    try {
        const response = await fetch(url, {
            headers: {
                'X-Master-Key': '$2a$10$SwH76GRGwQMP5Y4Y.cOZGePokSLbvaFEKD1wr2lwMPF9YGBBhm1.K' 
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const posts = data.record; // Access the actual data array
        displayPosts(posts);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

async function fetchPostsFile() {
    try {
        const response = await fetch('posts.json');
        const posts = await response.json();

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        displayPosts(posts);
    } catch (error) {
        console.error('Fetch error:', error);
    }
    
}

function displayPosts(posts) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = ''; // Clear existing content

    posts.forEach(post => {
        const card = document.createElement('div');
        card.classList.add('card');

        // Meta section (author and date)
        const meta = document.createElement('div');
        meta.classList.add('meta');

        const left = document.createElement('div');
        left.classList.add('left');
        const userIcon = document.createElement('box-icon');
        userIcon.setAttribute('name', 'user');
        const author = document.createElement('p');
        author.textContent = post.author;
        left.append(userIcon, author);

        const right = document.createElement('div');
        right.classList.add('right');
        const date = document.createElement('p');
        date.textContent = post.createTime;
        right.appendChild(date);

        meta.append(left, right);

        // Image (if exists)
        if (post.image) {
            const img = document.createElement('img');
            img.src = post.image;
            img.alt = post.content || 'Post image';
            card.appendChild(img);
        }

        const content = document.createElement('p');
        content.textContent = post.content;

        const likeIcon = document.createElement('box-icon');
        likeIcon.setAttribute('name', 'like');

        // Append all elements to the card
        card.append(meta, content, likeIcon);
        contentDiv.appendChild(card);
    });
}
//fetchPostsEndpoint();
fetchPostsFile();