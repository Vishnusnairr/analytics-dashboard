import { useState, useRef, useEffect } from 'react';

export default function DraggableWidget({ id, children, className = '', onPositionChange }) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const widgetRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const newPosition = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y
    };
    
    setPosition(newPosition);
    
    if (onPositionChange) {
      onPositionChange(id, newPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset]);

  return (
    <div
      ref={widgetRef}
      className={`absolute ${className} ${isDragging ? 'cursor-grabbing z-50' : 'cursor-grab'}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div 
        className="bg-gray-200 dark:bg-gray-700 h-6 flex items-center px-2 rounded-t-lg cursor-grab"
        onMouseDown={handleMouseDown}
      >
        <div className="flex space-x-1">
          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        </div>
        <span className="text-xs text-gray-600 dark:text-gray-300 ml-2">Drag me</span>
      </div>
      <div className="widget rounded-t-none">
        {children}
      </div>
    </div>
  );
}