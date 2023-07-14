import { useState } from "react";
import { Link } from "react-router-dom";

import { RiStore2Fill, RiStore2Line } from "react-icons/ri";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import {
    HiLogout,
    HiOutlineShoppingCart,
    HiShoppingCart
} from "react-icons/hi";

import { Modal } from "../../../Modal";

import { Container } from "./styles";

interface AreaIconsProps {
    page: string;
    onLogout: () => void;
}

export function AreaIcons({ page, onLogout }: AreaIconsProps) {
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

    function handleOpenLogoutModal() {
        setIsLogoutModalOpen(true);
    }

    function handleCloseLogoutModal() {
        setIsLogoutModalOpen(false);
    }

    return (
        <Container>
            <Link to="/products">
                {page === "products" && <RiStore2Fill size="1.5rem" />}
                {page !== "products" && <RiStore2Line size="1.5rem" />}

                {page === "products" && <strong>PRODUCTS</strong>}
                {page !== "products" && <p>PRODUCTS</p>}
            </Link>

            <Link to="/cart">
                {page === "cart" && <HiShoppingCart size="1.5rem" />}
                {page !== "cart" && <HiOutlineShoppingCart size="1.5rem" />}

                {page === "cart" && <strong>MY CART</strong>}
                {page !== "cart" && <p>MY CART</p>}
            </Link>

            <Link to="/purchases">
                {page === "purchases" && <AiFillHome size="1.5rem" />}
                {page !== "purchases" && <AiOutlineHome size="1.5rem" />}

                {page === "purchases" && <strong>PURCHASES</strong>}
                {page !== "purchases" && <p>PURCHASES</p>}
            </Link>
            
            <button onClick={handleOpenLogoutModal}>
                <HiLogout size="1.5rem" />
                <p>LOGOUT</p>
            </button>

            <Modal
                title="Do you want to log out?"
                isVisible={isLogoutModalOpen}
                isLoading={false}
                confirmLabel="Exit"
                cancelLabel="Cancel"
                onConfirm={onLogout}
                onCancel={handleCloseLogoutModal}
            >
                <p>Your session will be closed and you will return to the login page.</p>
            </Modal>
        </Container>
    );
}