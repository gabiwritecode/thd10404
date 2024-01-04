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
// checkbox
const checkAll = document.querySelector('#checkAll')
const cks = document.querySelectorAll('.ck')
// 大框控制小框
checkAll.addEventListener('click',function(){
  for(let i = 0; i<cks.length ; i++){
    cks[i].checked=this.checked
  }
})
// 給小框添加點擊事件
for(let i = 0;i<cks.length;i++){
  cks[i].addEventListener('click',function(){
    checkAll.checked = document.querySelector('.ck:checked').length === cks.length
  })
}

// 移除商品
// 獲得按鈕元素
let removeButtons = document.querySelectorAll('.delete');

// 移除按鈕的點擊事件
for(let i= 0;i<removeButtons.length;i++){
removeButtons[i].addEventListener('click', function() {
  // 獲得按鈕的父元素
  let itemContainer = this.closest('.item-container');

  // 如果商品存在就刪除
  if (itemContainer) {
    itemContainer.remove();
  }
});
}


