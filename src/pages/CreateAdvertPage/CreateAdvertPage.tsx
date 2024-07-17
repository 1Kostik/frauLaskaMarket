import AdminForm from "@components/AdminForm";
import { containerStyles } from "@styles/variables";
import { sectionStyle } from "./CreateAdvertPage.styled";

const CreateAdvertPage = () => {
  return (
    <section css={sectionStyle}>
      <div css={containerStyles}>
        <AdminForm />
      </div>
    </section>
  );
};

export default CreateAdvertPage;
