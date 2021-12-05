interface FileSystem {
  getSize():number
  remove():void
}

class FileItem implements FileSystem {
  private name: string
  private size: number

  constructor(name: string, size: number){
    this.name = name 
    this.size = size
  }

  getSize():number{
    console.log(this.name + '파일 크기: '+ this.size)
    return this.size
  }

  remove():void{
    console.log(this.name + '파일 삭제')
  }
}

class FolderItem implements FileSystem{
  private name: string
  private includeds: FileSystem[] = []

  constructor(name: string){
    this.name = name
  }

  public add(fileSystem: FileSystem):void{
    this.includeds.push(fileSystem)
  }

  public getSize():number {
    let total: number = 0
    this.includeds.forEach(included =>{
      total += included.getSize()
    })
    console.log(this.name + ' 폴더 크기: ' + total)
    console.log('--------')
    return total
  }

  public remove():void{
    this.includeds.forEach(included=>{
      included.remove()
    })
    console.log(this.name + ' 폴더 삭제')
    console.log('--------')
  }
}

export {FolderItem, FileItem}