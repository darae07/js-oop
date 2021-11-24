const { File, Folder } = require("./fileSystem");

class CompositePattern {
  constructor() {
    this.shcoolFolder = new Folder("학교");

    this.grade1Folder = new Folder("1학년");
    this.grade2Folder = new Folder("2학년");

    this.shcoolFolder.add(this.grade1Folder);
    this.shcoolFolder.add(this.grade2Folder);

    this.enterPhoto = new File("입학사진", 256);
    this.grade1Folder.add(this.enterPhoto);

    this.sem1Folder = new Folder("1학기");
    this.sem2Folder = new Folder("2학기");

    this.grade2Folder.add(this.sem1Folder);
    this.grade2Folder.add(this.sem2Folder);

    this.lecturePlan = new File("강의계획서", 120);
    this.sem1Folder.add(this.lecturePlan);

    this.projectFolder = new Folder("프로젝트");
    this.sem2Folder.add(this.projectFolder);

    this.draft = new File("드래프트", 488);
    this.finalResult = new File("결과물", 560);

    this.projectFolder.add(this.draft);
    this.projectFolder.add(this.finalResult);

    this.shcoolFolder.getSize();
    this.shcoolFolder.remove();
  }
}

const compositePattern = new CompositePattern();
