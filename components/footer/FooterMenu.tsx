import { FooterState } from "@/store/slices/footerSlice";


interface Props {
  data: FooterState;
  logo?: string;
}

export default function HeaderCTAs({ data,logo }: Props)  {
     if (!data) return null;
  return (
      <div className="text-center text-white flex gap-3">
        <div className="container">
        <div >
            <img src={logo} alt="Logo" />
            <p>{data.logo_tag_line}</p>
        </div>
        <div>
            {data.newsletter_short_des}
        </div>
        </div>
        
      </div>
  );
}

