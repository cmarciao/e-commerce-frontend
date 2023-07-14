import Purchase from "../../types/Purchase";

import { formatDate } from "../../utils/formatDate";
import { formatCurrency } from "../../utils/formatCurrency";

import { LeftArea } from "./LeftArea";
import { Container } from "./styles";

interface PurchaseItemProps {
    purchase: Purchase;
}

export function PurchaseItem({ purchase }: PurchaseItemProps) {
    const hasOneItem = purchase.products.length === 1;
    const purchaseName = 
        hasOneItem 
        ? `${purchase.products[0].name} ${purchase.amount > 1 ? `(${purchase.amount})x` : ''}`
        : `${purchase.products[0].name} e mais ${purchase.products.length - 1}...`;

    return (
        <Container>
            <LeftArea
                url_photo={purchase.products[0].url_photo}
                name={purchaseName}
            />

            <span>
                <strong>Total: </strong>
                {formatCurrency(purchase.price)}
            </span>

            <span>
                <strong>Data: </strong>
                {formatDate(purchase.finished_at)}
            </span>
        </Container>
    );
}