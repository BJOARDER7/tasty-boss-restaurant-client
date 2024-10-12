import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";




const Featured = () => {
    return (
        <section className="featuredImage bg-fixed text-white pt-4 my-8 md:my-16">
            <SectionTitle
            subHeading={"Check it out"}
            heading={"Featured Item"}
            ></SectionTitle>
            <div className="flex justify-center items-center bg-slate-500 bg-opacity-40 pb-12 md:pb-24 pt-8 md:pt-12 px-4 md:px-36">
                <div className="w-2/3">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="ml-4 md:ml-10 space-y-2">
                    <p>Sept 20, 2024</p>
                    <h3 className="uppercase">Where can get some?</h3>
                    <p className="text-justify">Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential nutrients</p>
                    <button className="btn btn-outline border-0 border-b-4">Order now</button>
                </div>
            </div>
            
        </section>
    );
};

export default Featured;