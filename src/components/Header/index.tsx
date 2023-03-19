import React from "react";

import { FaUserCircle } from "react-icons/fa";
import { HiShoppingCart, HiOutlineShoppingCart } from "react-icons/hi";
import { HiLogout } from "react-icons/hi";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";

import User from "../../models/User";

import { Container, Content, InfoUser, ItemInput, AreaIcons } from "./styles";
import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";

type HeaderProps = {
    page: string;
};

const Header: React.FC<HeaderProps> = ({ page }) => {
    const navigate = useNavigate();
    const user: User = JSON.parse(localStorage.getItem("logged") || "{}");

    if (user.name == null) {
        navigate("/");
    }

    function handleLogOut() {
        localStorage.setItem("logged", "-1");
        navigate("/");
    }

    return (
        <Container>
            <Content>
                <InfoUser>
                    <FaUserCircle size="2.5rem" />
                    <h3>{user.name}</h3>
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
                    <button>
                        <Link to="/home">
                            {page === "home" ? (
                                <>
                                    <AiFillHome size="1.5rem" />
                                    <p>
                                        <strong>HOME</strong>
                                    </p>
                                </>
                                ) : (
                                    <>
                                        <AiOutlineHome size="1.5rem" />
                                        <p>HOME</p>
                                    </>
                            )}
                        </Link>
                    </button>
                    <button>
                        <Link to="/my-cart">
                            {page === "my-carts" ? (
                                <>
                                    <HiShoppingCart size="1.5rem" />
                                    <p>
                                        <strong>MY CART</strong>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <HiOutlineShoppingCart size="1.5rem" />
                                    <p>MY CART</p>
                                </>
                            )}
                        </Link>
                    </button>
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
