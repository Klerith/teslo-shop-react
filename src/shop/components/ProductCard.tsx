import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Size } from '@/interfaces/product.interface';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  sizes: Size[];
}

export const ProductCard = ({
  name,
  price,
  image,
  category,
  sizes,
}: ProductCardProps) => {
  return (
    <Card className="group border-0 shadow-none product-card-hover cursor-pointer">
      <CardContent className="p-0">
        <div className="relative aspect-square overflow-hidden bg-muted rounded-lg">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="image-overlay" />
        </div>

        <div className="pt-6 px-4 pb-4 space-y-3">
          <div className="space-y-1">
            <h3 className="font-medium text-sm tracking-tight">{name}</h3>
            <p className="text-xs text-muted-foreground uppercase">
              {category} - <span className="font-bold">{sizes.join(', ')}</span>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="font-semibold text-lg">${price}</p>
            <Button
              size="sm"
              variant="outline"
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground border-primary/20 text-xs px-4 py-2 h-8"
            >
              Agregar al carrito
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
