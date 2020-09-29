import { create } from './test'

const skrift = create(document.getElementById('editor') as HTMLElement)

skrift.input((content) => {
    const app = document.getElementById('app')

   if (app) {
    app.innerHTML = content
   }
})