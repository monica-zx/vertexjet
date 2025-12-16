import { HomepageACF } from "@/lib/types";
import './banner.css';

interface Props {
  data: HomepageACF;
}
export default function HeroBanner({ data }: Props)  {
  return (
    <section
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${data.banner_background?.url || ''})` }}
    >
      <div className="banner-overlay py-50" >
        <div className=" text-white container" >
        <h1 className="font-bold max-w-[500px]">{data.banner_title}</h1>
        <p className="text-lg mt-2">{data.banner_subtitle}</p>
      </div>
      </div>
    </section>
  );
}
