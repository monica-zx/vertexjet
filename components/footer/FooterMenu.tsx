import { FooterState } from "@/store/slices/footerSlice";
import './footer.css';


interface Props {
  data: FooterState;
  logo?: string;
}

export default function FooterMenu({ data,logo }: Props)  {
     if (!data) return null;
  return (
      <div className=" text-white flex gap-3 flex-col">
        <div className="max-w-[1000px] mx-auto flex gap-3 justify-between pb-8 w-full">
        <div className="logo-txt">
            <img src={logo} alt="Logo" className="mb-[15px]" />
            <p>{data.logo_tag_line}</p>
        </div>
        <div className="flex flex-col justify-end news-txt"
          dangerouslySetInnerHTML={{
            __html: data.newsletter_short_des ?? ""
          }}
        />
        </div>
        <div className="container  bg-(--ligher-blue) py-8">
          <div className="flex justify-between max-w-[1000px] mx-auto">
            <div
          dangerouslySetInnerHTML={{
            __html: data.quick_links ?? ""
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: data.destination_links ?? ""
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: data.connect_text ?? ""
          }}
        />
          </div>
        </div>
        <div className="pt-8 text-center"
          dangerouslySetInnerHTML={{
            __html: data.copyright_text ?? ""
          }}
        />
      </div>
  );
}

