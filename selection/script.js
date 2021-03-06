// DOM Selection

// // 1. getElementById() -> Element
// const judul = document.getElementById(`judul`);
// const container = document.getElementById(`container`);
// const a = document.getElementById(`a`);
// const b = document.getElementById(`b`);

// judul.innerHTML = "Fahrul Zaman";
// container.style.fontFamily = `Courier New`;
// a.style.backgroundColor = `lightseagreen`;
// b.style.backgroundColor = `coral`;

// // 2. getElementsByTagName() -> HTMLCollection
// const h1 = document.getElementsByTagName(`h1`);
// h1[0].innerHTML = `DOM Selection`;

// const p = document.getElementsByTagName(`p`);
// for (let i = 0; i < p.length; i++) {
//   p[i].style.color = `red`;
// }

// p[2].innerHTML = `Diubah dengan Javascript`;

// const li2 = document.getElementsByTagName(`li`)[1];
// li2.innerHTML = `Ubah li ke 2`;

// // 3. getElementsByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName(`p1`);
// p1[0].innerHTML = `P1 Javascript`;

// const p2 = document.getElementsByClassName(`p2`)[0];
// p2.innerHTML = `ini Paragraf ke 2`;

// const paragraf = document.getElementsByClassName(`paragraf`);
// for (let i = 0; i < paragraf.length; i++) {
//   paragraf[i].style.backgroundColor = `lightgreen`;
// }

// // 4. querySelector() -> Element
// // selector seperti CSS
// const h1 = document.querySelector(`h1#judul`);
// h1.innerHTML = `querySelector`;

// const p1 = document.querySelector(`#a p.paragraf.p1`);
// p1.style.backgroundColor = `lightblue`;
// p1.style.fontFamily = `courier new`;

// // 5. querySelectorAll() -> NodeList
// const paragraf = document.querySelectorAll(`p.paragraf`);
// for (let i = 0; i < paragraf.length; i++) {
//   paragraf[i].style.backgroundColor = `lightseagreen`;
// }

// const li = document.querySelectorAll(`section#b ul li`);
// li[0].style.backgroundColor = `blue`;
// li[1].style.backgroundColor = `salmon`;
// li[2].style.backgroundColor = `pink`;

// 6. Persempit pencarian selector
const sectionA = document.getElementById(`a`);
// p yang ada di sectionA
const p = sectionA.getElementsByTagName(`p`);

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = `purple`;
}

const sectionB = document.getElementById(`b`);
const p2 = sectionB.getElementsByTagName(`p`);

p2[0].innerHTML = `HALO`;
