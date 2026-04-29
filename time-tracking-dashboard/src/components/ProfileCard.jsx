function ProfileCard() {
  return (
    <div className="flex md:flex-col gap-4 md:gap-8 bg-[hsl(246,80%,60%)] rounded-2xl md:px-4 md:pt-4 md:pb-12 max-md:p-4">
      <img
        className="h-16 w-16 border border-[hsl(0,100%,100%)] rounded-full"
        src="/images/image-jeremy.png"
        alt="Jeremy's avatar"
      />
      <div>
        <p className="text-[hsl(236,100%,87%)]">Report for </p>
        <h2 className="text-2xl md:text-4xl text-[hsl(0,100%,100%)]">
          Jeremy Robson
        </h2>
      </div>
    </div>
  );
}

export default ProfileCard;
