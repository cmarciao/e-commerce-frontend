import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";

import {
    HiLogout,
    HiOutlineShoppingCart,
    HiShoppingCart
} from "react-icons/hi";

import { Container } from "./styles";

interface AreaIconsProps {
    page: string;
    onLogout: () => void;
}

export function AreaIcons({ page, onLogout }: AreaIconsProps) {
    return (
        <Container>
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
                <HiLogout size="1.5rem" onClick={onLogout} />
                <p>LOGOUT</p>
            </button>
        </Container>
    );
}