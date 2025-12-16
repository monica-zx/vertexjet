import { HomepageACF } from "@/lib/types";
import './banner.css';

interface Props {
  data: HomepageACF;
}
export default function HeroBanner({ data }: Props)  {
  return (
    <section
      className="bg-cover bg-center py-50"
      style={{ backgroundImage: `url(${data.banner_background?.url || ''})` }}
    >
      <div className="banner-overlay" >
        <div className="text-center text-white container" >
        <h1 className="text-4xl font-bold">{data.banner_title}</h1>
        <p className="text-lg mt-2">{data.banner_subtitle}</p>
      </div>
      </div>
    </section>
  );
}
