

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="mx-auto md:w-1/3 text-center my-8">
            <p className="text-orange-500 pb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;