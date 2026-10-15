import { useDispatch, useSelector } from "react-redux"
import { setToggleDarkMode } from "../appSlice"
import { Moon, Sun } from "lucide-react"

export default function DarkModeToggle() {
    const isDarkMode = useSelector((state)=>state.app.darkMode)
    const dispatch = useDispatch()
    
    return <>
        <button
    onClick={() => dispatch(setToggleDarkMode())}
    className="flex items-center justify-center p-3 rounded-full md:rounded-lg border cursor-pointer transition-all border-couleur7 text-couleur1 hover:bg-couleur1 hover:text-white dark:bg-couleur1 dark:text-white dark:border-none ease-in-out z-50
    /* Positionnement Mobile */ 
    fixed bottom-16 right-4 shadow-lg md:shadow-none
    /* Positionnement Desktop (Design d'origine conservé) */
    md:bottom-2 md:-right-8 md:hover:right-2 md:w-fit md:justify-start"
    aria-label="Toggle dark mode"
>
    <div className="shrink-0">
        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    </div>
</button>
    </>
}