// 點擊效果
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"
    });
  });
});

// navbar點擊出現

const header = document.querySelector('header');



header.addEventListener('click',function(e){
  const navbarContainer = document.querySelector('.navbar-container');
  

  if(e.target.tagName ==="I"){
    
    if(navbarContainer.style.transform ==='translateX(-600px)'){
      navbarContainer.style.transform ='translateX(-60px)'
    }else{
      navbarContainer.style.transform = 'translateX(-600px)'
    }}

})

// 輪播圖
  // 資料庫
  const data = [
    { url: '../image/activity/monet.jpg', title: '莫內:大師傑作', subtitle: '來自瑪摩丹美術館的鎮館之寶於馬德里限定展出，帶你一睹大師的風采' },
    { url: '../image/activity/slider/candle concert.jpg', title: '馬德里燭光音樂會', subtitle: '燭光映照著美妙音樂，為您帶來令人難忘的音樂體驗' },
    { url: '../image/activity/slider/ice rink.jpg', title: '西班牙廣場滑冰場', subtitle: '在西班牙廣場的冬季仙境中滑行，一同享受這個充滿節慶氛圍的滑冰體驗！' },
    { url: '../image/activity/slider/pixer world.jpg', title: '皮克斯世界', subtitle: '奇幻動畫之旅，探索夢幻故事，盡情享受無限樂趣！' },
    { url: '../image/activity/slider/reyes.jpg', title: '三王節遊行', subtitle: '"一月，準備好迎接三王節遊行的熱鬧氛圍！與家人共同迎接新年的繽紛樂趣。' },
 
  ]
  // 獲取元素
  const img = document.querySelector('.new-information-big img')
  const title = document.querySelector('.new-information-big .title')
  const subtitle = document.querySelector('.new-information-big .subtitle')
  // 獲取下一個的按鈕
  const next = document.querySelector('.next')
  // 獲得圖片index
  let i = 0;
  // 設置點擊事件
  next.addEventListener('click',function(){
    i++;
    i = i>=data.length ? 0 : i;
    toggle();

  })
  // 左側按鈕
  const prev = document.querySelector('.prev')
  prev.addEventListener('click', function(){
    i--;
    i = i<0?data.length-1:i;
    toggle();

  })

  // 設置toggle函數
  function toggle(){
    img.src = data[i].url;
    title.innerHTML = data[i].title;
    subtitle.innerHTML = data[i].subtitle;
    // 更換小圓點
    document.querySelector('.slider-indicator .active').classList.remove('active');
    document.querySelector(`.slider-indicator li:nth-child(${i+1})`).classList.add('active')

  }
  // 自動撥放
  let timerId = setInterval(function(){
    next.click()
  },1500)
  // 鼠標移入 播放暫停
  // 取得大盒子
  const slider = document.querySelector('.new-information-big');
  // 設定事件
  slider.addEventListener('mouseenter',function(){
    clearInterval(timerId)
  })
  // 鼠標離開啟用
  slider.addEventListener('mouseleave',function(){
    if(timerId)clearInterval(timerId)
    timerId = setInterval(function(){
      next.click()
    },2000)
  })




    
    
