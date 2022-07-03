function toggleText() {
  let toggle = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');
  toggle.addEventListener('click', () => {
    text.toggleAttribute("hidden");
  });
}
