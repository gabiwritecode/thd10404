

// 表單驗證
(function () {
  // 1. 發送簡訊驗證
  const code = document.querySelector('.code')
  let flag = true  // 節流閥
  //  1.1 點擊事件
  code.addEventListener('click', function () {
    if (flag) {
      // 限制二次點擊
      flag = false
      let i = 5
      
      code.innerHTML = `0${i}秒後重新獲取`

      let timerId = setInterval(function () {
        i--
        code.innerHTML = `0${i}秒後重新獲取`
        if (i === 0) {
          // 關閉定時器
          clearInterval(timerId)

          code.innerHTML = `再次發送`
          // 倒數完畢後重新打開節流閥
          flag = true
        }
      }, 1000)
    }
  })
})();


// 驗證用戶名

const username = document.querySelector('[name=username]')
// change事件
username.addEventListener('change', verifyName)
function verifyName() {

  const span = username.nextElementSibling
//  用戶名的正則表達式
  const reg = /^[a-zA-Z0-9-_]{6,10}$/
  if (!reg.test(username.value)) {
    span.innerText = '請輸入6到10位'
    return false
  }
  // 清空
  span.innerText = ''
  return true
}



// 驗證手機
const phone = document.querySelector('[name=phone]')
// change事件
phone.addEventListener('change', verifyPhone)
function verifyPhone() {

  const span = phone.nextElementSibling
//  手機的正則表達式
  const reg = /^09\d{2}-?\d{3}-?\d{3}$/ 
  if (!reg.test(phone.value)) {
    span.innerText = '請輸入正確的手機號碼'
    return false
  }
  // 清空
  span.innerText = ''
  return true
}

// 驗證碼
const codeInput = document.querySelector('[name=code]')
//change事件
codeInput.addEventListener('change', verifyCode)

function verifyCode() {
  const span = codeInput.nextElementSibling
//驗證碼正則表達式
  const reg = /^\d{6}$/
  if (!reg.test(codeInput.value)) {

    span.innerText = '請輸入六位數字'
    return false
  }
  // 清空
  span.innerText = ''
  return true
}


// 驗證密碼
const password = document.querySelector('[name=password]')
//change事件
password.addEventListener('change', verifyPwd)
function verifyPwd() {
  const span = password.nextElementSibling
  //密碼正則表達式
  const reg = /^[a-zA-Z0-9-_]{6,20}$/
  if (!reg.test(password.value)) {
    // console.log(11)
    span.innerText = '請設置6到20位數'
    return false
  }
  //清空
  span.innerText = ''
  return true
}



// 再次輸入密碼
const confirm = document.querySelector('[name=confirm]')
//change事件
confirm.addEventListener('change', verifyConfirm)
function verifyConfirm() {

  const span = confirm.nextElementSibling
  // 若兩次不同則錯誤
  if (confirm.value !== password.value) {
    span.innerText = '輸入密碼不符'
    return false
  }
  //清空
  span.innerText = ''
  return true
}

// 7. 我同意
const checkbox = document.querySelector('#regulation')

// 8. 提交表單
const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
  // 判斷是否勾選
  if (!checkbox.checked) {
    alert('請勾選同意')
    // 阻止提交
    e.preventDefault()
  }
  // 判斷是否每個內容都勾同意

  if (!verifyName()) e.preventDefault()
  if (!verifyPhone()) e.preventDefault()
  if (!verifyCode()) e.preventDefault()
  if (!verifyPwd()) e.preventDefault()
  if (!verifyConfirm()) e.preventDefault()
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