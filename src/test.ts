interface SkriftInstance {
    element: HTMLElement,
    content: string,
    input: (action: TypeAction) => void,
}

type TypeAction = (editorContent: string) => any

const create = (element: HTMLElement): SkriftInstance => {
    if (!element) {
        throw Error('No element received, skrift instance must be attached to an HTMLElement')
    }

    const instance = { 
        element: element,
        content: element.innerHTML,
        input: input(element),
    }
    
    return instance
}

function input (element: HTMLElement) {
    return (action: TypeAction) => {
        element.addEventListener('input', (event: Event) => {
            const target = event.target as HTMLElement

            action(target.innerHTML)
        })
    }
}

export { create }