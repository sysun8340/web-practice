const submit = document.getElementById('submit')
const userName = document.getElementById('user_name')
const userAge = document.getElementById('user_age')
const res = document.getElementById('response')

submit.onclick = function (e) {
  e.preventDefault()
  const name = userName.value
  const age = userAge.value
  const xmlHttp = new XMLHttpRequest()
  console.log(xmlHttp)
  xmlHttp.onreadystatechange = function () {
    if(xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      res.innerText = xmlHttp.response
    }
    else{
      res.innerText = "请求发生错误"
    }
  }
  xmlHttp.open('GET','http://sunshiyong.xyz/api/userAccount.php?user_name=' + name + '&' + 'user_age=' + age)
  xmlHttp.send()
}