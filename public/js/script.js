const newBlog = async (event)=> {
    event.preventDefault();

    const name = document.querySelector('#title').value();
    const content = document.querySelector('#content').value();

    if (name && content) {
        const response = await fetch ('api/blogs', {
            method: 'POST',
            body: JSON.stringify({name, content}),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            document.location.replace('/blogs')
        } else {
            alert('Cannot create new blog!')
        }
    }
};

document    
    .querySelector('#create')
    .addEventListener('submit', newBlog);

    