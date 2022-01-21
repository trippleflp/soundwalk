import { getSoundData } from './http-calls';
import { Sound } from './types';

class Store {
  currentId: number;

  data: Sound[] = [];

  private resolveIsDone!: (value?: unknown) => void;

  private isDone = new Promise((resolve) => {
    this.resolveIsDone = resolve;
  });

  constructor() {
    const id = localStorage.getItem('currentId');
    if (id === null) {
      localStorage.setItem('currentId', '0');
    }
    this.currentId = (() => (id ? parseInt(id, 10) : 0))();
    this.fillData();
  }

  private async fillData(): Promise<void> {
    const length = this.currentId > 8 ? 8 : this.currentId;
    this.data = await Promise.all([
      ...Array.from({ length: length === 9 ? length : length + 1 }, (_, i) => i).map(getSoundData),
    ]);
    this.resolveIsDone();
  }

  raiseCurrentId() {
    localStorage.setItem('currentId', (this.currentId + 1).toString());
    const id = localStorage.getItem('currentId');
    this.currentId = (() => (id ? parseInt(id, 10) : 0))();
    return this.fillData();
  }

  async waitDone(): Promise<null> {
    return new Promise((resolve) => {
      this.isDone.then(() => resolve(null));
    });
  }
}

const State = new Store();
export default State;
