import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {

  componentWillMount() {
    axios({
      method: 'post',
      url: '',
      data: {
        name: 'Alex',
        age: 20
      }
    }).then()

    function async (url) {
      return new Promise(resolve, reject) {
        const request = XMLHttpRequest()
        request.onreadystatechange = () => {
          if(request.readyState === 4 && request.status === 200) {
            resolve(request.responseText)
          }
          else {
            reject(request.responseText)
          }
        }
        request.open('GET', url)
        request.send()
      }
    }

    async(url).then(res => console.log(res)).catch(err => console.log(err))

  }

  render() {
    return (
      <div className="App">
        测试
      </div>
    )
  }
}

export default App
