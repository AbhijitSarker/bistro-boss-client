
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center text-lg mx-auto md:w-4/12 my-8">
            <p className="text-yellow-600 italic">--- {subHeading} ---</p>
            <h3 className="text-4xl py-2 uppercase text-black border-y-2 border-gray-400">{heading}</h3>
        </div>
    );
};

export default SectionTitle;