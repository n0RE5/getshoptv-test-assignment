import { useEffect, useState } from "react"

export const useArrowNavigation = (selector: string) => {
    const buttons = [...document.querySelectorAll(selector)]
    const [currentIndex, setCurrentIndex] = useState(0)

    const focusButton = (index: number) => {
        if (buttons[index] instanceof HTMLButtonElement) {
            (buttons[index] as HTMLButtonElement).focus()
        }
    }

    const listener = (event: KeyboardEvent) => {
        const nextIndex = (currentIndex + 1) % buttons.length || 1 // Getting rid of async setState problems
        const prevIndex = currentIndex - 1
        if (event.key === 'ArrowLeft') {
            if (currentIndex > 0) {
                setCurrentIndex(prevIndex)
                focusButton(prevIndex)
            } else {
                focusButton(buttons.length - 1)
                setCurrentIndex(buttons.length - 1)
            }
        }
        if (event.key === 'ArrowRight') {
            setCurrentIndex(nextIndex)
            focusButton(nextIndex)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', listener)
        return () => {
            document.removeEventListener('keydown', listener)
        }
    })
}