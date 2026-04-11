function FilesCard () {
  return (
    <div className="bg-[hsl(228,56%,26%)] flex flex-col gap-4 py-8 pl-8 pr-32 rounded-bl-md rounded-b-md rounded-tl-md rounded-tr-[64px]">
      <img 
        className="w-32"
        src="/images/logo.svg" 
        alt="Fylo logo image" 
      />
      <div className="flex gap-4">
        <img src="/images/icon-document.svg" alt="Document icon" />
        <img src="/images/icon-folder.svg" alt="Folder icon" />
        <img src="/images/icon-upload.svg" alt="Upload icon" />
      </div>
    </div>
  );
}

export default FilesCard