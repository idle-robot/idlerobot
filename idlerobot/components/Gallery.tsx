import React from 'react';
import { cloudinaryTagged } from '@/lib/cloudinary';

export default async function Gallery({ tags }: { tags: string[] }) {
  const lists = await Promise.all(tags.map(t => cloudinaryTagged(t)));
  const items = lists.flat();
  if (!items.length) return null;
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(img => (
        <img
          key={img.public_id}
          src={`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/${img.public_id}.${img.format}`}
          alt={img.public_id}
          loading="lazy"
          className="rounded-2xl border"
        />
      ))}
    </div>
  );
}
