import { FooterState } from "@/store/slices/footerSlice";


interface Props {
  data: FooterState;
  logo?: string;
}

export default function HeaderCTAs({ data,logo }: Props)  {
     if (!data) return null;
  return (
      <div className="text-center text-white flex gap-3 flex-col">
        <div className="max-w-[1000px] mx-auto flex gap-3 justify-between">
        <div >
            <img src={logo} alt="Logo" />
            <p>{data.logo_tag_line}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.newsletter_short_des ?? ""
          }}
        />
        </div>
        <div className="container flex justify-between">
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
        <div className=""
          dangerouslySetInnerHTML={{
            __html: data.copyright_text ?? ""
          }}
        />
      </div>
  );
}

