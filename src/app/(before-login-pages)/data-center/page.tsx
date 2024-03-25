import DataCentre1 from "../_page-components/data_centre/DataCentre1";
import DataCentre2 from "../_page-components/data_centre/DataCentre2";
import { Metadata } from 'next';
import DataCenter3 from "../_page-components/data_centre/DataCenter3";

export const metadata: Metadata = {
  title: "Data Center"
};

const DataCenter = () => {
  return (
    <div>
      <DataCentre1 />
      <DataCentre2 />
      <DataCenter3 />
    </div>
  );
};

export default DataCenter;
