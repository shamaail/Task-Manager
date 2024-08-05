import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

function Columns({ title, tasks = [] }) {
  return (
    <div className="h-screen min-w-[250px] bg-gray-200 p-4 m-2 border rounded-xl">
      <p className="text-xl font-medium mb-4">{title}</p>
      <ul>
        {tasks.slice(0, 6).map((task, index) => (
          <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
            {(provided) => (
              <div
                className="bg-white border rounded-lg shadow-md p-3 mb-4"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <h2 className="text-xl font-semibold mb-2">{task.name}</h2>
                <p className="text-gray-600">{task.due_date}</p>
              </div>
            )}
          </Draggable>
        ))}
      </ul>
    </div>
  );
}

export default Columns;
