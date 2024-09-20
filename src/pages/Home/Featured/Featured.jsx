import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";




const Featured = () => {
    return (
        <section className="featuredImage text-white pt-4 my-16">
            <SectionTitle
            subHeading={"Check it out"}
            heading={"Featured Item"}
            ></SectionTitle>
            <div className="flex justify-center items-center pb-24 pt-12 px-36">
                <div className="w-2/3">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 space-y-2">
                    <p>Sept 20, 2024</p>
                    <h3 className="uppercase">Where can get some?</h3>
                    <p className="text-justify">Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and contains essential nutrients</p>
                    <button className="btn btn-outline">Order now</button>
                </div>
            </div>
            
        </section>
    );
};

export default Featured;