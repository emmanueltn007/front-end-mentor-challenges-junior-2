import icons from "../utilities/iconsData";

function FilesCard () {
  return (
    <div className="bg-[hsl(228,56%,26%)] flex flex-col gap-8 py-8 pl-8 pr-32 rounded-bl-md rounded-b-md rounded-tl-md rounded-tr-[128px]">
      <img 
        className="w-28"
        src="/images/logo.svg" 
        alt="Fylo logo image" 
      />
      <div className="flex gap-4">
        {icons.map((icon, index) => {
          return (
            <div 
              className="bg-[hsl(229,57%,11%)] flex p-2 h-8 w-8 m-auto rounded-md"
              key={`${icon.iconName}-${index}`} 
            >
              <img 
                className="object-contain"
                src={icon.icon} 
                alt={icon.iconName} 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilesCard