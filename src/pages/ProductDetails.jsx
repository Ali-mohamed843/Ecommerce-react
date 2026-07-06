import { useParams } from "react-router-dom";
import { getAllProducts, getProductById } from "../services/product-services";
import Breadcrumbs from "../components/UI/Breadcrumbs";
import ProductDetailsHero from "../components/ProductDetails/ProductDetailsHero";
import Accordion from "../components/UI/Accordion";
import CompleteTheLook from "../components/ProductDetails/CompleteTheLook";

export default function ProductDetails() {
  const { id } = useParams();

  const product = getProductById(id);
  const products = getAllProducts(id);

  const relatedProducts = products.slice(0, 4);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    {
      label: product.category,
      href: `/category/${product.category.toLowerCase()}`,
    },
    { label: product.name },
  ];

  return (
    <main className="bg-white pt-8 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Breadcrumbs items={breadcrumbItems} />

        <ProductDetailsHero />

        <Accordion title="Material & Care">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                Material Composition
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                {product.materialAndCare.material.map(
                  (materialPoint, index) => (
                    <li key={index}>{materialPoint}</li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                Care Instructions
              </h4>
              <ul className="list-disc pl-5 space-y-1">
                {product.materialAndCare.care.map((carePoint, index) => (
                  <li key={index}>{carePoint}</li>
                ))}
              </ul>
            </div>
          </div>
        </Accordion>

        <CompleteTheLook
          products={relatedProducts}
          title="Complete the Look"
          subtitle="Curated essentials that pair perfectly with this piece."
          viewAllHref={`/category/${product.category.toLowerCase()}`}
          onProductClick={(id) => console.log(`Navigate to product: ${id}`)}
        />
      </div>
    </main>
  );
}
