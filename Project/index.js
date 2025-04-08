// Toggle Menu
const dropdownToggle = document.getElementById('dropdownToggle');
const mobileDiv = document.querySelector('.mobile-div');
dropdownToggle.addEventListener('click', (e) => {
  e.stopPropagation(); 
  if (mobileDiv.style.display === 'block') {
    closeMenu();
  } else {
    openMenu();
  }
});
function openMenu() {
  mobileDiv.style.display = 'block';
  dropdownToggle.classList.remove('fa-bars');
  dropdownToggle.classList.add('fa-xmark');
  dropdownToggle.classList.add('open');
}
function closeMenu() {
  mobileDiv.style.display = 'none';
  dropdownToggle.classList.remove('open');
  dropdownToggle.classList.add('fa-bars');
  dropdownToggle.classList.remove('fa-xmark');
}
document.addEventListener('click', (e) => {
  if (
    mobileDiv.style.display === 'block' &&
    !mobileDiv.contains(e.target) &&
    !dropdownToggle.contains(e.target)
  ) {
    closeMenu();
  }
});
// back to top
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
