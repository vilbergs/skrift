interface SkriftInstance {
  element: HTMLElement
  content: string
  input: (action: TypeAction) => void
}

type TypeAction = (editorContent: string) => any

const create = (element: HTMLElement): Promise<SkriftInstance> => {
  return new Promise((resolve, reject) => {
    if (!element) {
      reject(
        'No element received, skrift instance must be attached to an HTMLElement',
      )
    }

    const editorElement = createEditorElement()

    element.innerHTML = editorElement.outerHTML

    const instance = {
      element: editorElement,
      content: editorElement.innerHTML,
      input: input(element),
    }

    resolve(instance)
  })
}

function createEditorElement(): HTMLElement {
  const editorElement = document.createElement('div')
  editorElement.setAttribute('contenteditable', 'true')
  editorElement.classList.add('skrift_editor')

  return editorElement
}

function input(element: HTMLElement) {
  return (action: TypeAction) => {
    element.addEventListener('input', (event: Event) => {
      const target = event.target as HTMLElement

      action(target.innerHTML)
    })
  }
}

export { create }
