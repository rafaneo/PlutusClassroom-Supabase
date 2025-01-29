"use client";

import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { shuffle } from "fast-shuffle";
import { TModularDragNDropOrder } from "@/shared/types";

type TDragNDropOrderProps = TModularDragNDropOrder["value"] & {
  onChange: (v: boolean) => void;
};

export default function DragNDropOrder({
  cards,
  instruction,
  onChange,
}: TDragNDropOrderProps) {
  const [orderedOptions, setOrderedOptions] = useState(shuffle(cards));
  useEffect(() => {
    const isValid = orderedOptions.every((v, i) => v.correct_order === i + 1);
    onChange(isValid);
  }, [orderedOptions]);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const newItems = Array.from(orderedOptions);
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);

    setOrderedOptions(newItems);
  };
  console.log({ instruction });

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-xl font-bold text-gray-900">{instruction}</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              className="w-full"
              ref={provided.innerRef}
            >
              {orderedOptions.map((item, index) => (
                <Draggable
                  key={item.card_text}
                  draggableId={item.card_text}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="w-full h-[55px] rounded-[10px] p-4 mb-[10px] bg-[#F4FBFF] text-[#052240] inline-flex justify-between items-center"
                    >
                      {item.card_text}
                      <EllipsisHorizontalIcon className="h-8 w-8" />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export const getDragNDropOrderString = (
  options: { value: string; label: string }[]
) => {
  return options.map((option) => option.value).join(",");
};
