const Heading = ({tittle, subTittle}) => {
    return (
        <div className="bg-[#9538E2] text-white h-[350px] rounded-2xl px-3">

        <div className="flex flex-col items-center justify-center space-y-7 pt-20">
        <h1 className="text-3xl lg:text-4xl md:text-5xl font-bold text-center">{tittle}</h1>
         <p className="text-base font-normal text-center text-warp">{subTittle}</p>
        </div>

        </div>

    );
};

export default Heading;