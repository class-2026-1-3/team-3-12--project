const foods = [
    "치킨",
    "피자",
    "떡볶이",
    "초밥",
    "국밥",
    "파스타",
    "삼겹살",
    "마라탕"
];

let degree = 0;

function spinWheel(){

    const random =
    Math.floor(Math.random()*8);

    degree +=
    3600 + random * 45;

    document
    .getElementById("wheel")
    .style.transform =
    `rotate(${degree}deg)`;

    setTimeout(()=>{

        document
        .getElementById("result")
        .innerText =
        "오늘의 메뉴 : " +
        foods[random];

    },4000);
}
