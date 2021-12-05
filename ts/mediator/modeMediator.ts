import {ModeListener} from './modeListener'
import { Mode } from './modeSwitch'


class ModeMediator {
  listener: ModeListener[] = []

  public addListener(listener: ModeListener){
    this.listener.push(listener)
  }

  public onModeChange(mode: Mode):void {
    this.listener.forEach(listener => {
      listener.onModeChange(mode)
    })
  }
}

export {ModeMediator}