// スライドショーで使用する画像一覧
const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg"
];

// 現在表示している画像番号
let imageIndex = 0;

// BGMを取得
const bgm = document.getElementById("bgm");

// 初回クリック済みか判定
let bgmStarted = false;

// 画像を順番に切り替える関数
function changeImage() {

    // 次の画像番号へ移動
    imageIndex++;

    // 最後まで表示したら最初へ戻る
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }

    // 画像を変更
    document.getElementById("slideshow-image").src = images[imageIndex];
}

// 最初のクリックでBGMを再生
function startBgm() {

    if (!bgmStarted) {

        bgm.play().catch(function(error) {
            console.log("BGMを再生できませんでした。", error);
        });

        bgmStarted = true;

        // 一度だけ実行するためイベントを解除
        document.removeEventListener("click", startBgm);
    }
}

// 最初のクリックを待つ
document.addEventListener("click", startBgm);

// 3秒ごとに画像を切り替える
setInterval(changeImage, 3000);