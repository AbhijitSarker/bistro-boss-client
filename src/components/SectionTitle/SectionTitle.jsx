
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center text-lg font-serif mx-auto md:w-4/12 my-8">
            <p className="text-[#DCCA87] italic">--- {subHeading} ---</p>
            <h3 className="text-4xl py-2 uppercase text-white border-y-2 border-[#DCCA87]">{heading}</h3>
        </div>
    );
};

export default SectionTitle;