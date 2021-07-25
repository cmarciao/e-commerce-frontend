import React from "react";

import { FaUserCircle } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { IoLogOutSharp } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";

import User from "../../models/User";

import { Container, InfoUser, ItemInput, AreaIcons } from "./styles";
import Button from "../Button";
import { Link, useHistory } from "react-router-dom";

type HeaderProps = {
    page: string;
};

const Header: React.FC<HeaderProps> = ({ page }) => {
    const history = useHistory();
    const user: User = JSON.parse(localStorage.getItem("logged") || "{}");

    if (user.name == null) {
        history.push("/");
    }

    function handleLogOut() {
        localStorage.setItem("logged", "-1");
        history.push("/");
    }

    return (
        <Container>
            <InfoUser>
                <FaUserCircle size="3rem" />
                <h3>{user.name}</h3>
            </InfoUser>

            <ItemInput>
                <input
                    type="text"
                    placeholder="Pesquise aqui o nome do seu produto..."
                />
                <div>
                    <Button title="Buscar" />
                </div>
            </ItemInput>

            <AreaIcons>
                <button>
                    <Link to="/">
                        <AiFillHome size="2rem" />
                        {page === "cart" ? (
                            <p>HOME</p>
                        ) : (
                            <p>
                                <strong>HOME</strong>
                            </p>
                        )}
                    </Link>
                </button>
                <button>
                    <Link to="my-cart">
                        <HiShoppingCart size="2rem" />

                        {page === "home" ? (
                            <p>MYCART</p>
                        ) : (
                            <p>
                                <strong>MYCART</strong>
                            </p>
                        )}
                    </Link>
                </button>
                <button>
                    <IoLogOutSharp size="2rem" onClick={handleLogOut} />
                    <p>LOGOUT</p>
                </button>
            </AreaIcons>
        </Container>
    );
};

export default Header;
