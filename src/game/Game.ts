import * as ex from 'excalibur';
import { Resources } from './resources'; // ตรวจสอบว่าทรัพยากรถูกต้อง
import { Level } from './level';

export class Game {
  private engine: ex.Engine;

  constructor() {
    this.engine = new ex.Engine({
      width: 400,
      height: 500,
      backgroundColor: ex.Color.fromHex("#54C0CA"),
      pixelArt: true,
      pixelRatio: 2,
      displayMode: ex.DisplayMode.Fixed,
    });
  }

  start(container: HTMLElement) {
    // ใช้ canvas ที่มีอยู่แล้วใน container
    const canvas = container.querySelector('canvas');
    if (canvas) {
      // ตั้งค่าของ engine ให้ใช้ canvas ที่มีอยู่
      this.engine.canvas = canvas;
    } else {
      console.error("Canvas not found in container");
    }

    // สร้าง Loader สำหรับโหลดทรัพยากร
    const loader = new ex.Loader(Object.values(Resources));

    // เริ่มโหลดทรัพยากร
    this.engine.start(loader).then(() => {
      console.log("ทรัพยากรโหลดเสร็จแล้ว");
      this.engine.add('Level', new Level());
      this.engine.goToScene('Level');
    });
  }
}
