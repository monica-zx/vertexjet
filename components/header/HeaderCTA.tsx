import { HeaderState } from "@/store/slices/headerSlice";

interface Props {
  data: HeaderState;
}

export default function HeaderCTAs({ data }: Props)  {
     if (!data) return null;
  return (
      <div className="text-center text-white flex gap-3">
        <a href={data.phone_number_link}>{data.phone_label}</a>
        <a href={data.cta_link}>{data.cta_label}</a>
      </div>
  );
}

