import React, { useEffect, useRef } from 'react';
import { Game } from '../game/Game';

const GameCanvas: React.FC = () => {
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<Game | null>(null); // ใช้ ref เพื่อตรวจสอบว่าเกมเริ่มแล้ว

  useEffect(() => {
    console.log("GameCanvas mounted: Creating canvas");

    if (gameContainerRef.current && !gameRef.current) {
      // สร้างและเริ่มเกมแค่ครั้งเดียว
      gameRef.current = new Game();
      gameRef.current.start(gameContainerRef.current); // ส่ง div ที่จะเป็น container ให้กับเกม
    }
  }, []); // ใช้แค่ครั้งเดียวเมื่อ component ถูก mount

  return (
    <div
      id="game-container"
      ref={gameContainerRef}
    >
      {/* Canvas ถูกเพิ่มจากการสร้างใน Game.ts */}
    </div>
  );
};

export default GameCanvas;
