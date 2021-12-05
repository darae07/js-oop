import {FileItem, FolderItem} from './fileSystem'

class CompositePattern {
  constructor(){
    const shcoolFolder = new FolderItem('학교')

    const grade1Folder = new FolderItem('1학년')
    const grade2Folder = new FolderItem('2학년')

    shcoolFolder.add(grade1Folder)
    shcoolFolder.add(grade2Folder)

    const enterPhoto = new FileItem('입학사진', 256)
    grade1Folder.add(enterPhoto)

    const sem1Folder = new FolderItem('1학기')
    const sem2Folder = new FolderItem('2학기')

    grade2Folder.add(sem1Folder)
    grade2Folder.add(sem2Folder)

    const lecturePlan = new FileItem('강의계획서', 120)
    sem1Folder.add(lecturePlan)

    const projFolder = new FolderItem('프로젝트')
    sem2Folder.add(projFolder)

    const draft = new FileItem('드래프트', 488)
    const finalResult = new FileItem('결과물', 568)

    projFolder.add(draft)
    projFolder.add(finalResult)

    shcoolFolder.getSize()
    shcoolFolder.remove()
  }
}

const compositePattern = new CompositePattern()