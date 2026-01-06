const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
    // <html> etiketini seçer
    const htmlElement = document.documentElement;
    
    // Mevcut temayı kontrol et
    const currentTheme = htmlElement.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        // Koyu temadaysa açığa geç
        htmlElement.setAttribute('data-theme', 'light');
        toggleBtn.textContent = "KOYU TEMA";
    } else {
        // Açık temadaysa koyuya geç
        htmlElement.setAttribute('data-theme', 'dark');
        toggleBtn.textContent = "AÇIK TEMA";
    }
});