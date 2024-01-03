// 選擇實體或線上

const methodContainers = document.querySelectorAll('.method-container')

for(let i = 0;i<methodContainers.length;i++){
  // 設定事件
  methodContainers[i].addEventListener('click',function(){
    // 先移除active
   document.querySelector('.ticket-method .active').classList.remove('active')
    // 加上active
    this.classList.add('active')
  })
}

// 數量加減
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const number = document.querySelector('.number')

let num=1
plus.addEventListener('click',function(){
  num ++;
  number.innerHTML = num;
  return num
})
minus.addEventListener('click',function(){
  if(num>0){
    num--;
    number.innerHTML = num;
    return num

  }else{
    number.innerHTML = 0
  }
})

// 內容收放
const down = document.querySelector('.down')


down.addEventListener('click',function(){
  const text = document.querySelector('.text');

  if(text.innerHTML !==''){

    text.innerHTML ='';
    down.classList.remove('fa-chevron-up');
    down.classList.add('fa-chevron-down');

  }else{

  
    text.innerHTML = `馬德里一日遊 - 奢華藝術之旅
    歡迎來到西班牙的心臟，馬德里！我們精心策劃的馬德里一日遊將帶你穿越這座充滿歷史、藝術和美食的城市，體驗奢華的文化之旅。<br><br><br><br>早上：皇宮之恩<br>開始你的一日遊，探索西班牙的皇家歷史，步入宏偉的皇宮。感受皇室的恢弘氣勢，漫遊於金碧輝煌的宮殿大廳，彷彿時光倒流，進入皇室的華麗時代。提前購票，讓你輕鬆無憂地享受皇家之旅。<br>上午：市集美食之旅<br>隨後，踏上前往聖米格爾市場的旅程。這裡是美食愛好者的天堂，琳瑯滿目的當地小吃、新鮮海鮮、特色火腿和奶酪等，將為你的味蕾帶來一場盛宴。品味馬德里的地道美味，感受這座城市的生動風情。<br>下午：藝術之巅<br>午間，前往索菲亞王后藝術中心，這座藝術殿堂匯聚了世界頂尖的藝術珍品。在畢加索、米羅等大師的作品中遨遊，沉浸在藝術的海洋中。提前預定門票，避免不必要的等待，讓你專注享受每一幅畫作。<br>傍晚：悠閒時光<br>抽空來到帕塞奧德拉·維拉，這片美麗的公園將為你的旅程劃上一個悠閒的句點。划船、漫步、或在草地上小憩，感受大自然和城市的和諧交融。<br>晚上：拉丁區美食之夜<br>晚餐時間，移步到拉丁區，品味地道的西班牙美食。海鮮鍋、火腿、奶酪，每一口都是一場對味蕾的豐盛饗宴。沉浸在夜晚的燈光中，感受馬德里夜色的浪漫。<br><br><br><br>馬德里一日遊，是一場奢華的藝術之旅，讓你在有限的時間內深度體驗這座城市的獨特之處。歡迎加入我們，一同探索馬德里的奇妙世界！`;
    down.classList.remove('fa-chevron-down');
    down.classList.add('fa-chevron-up');
  }
})

// 漢堡包
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




    

