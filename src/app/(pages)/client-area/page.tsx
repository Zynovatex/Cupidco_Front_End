import ClientAreaSection01 from "../_page-components/client-area/ClientAreaSection01";

export default function ClientArea() {
  return (
    <>
      {/* Client Area section 01  */}
      <div
        className="bg-cover bg-center bg-no-repeat h-screen flex flex-col gap-5 justify-center items-center py-28 px-10 "
        style={{ backgroundImage: "url(/images/ClientAreaBg.png)" }}
      >
        <ClientAreaSection01 />
      </div>
    </>
  );
}
