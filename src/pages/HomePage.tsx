import DonateCard from "@/component/Shared/DonateCard";
import AboutUS from "@/component/Ui/AboutUS";
import Banner from "@/component/Ui/Banner";
import GallerySection from "@/component/Ui/GallerySection";
import ImageSection from "@/component/Ui/ImageSection";
import TestomonialSection from "@/component/Ui/TestomonialSection";
import WhoWEare from "@/component/Ui/WhoWEare";

const HomePage = () => {
   return (
      <div>
         <Banner></Banner>
         <DonateCard></DonateCard>
         <WhoWEare></WhoWEare>
         <TestomonialSection></TestomonialSection>
         <GallerySection></GallerySection>
         <AboutUS></AboutUS>
         <ImageSection></ImageSection>
      </div>
   );
};

export default HomePage;