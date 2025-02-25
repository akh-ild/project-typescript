abstract class TakePhoto { // abstract classes only for extends
  constructor(
    public cameraMode: string,
    public filter: string,
  ){}
  abstract getSepia(): void
}

class Facebook extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,) {
      super(cameraMode, filter);
    }
    getSepia(): void {
      // sepia
    }
}

const il = new Facebook('test', 'test', 3);
