import Container from "./Container";
import React from "react";
import Logo from "./Logo";

const Header = () => {
    return <div className="bg-bodyColor h-20">
        <Container>
            <Logo />
        </Container>
    </div>
}

export default Header