// Dữ liệu thực đơn
const menuItems = [
    {
        id: 1,
        name: 'Phở gà ta truyền thống',
        price: '45.000đ',
        desc: 'Nước dùng thanh ngọt, gà ta thịt mềm da giòn, hành lá và ngò gai tươi.',
        img: 'https://loremflickr.com/500/300/pho,chicken?lock=1'
    },
    {
        id: 2,
        name: 'Phở gà xé phay',
        price: '50.000đ',
        desc: 'Phở kết hợp với gỏi gà xé phay chua ngọt, hành tây giòn sật.',
        img: 'https://loremflickr.com/500/300/pho,salad?lock=2'
    },
    {
        id: 3,
        name: 'Phở gà nấm hương',
        price: '55.000đ',
        desc: 'Đậm đà hương vị nấm hương rừng, bổ dưỡng và thơm ngon.',
        img: 'https://loremflickr.com/500/300/pho,mushroom?lock=3'
    },
    {
        id: 4,
        name: 'Bún thang',
        price: '60.000đ',
        desc: 'Tinh hoa ẩm thực Hà Nội với trứng tráng mỏng, giò lụa, thịt gà xé phi lê.',
        img: 'https://loremflickr.com/500/300/noodle,soup?lock=4'
    },
    {
        id: 5,
        name: 'Cháo gà',
        price: '40.000đ',
        desc: 'Cháo ninh nhừ với nước luộc gà, thêm hành phi và tiêu đen thơm lừng.',
        img: 'https://loremflickr.com/500/300/porridge,chicken?lock=5'
    },
    {
        id: 6,
        name: 'Bánh cuốn nhân gà',
        price: '45.000đ',
        desc: 'Biến tấu thú vị, vỏ bánh mềm dai cuốn cùng nhân tôm và thịt gà băm nhuyễn.',
        img: 'https://loremflickr.com/500/300/steamed,roll?lock=6'
    },
    {
        id: 7,
        name: 'Nem chua rán',
        price: '35.000đ',
        desc: 'Món ăn vặt đặc trưng đường phố Hà Nội, giòn rụm bên ngoài chua ngọt bên trong.',
        img: 'https://loremflickr.com/500/300/fried,snack?lock=7'
    },
    {
        id: 8,
        name: 'Trứng ốp la / Trứng chần',
        price: '10.000đ',
        desc: 'Món gọi thêm hoàn hảo để tăng độ béo ngậy cho bát phở.',
        img: 'https://loremflickr.com/500/300/fried,egg?lock=8'
    },
    {
        id: 9,
        name: 'Trà đá Hà Nội',
        price: '5.000đ',
        desc: 'Trà xanh thoang thoảng hương sen, giải khát tuyệt vời.',
        img: 'https://loremflickr.com/500/300/iced,tea?lock=9'
    },
    {
        id: 10,
        name: 'Nước chanh mật ong',
        price: '20.000đ',
        desc: 'Vị chua ngọt thanh mát với mật ong nguyên chất.',
        img: 'https://loremflickr.com/500/300/lemonade,drink?lock=10'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });
    }

    // 3. Render Menu Items
    const menuContainer = document.getElementById('menu-container');
    if (menuContainer) {
        menuItems.forEach((item, index) => {
            const delay = index * 0.1;
            const cardHTML = `
                <div class="menu-card animate-fade-up" style="animation-delay: ${delay}s">
                    <div class="menu-img-wrap">
                        <span class="menu-price">${item.price}</span>
                        <img src="${item.img}" alt="${item.name}" loading="lazy">
                    </div>
                    <div class="menu-info">
                        <h3>${item.name}</h3>
                        <p>${item.desc}</p>
                    </div>
                </div>
            `;
            menuContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    // 4. Form Submission
    const bookingForm = document.getElementById('booking-form');
    const successMsg = document.getElementById('form-success');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Lấy dữ liệu demo form
            const formData = new FormData(bookingForm);
            const dataObj = Object.fromEntries(formData.entries());
            
            console.log("Dữ liệu đơn hàng mới:", dataObj);
            // alert('Xin chào ' + dataObj.name + ', đơn của bạn đã được gửi!');
            
            // Ẩn form, hiện success popup
            bookingForm.style.display = 'none';
            successMsg.classList.remove('hidden');
            successMsg.style.display = 'flex';
        });
    }
});

// Reset Form Function
window.resetForm = function() {
    const bookingForm = document.getElementById('booking-form');
    const successMsg = document.getElementById('form-success');
    
    bookingForm.reset();
    successMsg.classList.add('hidden');
    successMsg.style.display = 'none';
    bookingForm.style.display = 'block';
}
