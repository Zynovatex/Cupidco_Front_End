import DataCenterSection01 from "../_page-components/data-center/DataCenterSection01";
import DataCenterSection02 from "../_page-components/data-center/DataCenterSection02";


export default function DataCenter() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat h-screen flex flex-col gap-5 justify-center items-center py-28 px-10 "
        style={{ backgroundImage: "url(/images/DataCenterSection1Bg.png)" }}
      >
        <DataCenterSection01 />
      </div>

      <DataCenterSection02 />
    </>
  );
}
