// ข้อมูลที่จะใช้แสดงผล
const cards = [
    { id: 1, name: "Card 1", image: "https://images.pexels.com/photos/6708796/pexels-photo-6708796.jpeg", desc: "No.1"},
    { id: 2, name: "Card Robolx", image: "https://images.pexels.com/photos/4065881/pexels-photo-4065881.jpeg", desc: "No.2"},
    { id: 3, name: "Card 3", image: "https://images.pexels.com/photos/7285802/pexels-photo-7285802.jpeg", desc: "No.3"}
];

// ฟังก์ชั่นแสดงผลข้อมูลใน Card Template
function displayCards(cards) {
    const container = document.getElementById('card-container');
    const template = document.getElementById('card-template');

    container.innerHTML = '';

    cards.forEach(card => {
        // ดึงโครงสร้างของตัว Template
        const data = template.content.cloneNode(true);

        // เติมข้อมูลเข้า Template
        data.querySelector('.card-img-top').src = card.image;
        data.querySelector('.card-title').textContent = card.name;
        data.querySelector('.card-text').textContent = card.desc;

        const button = data.querySelector('button');
        button.addEventListener('click', () => {
            alert(`คุณกำลังดูรายละเอียดของ: ${card.name}`);
        });
        
        // เก็บผลลัพธ์ของ Card Template ที่เพิ่มข้อมูลเข้าไป
        container.appendChild(data);
    });
}

// เรียกใช้งานฟังก์ชั่นในการแสดงข้อมูล
displayCards(cards);