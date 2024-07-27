const HeaderAuth = ({ title, label }) => {
    return (<div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-text-color-primary drop-shadow-2xl text-shadow shadow-black">
          {title}
        </h1>
      </div>

      <p className="text-text-color-primary/80 text-sm  text-shadow-sm">{label}</p>
    </div>);
};
export default HeaderAuth;
