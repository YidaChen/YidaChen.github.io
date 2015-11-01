document.getElementById('button').addEventListener('click', function() {
    showMenu();
});

document.getElementById('menu').addEventListener('click', function() {
    showMenu();
});

function showMenu() {
    console.log('click');
    var menu = document.getElementById('menu');
    var shadow = document.getElementById('shadow');
    var button = document.getElementById('button');

    menu.className = 'menu-in';
    shadow.className = 'shadow-in';
    button.className = 'none';
}

document.getElementById('shadow').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var shadow = document.getElementById('shadow');
    var button = document.getElementById('button');

    menu.className = 'menu-out';
    shadow.className = 'shadow-out';
    button.className = 'button';
});