let mobileMenu = document.querySelector('.mobile')

document.querySelector('.hamburger').onclick = () => {
    mobileMenu.classList.toggle('active');
}

document.querySelectorAll('.category').forEach(cat => {
  cat.addEventListener('click', () => {
    const category = cat.getAttribute('data-category');
    window.location.href = `allproducts.html?category=${category}`;
  });
});

