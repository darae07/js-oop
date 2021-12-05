import {ModeMediator} from './modeMediator'

class ModeSwitch{
  mode: Mode = Mode.LIST
  modeMediator: ModeMediator

  public setModeMediator(modeMediator: ModeMediator):void{
    this.modeMediator = modeMediator
  }

  public toggleMode():void{
    this.mode = this.mode === Mode.LIST ? Mode.GALLERY : Mode.LIST

    if(this.modeMediator !== null){
      this.modeMediator.onModeChange(this.mode)
    }
  }
}
enum Mode {LIST, GALLERY}

export {Mode, ModeSwitch}