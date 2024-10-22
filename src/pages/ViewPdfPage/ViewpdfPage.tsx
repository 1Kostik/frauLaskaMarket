import MyDocument from "@components/MyDocument/MyDocument";
import { containerStyles } from "@styles/variables";
import { PDFViewer } from "@react-pdf/renderer";
import { useAppSelector } from "@redux/hooks";
import { selectOrderData } from "@redux/orders/selectors";

const ViewpdfPage = () => {
  const data = useAppSelector(selectOrderData)
  return (
    <section style={{ paddingTop: "120px", paddingBottom: "40px" }}>
      <div css={containerStyles}>
        <PDFViewer width="100%" height="600px">
          <MyDocument data={data}/>
        </PDFViewer>
      </div>
    </section>
  );
};

export default ViewpdfPage;
