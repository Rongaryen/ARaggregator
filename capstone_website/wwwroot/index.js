function showPage(event, pageId) {
    event.preventDefault();
    // Hide all content sections
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }

    // Show the selected content section
    document.getElementById(pageId).classList.add('active');
}

// Show the first page by default
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('Home').classList.add('active');
});
