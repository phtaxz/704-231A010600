// File: js/script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log("Script chính đã tải thành công!");

    // 1. Highlight menu đang active
    // Lấy tên file hiện tại (ví dụ: index.html)
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const menuItems = document.querySelectorAll('nav a');

    menuItems.forEach(item => {
        // Lấy href của thẻ a (ví dụ: about.html)
        const itemPath = item.getAttribute('href');
        
        // So sánh tương đối
        if (currentPath === itemPath) {
            item.classList.add('active'); // Thêm class active để CSS tô màu
        }
    });

    // 2. Xử lý Form liên hệ (Nếu đang ở trang contact.html)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Ngăn không cho load lại trang
            
            // Lấy dữ liệu
            const name = document.getElementById('name').value;
            
            // Giả lập gửi dữ liệu
            alert(`Cảm ơn bạn ${name}! Tin nhắn của bạn đã được gửi thành công.`);
            
            // Reset form
            contactForm.reset();
        });
    }
});