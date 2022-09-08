export default function NavigationBar(){
    const styleNavbar = {
        backgroundColor: "#F9F7F7"
    }

    const textPrimary = {
        color: "#112D4E"
    }

    const textSecondary = {
        color: "#3F72AF"
    }

    return (
        <nav class="navbar navbar-expand-lg fixed-top" style={styleNavbar}>
            <div class="container-fluid">
                <a class="navbar-brand" href="#home" style={textPrimary}>My Portfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav align-items-center">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#home" style={textSecondary}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#education" style={textSecondary}>Education</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#work" style={textSecondary}>Work</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#project" style={textSecondary}>Project</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about" style={textSecondary}>About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}