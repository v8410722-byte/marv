<script>
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        themeBtn.textContent = "☀️ Денна тема";
    } else {
        themeBtn.textContent = "🌙 Нічна тема";
    }
});
</script>