(function () {
    const url = window.location;
    const urlParams = new URLSearchParams(window.location.search);

    const paths = url.href.split('/');
    const classNum = paths[paths.length - 2];
    const classTitle = urlParams.get('name') ? `『${urlParams.get('name')}』` : '';

    let title = `第${Number(classNum)}回`
    title += classTitle;
    title += `授業スライド`;

    // 動的にタイトル変更。SEO対策は何も考えていない
    document.title = `情報I ${title}| おかだのページ`;
    // h2タグのタイトルを変更する
    const classNameElement = document.getElementById("class-name");
    classNameElement.innerText = title;

    // Swiper.js
    addSwiperJsCDN();
    addSwiperHTML('slide');
    // 授業スライドを追加していく
    const swiperWrapper = document.querySelector(".swiper-wrapper");

    let fileCount = 1;
    let loadImage = () => {
        const img = new Image();
        img.onload = function () {
            const swiperSlideDiv = document.createElement('div');
            swiperSlideDiv.classList.add('swiper-slide');

            const contentDiv = document.createElement('div');
            contentDiv.classList.add('content');

            contentDiv.appendChild(img);
            swiperSlideDiv.appendChild(contentDiv);
            swiperWrapper.appendChild(swiperSlideDiv);
            fileCount++;
            if (fileCount < 100) {
                loadImage();
            }
        }
        img.onerror = function () {
            // 画像を全て読み込み、クラスの追加をし終わってからでないと、最後までページ遷移しない
            newSwipper();
        };
        img.src = `slide/スライド${fileCount.toString().padStart(2, '0')}.png`;
    }
    loadImage();
})()

/**
 * Swiper.js の CDNを追加する
 */

function addSwiperJsCDN() {
    // swiper.jsを読み込むための準備
    const head = document.head || document.getElementsByTagName('head')[0];
    // link要素を作成して追加
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = 'https://unpkg.com/swiper/swiper-bundle.css';
    head.appendChild(link1);
    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'https://unpkg.com/swiper/swiper-bundle.min.css';
    head.appendChild(link2);
    // body要素を取得
    const body = document.body || document.getElementsByTagName('body')[0];
    // script要素を作成して追加
    const script1 = document.createElement('script');
    script1.src = 'https://unpkg.com/swiper/swiper-bundle.js';
    body.appendChild(script1);
    const script2 = document.createElement('script');
    script2.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
    body.appendChild(script2);
}

function addSwiperHTML(addClassName) {
    const addClassElement = document.getElementById(addClassName);

    addClassElement.innerHTML = `
    <div class="swiper">
    <!-- 必要に応じたwrapper -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <!-- スライドはJavaScriptを用いて動的に追加 -->
            </div>
            <!-- ページネーション -->
            <div class="swiper-pagination"></div>

            <!-- ナビボタン -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>`
}

/**
 * swipper を new する
 */
function newSwipper() {
    const swiper = new Swiper('.swiper-container', {
        //↓追加していく
        // ページネーション
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },

        // ナビゲーション
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // スクロールバー
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}