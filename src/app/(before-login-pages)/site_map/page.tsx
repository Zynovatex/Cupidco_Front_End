import SiteMapSection01 from "../_page-components/site_map/SiteMapSection01";
import SiteMapSection02 from "../_page-components/site_map/SiteMapSection02";

export default function SiteMap() {
    return (
        <>
            <div
                className="bg-cover bg-center bg-no-repeat h-screen flex flex-col gap-5 justify-center items-center py-28 px-10 "
                style={{ backgroundImage: "url(/images/SiteMapSection1Bg.png)" }}
            >
                <SiteMapSection01 />
            </div>

            <SiteMapSection02 />
        </>
    );
}
