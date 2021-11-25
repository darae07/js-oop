class FileSystem {
  getSize() {}
  remove() {}
}

class File extends FileSystem {
  constructor(name, size) {
    super();
    this.name = name;
    this.size = size;
  }

  getSize() {
    console.log(this.name + " 파일 크기 : " + this.size);
    return this.size;
  }

  remove() {
    console.log(this.name + " 파일 삭제");
  }
}

class Folder extends FileSystem {
  constructor(name) {
    super();
    this.name = name;
    this.includeds = [];
  }

  add(fileSystem) {
    this.includeds.push(fileSystem);
  }

  getSize() {
    let total = 0;
    this.includeds.forEach((included) => (total += included.getSize()));
    console.log(this.name + "폴더 크기 : " + total);
    console.log("-------");
    return total;
  }

  remove() {
    this.includeds.forEach((included) => included.remove());
    console.log(this.name + "폴더 삭제");
    console.log("-------");
  }
}

exports.File = File;
exports.Folder = Folder;
