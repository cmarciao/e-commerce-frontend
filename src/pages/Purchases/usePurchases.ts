import { useCallback, useEffect, useState } from "react";
import PurchaseService from "../../services/PurchaseService";
import Purchase from "../../types/Purchase";

export function usePurchases() {
    const [isLoadingPurchases, setIsLoadingPurchases] = useState(true);
    const [purchases, setPurchases] = useState<Purchase[]>([]);
    const [filteredPurchases, setFilteredPurchases] = useState<Purchase[]>([]);

    useEffect(() => {
        async function loadPurchases() {
            try {
                setIsLoadingPurchases(true);
                const response = await PurchaseService.listPurchases();
                setPurchases(response);
                setFilteredPurchases(response);
            } finally {
                setIsLoadingPurchases(false);
            }
        }

        loadPurchases();
    }, []);

    const handleFilterList = useCallback((filter: string) => {
        const filteredList: Purchase[] = [];
        
        purchases.forEach(purchase => {
            for(const item of purchase.products) {
                if(item.name.includes(filter)) {
                    filteredList.push(purchase);
                    break;
                }
            };
        });

		setFilteredPurchases(filteredList);
	}, [purchases]);

    return {
        isLoadingPurchases,
        filteredPurchases,
        handleFilterList
    };
}