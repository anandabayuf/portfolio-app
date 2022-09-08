import DownIcon from "./DownIcon"

export default function Home(){
    const textPrimary = {
        color: "#112D4E"
    }

    const textSecondary = {
        color: "#3F72AF"
    }
    
    return (    
        <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center" id="home">
            <h1 style={textPrimary}>Hello! I'm Bayu</h1>
            <h4 style={textSecondary}>Welcome to my portfolio</h4>
            <DownIcon to="#education" />
        </div>
    )
}