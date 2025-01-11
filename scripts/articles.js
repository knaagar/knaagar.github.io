let params = new URLSearchParams(document.location.search);
let id = params.get("id");
console.log(id)
let fetchString = `articles/${id}.md`

fetch(fetchString)
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load markdown file');
        }
        return response.text();
    })
    .then(markdown => {
        var converter = new showdown.Converter({
            tables: true,
        });
        var html = converter.makeHtml(markdown);
        html += `<br><br><br> <p style='text-align: center;'>© <span>${new Date().getFullYear()}</span> Kritika Naagar</p>`
        document.getElementById('output').innerHTML = html;
    })
    .catch(error => {
        console.error('Error:', error);
    });