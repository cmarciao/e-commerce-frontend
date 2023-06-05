import React from "react";

import { FaUserCircle } from "react-icons/fa";
import { HiShoppingCart, HiOutlineShoppingCart } from "react-icons/hi";
import { HiLogout } from "react-icons/hi";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";

import { Container, Content, InfoUser, ItemInput, AreaIcons } from "./styles";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";

type HeaderProps = {
    page: string;
    name: string;
};

const Header: React.FC<HeaderProps> = ({ page, name }) => {
    const navigate = useNavigate();

    function handleLogOut() {
        localStorage.setItem("logged", "-1");
        navigate("/");
    }

    return (
        <Container>
            <Content>
                <InfoUser>
                    <FaUserCircle size="2.5rem" />
                    <h3>{name}</h3>
                </InfoUser>

                <ItemInput>
                    <input
                        type="text"
                        placeholder="Pesquise o seu produto"
                    />
                    <div>
                        <Button title="Buscar" handleAction={() => {}}/>
                    </div>
                </ItemInput>

                <AreaIcons>
                    <Link to="/home">
                        {page === "home" && <AiFillHome size="1.5rem" />}
                        {page !== "home" && <AiOutlineHome size="1.5rem" />}

                        {page === "home" && <strong>HOME</strong>}
                        {page !== "home" && <p>HOME</p>}
                    </Link>

                    <Link to="/my-carts">
                        {page === "my-carts" && <HiShoppingCart size="1.5rem" />}
                        {page !== "my-carts" && <HiOutlineShoppingCart size="1.5rem" />}

                        {page === "my-carts" && <strong>MY CARTS</strong>}
                        {page !== "my-carts" && <p>MY CARTS</p>}
                    </Link>
                    
                    <button>
                        <HiLogout size="1.5rem" onClick={handleLogOut} />
                        <p>LOGOUT</p>
                    </button>
                </AreaIcons>
            </Content>
        </Container>
    );
};

export default Header;
