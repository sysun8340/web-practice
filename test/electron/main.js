const { app, BrowserWindow } = require('electron')
// 浏览器引用
let window
// 创建浏览器窗口函数
let createWindow = () => {
  window = new BrowserWindow({
    width: 800,
    height: 600
  })
  // 加载应用中的index.html文件
  window.loadFile('./build/index.html')
  // 当window被关闭时，除掉window引用
  window.on('close', () => {
    window = null
  })
}

// 当App就绪时开启窗口
app.on('ready', createWindow)
// 当全部窗口都关闭后退出
app.on('window-all-close', () => {
  if(process.platform !== 'darwin') app.quite()
})
// 在Mac上，单击dock图标并没有其他窗口打开的时候，重新创建一个窗口
app.on('activate', () => {
  if(window === null) createWindow()
})