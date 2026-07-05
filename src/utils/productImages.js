const images = {
  "merino-wool-overcoat": "https://images.unsplash.com/photo-1537052780863-6160ff25618c?w=600&q=80",
  "slim-fit-wool-trousers": "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
  "essential-oxford-shirt": "https://images.unsplash.com/photo-1562755339-620b6d0640c3?w=600&q=80",
  "italian-leather-chelsea-boots": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
  "ribbed-cashmere-scarf": "https://images.unsplash.com/photo-1520903920243-00d872a2d2c2?w=600&q=80",
  "aero-leather-backpack": "https://images.unsplash.com/photo-1551677399-f38a96cd1bc7?w=600&q=80",
  "maritime-chronograph": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
  "pure-cashmere-crewneck": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
  "amber-glass-orbit-lamp": "https://images.unsplash.com/photo-1599653675774-d15cee6b7ada?w=600&q=80",
};

export function getProductImage(product) {
  return images[product.id] || product.image || product.images?.[0] || `https://picsum.photos/seed/${product.id}/400/600`;
}
