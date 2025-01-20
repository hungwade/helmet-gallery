document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const items = document.querySelectorAll('.gallery-item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            items.forEach(item => {
                // 根據分類顯示或隱藏項目
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.getElementById('closeModal');
    const images = document.querySelectorAll('.gallery-item img');

    // 點擊圖片顯示彈出框
    images.forEach(img => {
        img.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImg.src = img.src;
            captionText.innerText = img.alt; // 使用圖片的 alt 作為標題
        });
    });

    // 點擊關閉按鈕隱藏彈出框
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // 點擊彈出框背景也可以關閉
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

            });
        });
    });
});
