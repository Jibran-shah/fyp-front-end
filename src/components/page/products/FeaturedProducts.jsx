import { useMarketplaceProductActions } from "../../../hooks/ui/marketplace/useMarketplaceProductActions";
import {useGetProducts} from "../../../hooks/api/products/useGetProducts"

import { Section } from "../../common/layout/Section";
import MarketplaceProductCard from "../../common/marketplace/cards/MarketplaceProductCard";
import MarketplaceGrid from "../../common/marketplace/marketplaceGrid/MarketplaceGrid";
import MarketplaceGridItem from "../../common/marketplace/marketplaceGridItem/MarketplaceGridItem";

export default function FeaturedProducts() {
  const { handleCardClick, handleAddToCart } =
    useMarketplaceProductActions();

  const { data, isLoading, isError } = useGetProducts({
    limit: 8,
    page: 1,
  });

  // backend: { success, data: [...], meta }
  const products = data?.data ?? [];

  if (isLoading) return null;
  if (isError) return null;

  return (
    <Section
      title="Featured Products"
      subtitle="Top products from trusted sellers"
    >
      <MarketplaceGrid spacing={3}>
        {products.map((product) => (
          <MarketplaceGridItem key={product._id}>
            <MarketplaceProductCard
              product={product}
              onCardClick={handleCardClick}
              onAddToCart={handleAddToCart}
            />
          </MarketplaceGridItem>
        ))}
      </MarketplaceGrid>
    </Section>
  );
}