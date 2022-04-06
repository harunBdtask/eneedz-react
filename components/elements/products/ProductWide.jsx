import Link from "next/link";
import React from "react";
import ModuleProductWideActions from "~/components/elements/products/modules/ModuleProductWideActions";
import useProduct from "~/hooks/useProduct";

const ProductWide = ({ product }) => {
  const { thumbnailImage, price, title, badge } = useProduct();
  return (
    <div className="ps-product ps-product--wide">
      <div className="ps-product__thumbnail">
        <Link
          href="/product/[pid]"
          as={`/product/${product.product_id}-${product.campaign_id}`}
        >
          <a>{thumbnailImage(product)}</a>
        </Link>
      </div>
      <div className="ps-product__container">
        <div className="ps-product__content">
          {title(product)}
          {product?.seller_id && (
            <p className="ps-product__vendor">
              <b>Sold by:</b>{" "}
              <Link href={`/brands/${product.seller_id}`}>
                <a>{product.seller_store_name}</a>
              </Link>
            </p>
          )}
          <ul className="ps-product__desc">
            <li>Unrestrained and portable active stereo speaker</li>
            <li> Free from the confines of wires and chords</li>
            <li> 20 hours of portable capabilities</li>
            <li>Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
            <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
          </ul>
        </div>
        <ModuleProductWideActions product={product} />
      </div>
    </div>
  );
};

export default ProductWide;