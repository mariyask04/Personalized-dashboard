"use client";

import {
  useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import ContentCard from "@/components/ui/ContentCard";

interface Props {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
  };
}

export default function SortableCard({
  item,
}: Props) {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: item.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <ContentCard
        id={item.id}
        title={item.title}
        description={item.description}
        image={item.image}
        category={item.category}
      />
    </div>
  );
}