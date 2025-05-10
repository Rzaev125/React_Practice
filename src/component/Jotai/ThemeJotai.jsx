import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils";

const theme = atomWithStorage('light')

export default function ThemeJotai() {
    const [appTheme, setAppTheme] = useAtom(theme);
    const handleClick = () => setAppTheme(appTheme === 'light' ? 'dark' : 'light')
    return (
        <div className={appTheme}>
          <h1>This is a theme switcher</h1>
          <button onClick={handleClick}>{appTheme === 'light'? 'DARK': 'LIGHT'}</button>
        </div>
      )
}