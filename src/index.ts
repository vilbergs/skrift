import { create } from './test'

create(document.getElementById('editor') as HTMLElement).then((editor) => {
  editor.input((content) => {
    if (app) {
      app.innerHTML = content
    }
  })
})

const app = document.getElementById('app')
