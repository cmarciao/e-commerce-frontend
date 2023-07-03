import { InfoUser } from "./components/InfoUser";
import { AreaIcons } from "./components/AreaIcons";

import { useHeader } from "./useHeader";

import {
    Container,
    Content,
    ItemInput
} from "./styles";

interface HeaderProps {
    page: string;
    onSearchProduct: (filter: string) => void;
};

export function Header({ page, onSearchProduct }: HeaderProps) {
    const {
        isNameLoading,
        formatedName,
        handleLogOut
    } = useHeader();

    if(isNameLoading) return null;

    return (
        <Container>
            <Content>
                <InfoUser formatedName={formatedName} />

                <ItemInput>
                    <input
                        type="text"
                        placeholder="Pesquise o seu produto"
                        onChange={(e) => onSearchProduct(e.target.value)}
                    />
                </ItemInput>

                <AreaIcons
                    page={page}
                    onLogout={handleLogOut}
                />
            </Content>
        </Container>
    );
};