document.getElementById('heading').addEventListener('mouseover', function() {
    this.textContent = this.textContent === 'TheTimelessTutor' ? 'TheTimeless' : 'TheTimelessTutor';
});

function showAlert() {
    alert('Stay Tuned! Our website is under construction. It’s going to be YUGE! Huge I tell you!');
}

function showAbout() {
    document.getElementById('aboutSection').style.display = 'block';
}

function closeAbout() {
    document.getElementById('aboutSection').style.display = 'none';
}

document.getElementById('queryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your query has been sent to contact@timelesstutor.com!');
});
