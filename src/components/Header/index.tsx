import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { FaUserCircle } from "react-icons/fa";
import { HiShoppingCart, HiOutlineShoppingCart } from "react-icons/hi";
import { HiLogout } from "react-icons/hi";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";

import { useAuth } from "../../hooks/useAuth";

import {
    Container,
    Content,
    InfoUser,
    ItemInput,
    AreaIcons
} from "./styles";

interface HeaderProps {
    page: string;
    onSearchProduct: (filter: string) => void;
};

export function Header({ page, onSearchProduct }: HeaderProps) {
    const navigate = useNavigate();
    const { loadMe, formatedName } = useAuth();
    const [isNameLoading, setIsNameLoading] = useState(true);

    
    useEffect(() => {
        async function load() {
            setIsNameLoading(true);
            await loadMe();
            setIsNameLoading(false);
        }

        load();
    }, [loadMe]);

    function handleLogOut() {
        Cookies.remove('token')
        navigate("/");
    }

    if(isNameLoading) return null;

    return (
        <Container>
            <Content>
                <InfoUser>
                    <FaUserCircle size="2.5rem" />
                    <h3>{formatedName}</h3>
                </InfoUser>

                <ItemInput>
                    <input
                        type="text"
                        placeholder="Pesquise o seu produto"
                        onChange={(e) => onSearchProduct(e.target.value)}
                    />
                </ItemInput>

                <AreaIcons>
                    <Link to="/home">
                        {page === "home" && <AiFillHome size="1.5rem" />}
                        {page !== "home" && <AiOutlineHome size="1.5rem" />}

                        {page === "home" && <strong>HOME</strong>}
                        {page !== "home" && <p>HOME</p>}
                    </Link>

                    <Link to="/cart">
                        {page === "cart" && <HiShoppingCart size="1.5rem" />}
                        {page !== "cart" && <HiOutlineShoppingCart size="1.5rem" />}

                        {page === "cart" && <strong>MY CARTS</strong>}
                        {page !== "cart" && <p>MY CARTS</p>}
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