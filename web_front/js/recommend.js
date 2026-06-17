const foods = [
    "치킨",
    "피자",
    "떡볶이",
    "국밥",
    "초밥",
    "마라탕",
    "파스타",
    "삼겹살"
];

function recommendFood(){

    const random =
    Math.floor(Math.random()*foods.length);

    document.getElementById("result")
    .innerText =
    foods[random];
}