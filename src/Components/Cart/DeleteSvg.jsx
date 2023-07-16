import Svg, {Circle, Path} from "react-native-svg";

export const DeleteSvg = () => {
    return (
        <Svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="8" cy="8" r="8" fill="#C4C4C4"></Circle>
            <Path d="M5.277 4.57a.5.5 0 0 0-.707.707l.707-.707Zm5.446 6.86a.5.5 0 0 0 .707-.707l-.707.707Zm.707-6.153a.5.5 0 1 0-.707-.707l.707.707Zm-6.86 5.446a.5.5 0 1 0 .707.707l-.707-.707Zm0-5.446 6.153 6.154.707-.708L5.278 4.57l-.707.707Zm6.153-.707L4.57 10.723l.707.707 6.154-6.153-.708-.707Z" fill="#fff"></Path>
        </Svg>
    )
}