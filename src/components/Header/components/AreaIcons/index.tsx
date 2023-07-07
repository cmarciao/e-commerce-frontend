import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";

import {
    HiLogout,
    HiOutlineShoppingCart,
    HiShoppingCart
} from "react-icons/hi";

import { Container } from "./styles";
import { Modal } from "../../../Modal";
import { useState } from "react";

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
            
            <button onClick={handleOpenLogoutModal}>
                <HiLogout size="1.5rem" />
                <p>LOGOUT</p>
            </button>

            <Modal
                title="Você deseja fazer logout?"
                isVisible={isLogoutModalOpen}
                isLoading={false}
                confirmLabel="Sair"
                cancelLabel="Cancelar"
                onConfirm={onLogout}
                onCancel={handleCloseLogoutModal}
            >
                <p>Sua sessão será encerrada e você irá retornar para página de login.</p>
            </Modal>
        </Container>
    );
}